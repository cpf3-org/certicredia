import express from 'express';
import nodemailer from 'nodemailer';
import net from 'net';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

/**
 * SMTP Diagnostic endpoint
 * IMPORTANTE: Rimuovere in produzione dopo il debug!
 */
router.get('/test-smtp', async (req, res) => {
  const results = {
    timestamp: new Date().toISOString(),
    config: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      secure: process.env.SMTP_SECURE
    },
    tests: []
  };

  // Test 1: TCP Connection
  const tcpTest = await new Promise((resolve) => {
    const socket = net.createConnection({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      timeout: 5000
    });

    socket.on('connect', () => {
      socket.end();
      resolve({
        name: 'TCP Connection',
        status: 'success',
        message: 'TCP connection successful',
        recommendation: 'Port is open and reachable'
      });
    });

    socket.on('timeout', () => {
      socket.destroy();
      resolve({
        name: 'TCP Connection',
        status: 'failed',
        message: 'TCP connection timeout',
        recommendation: 'Render firewall may be blocking port ' + process.env.SMTP_PORT + '. Try port 465 with SSL or use external SMTP service (SendGrid, Mailgun)'
      });
    });

    socket.on('error', (err) => {
      resolve({
        name: 'TCP Connection',
        status: 'failed',
        message: err.message,
        recommendation: 'Check firewall settings or try alternative SMTP service'
      });
    });
  });

  results.tests.push(tcpTest);

  // Test 2: SMTP Authentication (only if TCP succeeded)
  if (tcpTest.status === 'success') {
    const smtpTest = await new Promise((resolve) => {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        connectionTimeout: 5000,
        greetingTimeout: 3000,
        socketTimeout: 5000
      });

      transporter.verify((error, success) => {
        if (error) {
          const isAuthError = error.code === 'EAUTH';
          resolve({
            name: 'SMTP Authentication',
            status: 'failed',
            message: error.message,
            errorCode: error.code,
            recommendation: isAuthError
              ? 'Check SMTP credentials in Aruba panel. May need app-specific password.'
              : 'SMTP server rejected connection. Check TLS/SSL settings.'
          });
        } else {
          resolve({
            name: 'SMTP Authentication',
            status: 'success',
            message: 'SMTP authentication successful',
            recommendation: 'Email service is ready to send emails'
          });
        }
      });
    });

    results.tests.push(smtpTest);
  }

  // Overall status
  const allPassed = results.tests.every(t => t.status === 'success');
  results.overall = allPassed ? 'PASSED' : 'FAILED';

  res.json(results);
});

/**
 * Alternative SMTP providers suggestions
 */
router.get('/smtp-alternatives', (req, res) => {
  res.json({
    message: 'If Render blocks SMTP ports, consider these alternatives:',
    providers: [
      {
        name: 'SendGrid',
        free_tier: '100 emails/day',
        port: 587,
        setup: 'https://sendgrid.com/pricing/',
        notes: 'Popular, reliable, good documentation'
      },
      {
        name: 'Mailgun',
        free_tier: '5,000 emails/month (first 3 months)',
        port: 587,
        setup: 'https://www.mailgun.com/pricing/',
        notes: 'Great for transactional emails'
      },
      {
        name: 'Resend',
        free_tier: '3,000 emails/month',
        port: 587,
        setup: 'https://resend.com/pricing',
        notes: 'Modern API, developer-friendly'
      },
      {
        name: 'Amazon SES',
        free_tier: '3,000 emails/month (if hosted on AWS)',
        port: 587,
        setup: 'https://aws.amazon.com/ses/pricing/',
        notes: 'Very cheap, requires AWS account'
      }
    ]
  });
});

export default router;
