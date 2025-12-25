# CertiCredia Italia - Piattaforma Backend Accreditamento Cybersecurity

**Versione 2.0** - Backend completo per gestione accreditamenti cybersecurity, Enti e Specialist.

## 📋 Indice

- [Panoramica](#panoramica)
- [Stack Tecnologico](#stack-tecnologico)
- [Architettura](#architettura)
- [Installazione](#installazione)
- [Configurazione](#configurazione)
- [Database Setup](#database-setup)
- [Avvio Applicazione](#avvio-applicazione)
- [API Endpoints](#api-endpoints)
- [Moduli](#moduli)
- [Sicurezza](#sicurezza)
- [Deployment](#deployment)
- [Manutenzione](#manutenzione)

---

## 🎯 Panoramica

Piattaforma backend professionale per gestire:

- **Organizzazioni** (Enti Pubblici e Aziende Private)
- **Specialist** qualificati (con esami e CPE)
- **Assessment** di accreditamento cybersecurity
- **Workflow** completo di revisione e approvazione
- **Evidence storage** sicuro (S3/Cloudflare R2)
- **Report PDF** con certificati di accreditamento
- **Audit trail indelebile** per compliance

---

## 🛠️ Stack Tecnologico

### Backend
- **Node.js** 18+ (ES Modules)
- **Express.js** 4.18
- **PostgreSQL** (Neon serverless)

### Sicurezza
- **JWT** con MFA/TOTP (speakeasy)
- **bcrypt** (12 rounds)
- **Audit trail** indelebile
- **Password policy** configurabile

### Storage & Files
- **AWS S3** / **Cloudflare R2** (signed URLs)
- **multer** (file upload)
- **PDFKit** (generazione certificati)

### Email
- **Resend API** (3,000/month free tier)

### Automation
- **node-cron** (scheduled tasks)

---

## 🏗️ Architettura

### Struttura Modulare

```
/certicredia/
├── modules/                     # Business Logic Modules
│   ├── auth/                   # Autenticazione + MFA
│   ├── organizations/          # Gestione Enti
│   ├── specialists/            # Gestione Specialist
│   ├── assessments/            # Dashboard Accreditamento
│   ├── evidence/               # Storage File
│   ├── workflow/               # State Machine
│   ├── reports/                # PDF Generation
│   ├── shop/                   # E-commerce (esistente)
│   └── audit/                  # Audit Trail
├── core/                        # Core Framework
│   ├── database/               # Schema + Migrations
│   ├── config/                 # Configuration
│   ├── middleware/             # Shared Middleware
│   └── utils/                  # Utilities
├── public/                      # Frontend (Vanilla JS)
├── server/                      # Legacy code (da migrare)
└── tests/                       # Test Suite
```

### Database Schema (14 Tabelle)

- **users** - Utenti sistema
- **organizations** - Enti/Aziende
- **organization_users** - Relazione many-to-many
- **specialist_profiles** - Profili Specialist
- **specialist_exam_questions** - Banca domande esame
- **specialist_exam_attempts** - Tentativi esame
- **specialist_cpe_records** - Formazione continua
- **assessment_templates** - Framework versioned
- **assessments** - Istanze accreditamento
- **evidence_files** - Metadata file caricati
- **specialist_assignments** - Assegnazioni token-based
- **review_comments** - Commenti revisione
- **audit_logs** - Log indelebili
- **password_reset_tokens** - Reset password
- **mfa_secrets** - Segreti TOTP

---

## 📦 Installazione

### 1. Clone Repository

```bash
git clone <repository-url>
cd certicredia
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment

```bash
cp .env.example .env
```

Modifica `.env` con le tue configurazioni (vedi [Configurazione](#configurazione)).

---

## ⚙️ Configurazione

### Database (Neon PostgreSQL)

```env
DATABASE_URL=postgresql://user:password@your-neon-host.neon.tech/certicredia?sslmode=require
```

**Ottieni Neon Database:**
1. Vai su https://neon.tech
2. Crea nuovo progetto
3. Copia connection string
4. Incolla in `.env`

### Email (Resend)

```env
RESEND_API_KEY=re_your_api_key
EMAIL_FROM=onboarding@resend.dev
NOTIFICATION_EMAIL=admin@certicredia.org
```

**Ottieni Resend API Key:**
1. Vai su https://resend.com
2. Registrati (3,000 email/month gratis)
3. Crea API key
4. Incolla in `.env`

### Storage (Cloudflare R2)

```env
STORAGE_PROVIDER=cloudflare
STORAGE_BUCKET=certicredia-evidence
STORAGE_ENDPOINT=https://YOUR_ACCOUNT_ID.r2.cloudflarestorage.com
STORAGE_ACCESS_KEY=your_access_key
STORAGE_SECRET_KEY=your_secret_key
```

**Setup Cloudflare R2:**
1. Dashboard Cloudflare → R2
2. Crea bucket "certicredia-evidence"
3. Crea API token (R2 Read & Write)
4. Copia credenziali in `.env`

### Sicurezza

```env
# JWT
JWT_SECRET=cambia-questo-segreto-con-almeno-32-caratteri-casuali

# Password Policy
PASSWORD_MIN_LENGTH=12
PASSWORD_REQUIRE_UPPERCASE=true
PASSWORD_REQUIRE_LOWERCASE=true
PASSWORD_REQUIRE_NUMBERS=true
PASSWORD_REQUIRE_SPECIAL=true

# MFA (obbligatorio per admin e specialist)
MFA_REQUIRED_ROLES=admin,specialist
```

---

## 🗄️ Database Setup

### 1. Esegui Migrazioni

```bash
npm run migrate
```

Questo crea tutte le 14 tabelle + indici + trigger.

### 2. Verifica Status

```bash
npm run migrate:status
```

Output atteso:
```
✅ 001_accreditation_system (2025-01-15 10:30:00)
```

### 3. (Opzionale) Seed Dati

```bash
npm run seed
```

Crea 8 prodotti di esempio per lo shop.

---

## 🚀 Avvio Applicazione

### Development Mode (con auto-reload)

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

Il server parte su **http://localhost:3000** (o porta configurata in `PORT`).

### Verifica Health

```bash
curl http://localhost:3000/api/health
```

Output atteso:
```json
{
  "status": "ok",
  "timestamp": "2025-01-15T10:30:00.000Z",
  "database": "connected"
}
```

---

## 📡 API Endpoints

### Auth & Security

```http
POST   /api/auth/register                 # Registrazione
POST   /api/auth/login                    # Login
POST   /api/auth/logout                   # Logout
GET    /api/auth/profile                  # Profilo utente
PUT    /api/auth/profile                  # Aggiorna profilo
PUT    /api/auth/password                 # Cambia password
POST   /api/auth/forgot-password          # Richiedi reset
POST   /api/auth/reset-password           # Reset con token
POST   /api/auth/mfa/setup                # Setup MFA
POST   /api/auth/mfa/verify               # Abilita MFA
POST   /api/auth/mfa/validate             # Valida TOTP
GET    /api/auth/mfa/status               # Status MFA
POST   /api/auth/mfa/disable              # Disabilita MFA
```

### Organizations

```http
POST   /api/organizations                 # Crea organizzazione
GET    /api/organizations                 # Lista (con filtri)
GET    /api/organizations/:id             # Dettagli
PUT    /api/organizations/:id             # Aggiorna
PATCH  /api/organizations/:id/status      # Cambia status
POST   /api/organizations/:id/users       # Aggiungi utente
GET    /api/organizations/:id/users       # Lista utenti
DELETE /api/organizations/:id/users/:uid  # Rimuovi utente
```

### Assessments (Workflow)

```http
POST   /api/assessments                   # Crea assessment
GET    /api/assessments/:id               # Dettagli
PATCH  /api/assessments/:id/status        # Cambia status
POST   /api/assessments/:id/assign-token  # Genera token specialist
POST   /api/assessments/accept/:token     # Accetta assignment
```

### Evidence Storage

```http
POST   /api/evidence                      # Upload file
GET    /api/evidence/:id/download         # Genera signed URL
GET    /api/evidence/assessment/:id       # Lista per assessment
DELETE /api/evidence/:id                  # Elimina file
```

### Reports

```http
POST   /api/reports/certificate/:assessmentId  # Genera PDF certificato
```

Vedi `docs/API.md` per documentazione completa con esempi.

---

## 📂 Moduli

### Auth Module
- Password recovery (email con token)
- MFA/TOTP con QR code
- Backup codes (10 single-use)
- Password policy enforcement

**Files:**
- `modules/auth/services/passwordService.js`
- `modules/auth/services/mfaService.js`
- `modules/auth/controllers/`
- `modules/auth/routes/`

### Organizations Module
- Multi-tenant con isolamento dati
- Tipologie: PA, Private, Non-profit
- Gestione utenti con ruoli
- Fatturazione separata

**Files:**
- `modules/organizations/services/organizationService.js`
- `modules/organizations/controllers/`
- `modules/organizations/routes/`

### Evidence Module
- Upload su S3/Cloudflare R2
- Signed URLs temporanei (1h default)
- Hash SHA256 per integrità
- Validazione tipo file

**Files:**
- `modules/evidence/services/storageService.js`

### Workflow Module
- State machine con transizioni validate
- Token assignment specialist
- Status: draft → in_progress → submitted → under_review → approved
- Scadenze automatiche (12 mesi)

**Files:**
- `modules/workflow/services/workflowService.js`

### Audit Module
- Log indelebili tutte le operazioni
- Masking campi sensibili
- Change tracking (old/new)
- Retention policy configurabile

**Files:**
- `modules/audit/services/auditService.js`
- `modules/audit/middleware/auditMiddleware.js`

---

## 🔒 Sicurezza

### Autenticazione
- JWT con refresh token
- MFA obbligatorio per admin/specialist
- Password hashing bcrypt (12 rounds)
- Password policy configurabile

### Multi-Tenancy
- Isolamento rigoroso via `organization_id`
- Check permessi su tutte le query
- Audit trail per tracciabilità

### File Storage
- Signed URLs temporanei
- No accesso pubblico diretto
- Validazione tipo file
- Limite dimensione (50MB default)

### Audit Trail
- Log indelebile ogni operazione critica
- IP address e user-agent
- Old/new values con diff
- Query API per investigazioni

### Rate Limiting
- 100 req/15min per IP (generale)
- 10 req/15min per endpoint auth

---

## 🚢 Deployment

### Render.com (Raccomandato)

1. **Push a GitHub**:
   ```bash
   git push origin main
   ```

2. **Crea Web Service su Render**:
   - Vai su https://render.com
   - New → Web Service
   - Collega repository GitHub
   - Build: `npm install`
   - Start: `npm start`

3. **Configura Environment Variables**:
   - Copia tutto da `.env`
   - Aggiungi su Render Dashboard → Environment

4. **Configura Database**:
   - Usa il Neon DATABASE_URL
   - Render eseguirà le migrazioni automaticamente

5. **Deploy**:
   - Render fa deploy automatico
   - Verifica su `https://your-app.onrender.com/api/health`

### Vercel / Railway / Heroku

Simile a Render, usa `package.json` scripts:
- Build: `npm install`
- Start: `npm start`

---

## 🔧 Manutenzione

### Cron Jobs (Automatici)

Se `CRON_ENABLED=true`:

- **Token cleanup**: Daily 2 AM - Pulisce token scaduti
- **CPE compliance**: Annually Jan 1st - Sospende specialist non conformi
- **Expiry notifications**: Daily 9 AM - Avvisa scadenze accreditamenti
- **Audit cleanup**: Daily 3 AM - Pulisce log vecchi (se retention policy)

### Backup Database

**Neon** ha backup automatici. Per backup manuale:

```bash
pg_dump $DATABASE_URL > backup_$(date +%Y%m%d).sql
```

### Monitoring

Consigliati:
- **Sentry** (error tracking)
- **LogTail** (log aggregation)
- **Uptime Robot** (uptime monitoring)

### Update Dependencies

```bash
npm update
npm audit fix
```

---

## 📚 Documentazione Aggiuntiva

- `docs/API.md` - API Endpoints completa
- `docs/DATABASE.md` - Schema database dettagliato
- `docs/ARCHITECTURE.md` - Architettura e design
- `docs/DEPLOYMENT.md` - Guida deployment avanzata
- `modules/*/README.md` - Documentazione per ogni modulo

---

## 🐛 Troubleshooting

### Database connection error

**Errore**: `ECONNREFUSED` o `SSL required`

**Soluzione**:
1. Verifica `DATABASE_URL` in `.env`
2. Assicurati che Neon database sia attivo
3. Verifica `?sslmode=require` nell'URL

### Email non inviate

**Errore**: `Resend API error 403`

**Soluzione**:
1. Verifica `RESEND_API_KEY` valida
2. Usa `onboarding@resend.dev` per testing
3. Verifica dominio per email custom

### MFA QR Code non funziona

**Soluzione**:
1. Usa app autenticatore aggiornata (Google Authenticator, Authy)
2. Verifica orologio sistema sincronizzato
3. Usa i backup codes se necessario

### File upload error

**Errore**: `403 Forbidden` su S3/R2

**Soluzione**:
1. Verifica credenziali S3/R2 in `.env`
2. Controlla permessi bucket (Read & Write)
3. Verifica endpoint corretto

---

## 📄 Licenza

Proprietario - CertiCredia Italia S.r.l.

---

## 👥 Supporto

- **Email**: request@certicredia.org
- **Issues**: GitHub Issues
- **Documentazione**: `/docs` folder

---

**Versione**: 2.0.0
**Ultimo aggiornamento**: 2025-01-15
**Node.js**: >= 18.0.0
**Database**: PostgreSQL 14+
