/**
 * Temporary endpoint to fix specialist profiles
 * DELETE THIS FILE after running the fix!
 */

import { Router } from 'express';
import { pool } from '../../../server/config/database.js';
import logger from '../../../server/utils/logger.js';

const router = Router();

/**
 * @route   POST /api/specialists/fix-profiles
 * @desc    Create missing specialist_profiles for orphaned specialist users
 * @access  Public (temporary - should be protected in production)
 */
router.post('/fix-profiles', async (req, res) => {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // Find orphaned specialists
    const orphanedResult = await client.query(`
      SELECT u.id, u.email, u.name, u.role, u.created_at
      FROM users u
      WHERE u.role = 'specialist'
      AND NOT EXISTS (
        SELECT 1 FROM specialist_profiles sp WHERE sp.user_id = u.id
      )
      ORDER BY u.id
    `);

    if (orphanedResult.rows.length === 0) {
      await client.query('ROLLBACK');
      return res.json({
        success: true,
        message: 'No orphaned specialists found. All specialists already have profiles.',
        created: 0,
        specialists: []
      });
    }

    const results = [];
    let created = 0;

    for (const user of orphanedResult.rows) {
      try {
        // Create specialist profile
        const profileResult = await client.query(`
          INSERT INTO specialist_profiles
          (user_id, status, exam_attempts, exam_passed, experience_years,
           cpe_hours_current_year, cpe_hours_total, cpe_compliant,
           created_at, updated_at)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
          RETURNING id
        `, [
          user.id,
          'candidate',  // Default status
          0,            // No exam attempts
          false,        // Exam not passed
          0,            // No experience recorded
          0,            // No CPE hours
          0,            // No total CPE hours
          true          // CPE compliant by default
        ]);

        results.push({
          user_id: user.id,
          email: user.email,
          profile_id: profileResult.rows[0].id,
          status: 'created'
        });
        created++;

      } catch (error) {
        results.push({
          user_id: user.id,
          email: user.email,
          status: 'error',
          error: error.message
        });
      }
    }

    await client.query('COMMIT');

    // Get final stats
    const statsResult = await client.query(`
      SELECT
        COUNT(*) as total_specialists,
        COUNT(CASE WHEN status = 'active' THEN 1 END) as active,
        COUNT(CASE WHEN status = 'candidate' THEN 1 END) as candidates,
        COUNT(CASE WHEN exam_passed = true THEN 1 END) as exam_passed
      FROM specialist_profiles
    `);

    logger.info(`✅ Specialist profiles fix completed: ${created} profiles created`);

    res.json({
      success: true,
      message: `Successfully created ${created} specialist profile(s)`,
      created,
      results,
      stats: statsResult.rows[0]
    });

  } catch (error) {
    await client.query('ROLLBACK');
    logger.error('Error fixing specialist profiles:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  } finally {
    client.release();
  }
});

export default router;
