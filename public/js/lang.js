// Language Management System for CertiCredia
// Supports Italian (it) and English (en-US)

const translations = {
    'it': {
        // Navbar
        'nav.home': 'Home',
        'nav.specialists': 'Specialist',
        'nav.companies': 'Governance',
        'nav.process': 'Metodologia',
        'nav.contact': 'Contatti',
        'nav.shop': 'Shop',
        'nav.cpf3': 'CPF3 Framework',
        'nav.app': 'Area Gestionale',

        // Hero Section
        'hero.badge': 'Nuovo Framework Cybersecurity 2026',
        'hero.title1': 'La sicurezza non è un\'opzione.',
        'hero.title2': 'È una Certificazione.',
        'hero.description': 'CertiCredia è il partner strategico per specialisti che vogliono eccellere e organizzazioni che esigono conformità. Un ecosistema unico per la Cybersecurity.',
        'hero.btn.specialists': 'Per Specialist',
        'hero.btn.companies': 'Per Governance',

        // Stats
        'stats.orgs': 'Organizzazioni Certificate',
        'stats.specialists': 'Specialist Attivi',
        'stats.compliance': 'Compliance',
        'stats.support': 'Supporto',

        // Specialists Section 1
        'specialists.badge': 'PER SPECIALIST',
        'specialists.title': 'Diventa uno Specialist d\'Eccellenza',
        'specialists.description': 'Ti forniamo gli strumenti per diventare lo specialista di fiducia che ogni organizzazione cerca. Ottieni l\'abilitazione all\'uso della nostra suite proprietaria.',
        'specialists.feature1': 'Certificazione Specialist Lead CertiCredia',
        'specialists.feature2': 'Accesso alla piattaforma di assessment riservata',
        'specialists.feature3': 'Network di organizzazioni partner in cerca di specialist',
        'specialists.feature4': 'Formazione continua su nuovi vettori di attacco',
        'specialists.btn': 'Candidati Ora',

        // Specialists Benefits
        'benefits.title': 'Perché scegliere il percorso CertiCredia?',
        'benefits.description': 'Diventare uno specialist non è il traguardo, è l\'inizio della tua ascesa professionale.',
        'benefits.card1.title': 'Figura Innovativa',
        'benefits.card1.description': 'Gli specialist accreditati CertiCredia accedono a un mercato innovativo con una crescita esponenziale della domanda.',
        'benefits.card2.title': 'Community Esclusiva',
        'benefits.card2.description': 'Accesso a canali digitali privati per migliorare la tua conoscenza e la tua rete professionale.',
        'benefits.card3.title': 'Incident Response',
        'benefits.card3.description': 'Partecipa come risorsa ausiliaria nei team di risposta agli incidenti critici dei nostri clienti enterprise.',

        // Specialists Section 2
        'specialists2.title': 'Specialist Accreditato CertiCredia',
        'specialists2.description': 'Le organizzazioni cercano professionisti che vadano oltre la checklist tecnica. L\'accreditamento CertiCredia ti abilita all\'uso del framework psicologico CPF3 per affiancare le organizzazioni.',
        'specialists2.feature1.title': 'Accreditamento Specialist',
        'specialists2.feature1.description': 'Ottieni l\'iscrizione all\'albo degli specialist abilitati all\'analisi pre-cognitiva.',
        'specialists2.feature2.title': 'Accesso al Framework',
        'specialists2.feature2.description': 'Materiale esclusivo sugli indicatori psicologici e accesso agli strumenti di valutazione.',
        'specialists2.requirements': 'Requisiti:',
        'specialists2.req1': 'Esperienza pregressa in IT/Cybersecurity o Psicologia del Lavoro oppure percorso formativo CPF3.',
        'specialists2.req2': 'Superamento dell\'esame finale CPF3.',
        'specialists2.btn': 'Richiedi Informazioni',

        // Specialist Kit
        'kit.title': 'Il Kit dello Specialist',
        'kit.item1': 'Manuale Operativo CPF3:2026',
        'kit.item2': 'Accesso Dashboard Assessment CPF3',
        'kit.item3': 'Materiale Informativo Costantemente Aggiornato',
        'kit.item4': 'Formazione Continua',

        // Career Path
        'career.title': 'Percorso di Accreditamento Specialist',
        'career.description': 'Diventa consulente strategico: aumenta il tuo valore sul mercato.',
        'career.step1.title': 'Training',
        'career.step1.description': 'Corso intensivo su psicologia cognitiva e cybersicurezza.',
        'career.step2.title': 'Accreditation',
        'career.step2.description': 'Esame teorico-pratico e rilascio del badge CPF3 Specialist.',
        'career.step3.title': 'Specialist',
        'career.step3.description': 'Formazione avanzata sugli strumenti operativi del CPF3.',

        // Companies Section
        'companies.badge': 'PER GOVERNANCE',
        'companies.title': 'Conformità che Protegge Realmente',
        'companies.description': 'Non basta una checklist. La cybersecurity richiede comprensione, strategia, e specialist qualificati. CertiCredia è il partner ufficiale per organizzazioni che vogliono trasformare la compliance in un vantaggio competitivo.',
        'companies.feature1': 'Valutazione CPF3 - Framework psicologico per la cybersecurity',
        'companies.feature2': 'Certificazione di conformità conforme a NIS2, DORA, ISO27001',
        'companies.feature3': 'Dashboard real-time per monitorare lo stato della sicurezza',
        'companies.feature4': 'Accesso a specialist certificati per interventi e training',
        'companies.btn': 'Richiedi Demo',

        // Companies Benefits
        'companies.benefits.title': 'I vantaggi per la tua organizzazione',
        'companies.benefits.card1.title': 'Riduzione del Rischio',
        'companies.benefits.card1.description': 'Identifica vulnerabilità comportamentali prima che vengano sfruttate.',
        'companies.benefits.card2.title': 'Compliance Semplificata',
        'companies.benefits.card2.description': 'Un unico framework che copre NIS2, DORA, e ISO27001.',
        'companies.benefits.card3.title': 'ROI Misurabile',
        'companies.benefits.card3.description': 'Dashboard avanzate per dimostrare l\'efficacia della security posture.',

        // Process Section
        'process.title': 'Come Funziona',
        'process.description': 'Un processo strutturato in 4 fasi per garantire la massima efficacia',
        'process.step1.title': 'Assessment Iniziale',
        'process.step1.description': 'Analisi approfondita del contesto organizzativo e delle vulnerabilità comportamentali',
        'process.step2.title': 'Piano di Azione',
        'process.step2.description': 'Definizione di strategie personalizzate basate sul framework CPF3',
        'process.step3.title': 'Implementazione',
        'process.step3.description': 'Deployment guidato con formazione del personale e degli specialist',
        'process.step4.title': 'Certificazione',
        'process.step4.description': 'Validazione e rilascio della certificazione con monitoraggio continuo',

        // Contact Section
        'contact.badge': 'INIZIA ORA',
        'contact.title': 'Hai Domande?',
        'contact.description': 'Il nostro team è pronto ad aiutarti a iniziare il tuo percorso CertiCredia',
        'contact.email.label': 'Email',
        'contact.email.placeholder': 'tuo@email.com',
        'contact.message.label': 'Messaggio',
        'contact.message.placeholder': 'Raccontaci le tue esigenze...',
        'contact.btn': 'Invia Richiesta',
        'contact.alternative': 'Oppure scrivici direttamente a',

        // Footer
        'footer.description': 'Il partner strategico per organizzazioni e specialisti nella cybersecurity moderna.',
        'footer.links': 'Link Utili',
        'footer.link.about': 'Chi Siamo',
        'footer.link.specialists': 'Per Specialist',
        'footer.link.companies': 'Per Organizzazioni',
        'footer.link.docs': 'Documentazione',
        'footer.resources': 'Risorse',
        'footer.link.blog': 'Blog',
        'footer.link.faq': 'FAQ',
        'footer.link.support': 'Supporto',
        'footer.link.privacy': 'Privacy Policy',
        'footer.legal': 'Legale',
        'footer.link.terms': 'Termini di Servizio',
        'footer.link.cookie': 'Cookie Policy',
        'footer.copyright': '© 2024 CertiCredia. Tutti i diritti riservati.',

        // Companies Detailed Section
        'companies.gov.badge': 'LA GOVERNANCE',
        'companies.gov.title': 'La Security Governance, Semplificata',
        'companies.gov.description': 'Il nostro ecosistema ti permette di migliora la maturità della cybersicurezza e della strategia in cybersecurity governance.',
        'companies.dashboard.title': 'Dashboard Compliance',
        'companies.dashboard.description': 'Visualizza il tuo livello di sicurezza in tempo reale e monitora i gap.',
        'companies.matrix.title': 'Matrice di Compilazione',
        'companies.matrix.description': 'Template pre-compilati e guidati per l\'assesment.',
        'companies.demo.btn': 'Richiedi Demo Dashboard',

        // Companies CPF3 Section
        'companies.cpf3.badge': 'PER LA GOVERNANCE',
        'companies.cpf3.title': 'Certificazione CPF3:2026',
        'companies.cpf3.description': 'Ottieni la certificazione che dimostra la tua resilienza psicologica oltre che tecnica. Sostituisci la falsa sicurezza della compliance cartacea (ISO standard) con la predizione attiva del rischio umano.',
        'companies.cpf3.dashboard.title': 'Dashboard & Matrice 10x10',
        'companies.cpf3.dashboard.description': 'Visualizza i 100 indicatori psicologici in tempo reale con punteggi semaforici (Verde/Giallo/Rosso).',
        'companies.cpf3.matrix.title': 'Matrice di Compilazione',
        'companies.cpf3.matrix.description': 'Template guidati per mappare policy aziendali e procedure HR sugli standard psicologici del framework.',
        'companies.cpf3.btn': 'Richiedi Assesment Aziendale',
        'companies.cpf3.why.title': 'Perché abbandonare i vecchi standard?',
        'companies.cpf3.why.description': 'Le certificazioni tradizionali (ISO 27001) guardano ai processi statici. Il CPF3:2026 guarda alle persone che li eseguono.',
        'companies.cpf3.old': 'Focus solo su Hardware/Software',
        'companies.cpf3.new1': 'Focus su Stress, Bias e Comportamento',
        'companies.cpf3.new2': 'Riduzione incidenti del 40% nel primo anno',
        'companies.cpf3.roi': 'ROI +200%',
        'companies.cpf3.roi.subtitle': 'Sull\'investimento in sicurezza',

        // Company Real Benefits
        'companies.real.title': 'Non solo burocrazia: Vantaggi Reali',
        'companies.real.legal.title': 'Protezione Legale',
        'companies.real.legal.description': 'La certificazione CertiCredia dimostra la "due diligence" nella gestione dei dati, offrendo uno scudo legale fondamentale in caso di data breach secondo le normative GDPR.',
        'companies.real.competitive.title': 'Vantaggio Competitivo',
        'companies.real.competitive.description': 'Entra nelle vendor list delle grandi multinazionali. La certificazione è sempre più un requisito bloccante per partecipare a gare d\'appalto pubbliche e private.',
        'companies.real.risk.title': 'Riduzione Rischi',
        'companies.real.risk.description': 'Riduci del 70% la probabilità di successo degli attacchi ransomware grazie all\'implementazione strutturata dei controlli di sicurezza previsti dal framework.',

        // Process Detailed
        'process.main.title': 'Il Nostro Metodo',
        'process.main.subtitle': 'Dall\'assesment alla certificazione in 4 step chiari.',
        'process.detailed.step1.title': 'Analisi Iniziale',
        'process.detailed.step1.description': 'Valutazione del perimetro e delle necessità, in autonomia o in collaborazione con un nostro specialist accreditato.',
        'process.detailed.step2.title': 'Onboarding Piattaforma',
        'process.detailed.step2.description': 'Accesso alla dashboard e caricamento della matrice documentale.',
        'process.detailed.step3.title': 'Validazione Assesment',
        'process.detailed.step3.description': 'I dati vengono analizzati e, se necessario, si attiva la procedura di integrazione.',
        'process.detailed.step4.title': 'Rilascio Certificazione',
        'process.detailed.step4.description': 'Emissione del certificato digitale crittografato e badge pubblico.',

        // Contact Form
        'contact.form.title': 'Centro Richieste',
        'contact.form.subtitle': 'Qui puoi compilare il form per richiedere informazioni.',
        'contact.form.company.btn': 'Sono un\'organizzazione',
        'contact.form.specialist.btn': 'Sono uno Specialista',
        'contact.form.name.label': 'Nome',
        'contact.form.name.placeholder': 'Mario Rossi',
        'contact.form.email.label': 'Email Organizzazione',
        'contact.form.email.placeholder': 'mario@azienda.it',
        'contact.form.company.label': 'Nome Organizzazione & P.IVA',
        'contact.form.linkedin.label': 'Link LinkedIn o CV',
        'contact.form.linkedin.placeholder': 'https://linkedin.com/in/...',
        'contact.form.message.label': 'Messaggio',
        'contact.form.message.placeholder': 'Come possiamo aiutarti?',
        'contact.form.submit.company': 'Richiedi Preventivo Certificazione',
        'contact.form.submit.specialist': 'Candidati come Specialist',
        'contact.form.privacy': 'Cliccando su invia accetti la nostra Privacy Policy. I tuoi dati sono trattati secondo GDPR.',

        // Footer Details
        'footer.company.description': 'Ente certificatore leader nella sicurezza informatica. Proteggiamo il presente per garantire il futuro.',
        'footer.certifications.title': 'Certificazioni',
        'footer.certifications.cpf3': 'CPF3:2026',
        'footer.certifications.nis2': 'NIS 2 Compliance',
        'footer.certifications.gdpr': 'GDPR Assesment',
        'footer.certifications.tisax': 'TISAX',
        'footer.company.title': 'Azienda',
        'footer.company.about': 'Chi Siamo',
        'footer.company.team': 'Il Nostro Team',
        'footer.company.careers': 'Lavora con Noi',
        'footer.company.blog': 'Blog',
        'footer.contacts.title': 'Contatti',
        'footer.contacts.email': 'info@certicredia.it',
        'footer.copyright.year': '© 2026 CertiCredia',

        // AI Chat Widget
        'chat.open.btn': 'Chiedi all\'AI',
        'chat.header.title': 'CertiCredia AI Assistant',
        'chat.welcome.message': 'Ciao! Sono l\'assistente virtuale di CertiCredia. Come posso aiutarti con le nostre certificazioni oggi?',
        'chat.input.placeholder': 'Chiedi su ISO 27001, costi...',
        'chat.disclaimer': 'L\'AI può commettere errori. Verifica le informazioni importanti.',
    },
    'en-US': {
        // Navbar
        'nav.home': 'Home',
        'nav.specialists': 'Specialists',
        'nav.companies': 'Governance',
        'nav.process': 'Methodology',
        'nav.contact': 'Contact',
        'nav.shop': 'Shop',
        'nav.cpf3': 'CPF3 Framework',
        'nav.app': 'Management Area',

        // Hero Section
        'hero.badge': 'New Cybersecurity Framework 2026',
        'hero.title1': 'Security is not an option.',
        'hero.title2': 'It\'s a Certification.',
        'hero.description': 'CertiCredia is the strategic partner for specialists who want to excel and organizations that demand compliance. A unique cybersecurity ecosystem.',
        'hero.btn.specialists': 'For Specialists',
        'hero.btn.companies': 'For Governance',

        // Stats
        'stats.orgs': 'Certified Organizations',
        'stats.specialists': 'Active Specialists',
        'stats.compliance': 'Compliance',
        'stats.support': 'Support',

        // Specialists Section 1
        'specialists.badge': 'FOR SPECIALISTS',
        'specialists.title': 'Become an Excellence Specialist',
        'specialists.description': 'We provide you with the tools to become the trusted specialist every organization seeks. Get authorized to use our proprietary suite.',
        'specialists.feature1': 'CertiCredia Lead Specialist Certification',
        'specialists.feature2': 'Access to the exclusive assessment platform',
        'specialists.feature3': 'Network of partner organizations seeking specialists',
        'specialists.feature4': 'Continuous training on new attack vectors',
        'specialists.btn': 'Apply Now',

        // Specialists Benefits
        'benefits.title': 'Why choose the CertiCredia path?',
        'benefits.description': 'Becoming a specialist is not the goal, it\'s the beginning of your professional ascent.',
        'benefits.card1.title': 'Innovative Role',
        'benefits.card1.description': 'CertiCredia accredited specialists access an innovative market with exponential demand growth.',
        'benefits.card2.title': 'Exclusive Community',
        'benefits.card2.description': 'Access to private digital channels to improve your knowledge and professional network.',
        'benefits.card3.title': 'Incident Response',
        'benefits.card3.description': 'Participate as an auxiliary resource in our enterprise clients\' critical incident response teams.',

        // Specialists Section 2
        'specialists2.title': 'CertiCredia Accredited Specialist',
        'specialists2.description': 'Organizations seek professionals who go beyond the technical checklist. CertiCredia accreditation enables you to use the CPF3 psychological framework to support organizations.',
        'specialists2.feature1.title': 'Specialist Accreditation',
        'specialists2.feature1.description': 'Get registered in the registry of specialists authorized for pre-cognitive analysis.',
        'specialists2.feature2.title': 'Framework Access',
        'specialists2.feature2.description': 'Exclusive material on psychological indicators and access to assessment tools.',
        'specialists2.requirements': 'Requirements:',
        'specialists2.req1': 'Previous experience in IT/Cybersecurity or Work Psychology, or CPF3 training path.',
        'specialists2.req2': 'Passing the CPF3 final exam.',
        'specialists2.btn': 'Request Information',

        // Specialist Kit
        'kit.title': 'The Specialist Kit',
        'kit.item1': 'CPF3:2026 Operational Manual',
        'kit.item2': 'CPF3 Assessment Dashboard Access',
        'kit.item3': 'Constantly Updated Information Material',
        'kit.item4': 'Continuous Training',

        // Career Path
        'career.title': 'Specialist Accreditation Path',
        'career.description': 'Become a strategic consultant: increase your market value.',
        'career.step1.title': 'Training',
        'career.step1.description': 'Intensive course on cognitive psychology and cybersecurity.',
        'career.step2.title': 'Accreditation',
        'career.step2.description': 'Theoretical-practical exam and CPF3 Specialist badge release.',
        'career.step3.title': 'Specialist',
        'career.step3.description': 'Advanced training on CPF3 operational tools.',

        // Companies Section
        'companies.badge': 'FOR GOVERNANCE',
        'companies.title': 'Compliance that Truly Protects',
        'companies.description': 'A checklist is not enough. Cybersecurity requires understanding, strategy, and qualified specialists. CertiCredia is the official partner for organizations that want to transform compliance into a competitive advantage.',
        'companies.feature1': 'CPF3 Assessment - Psychological framework for cybersecurity',
        'companies.feature2': 'Compliance certification aligned with NIS2, DORA, ISO27001',
        'companies.feature3': 'Real-time dashboard to monitor security status',
        'companies.feature4': 'Access to certified specialists for interventions and training',
        'companies.btn': 'Request Demo',

        // Companies Benefits
        'companies.benefits.title': 'Benefits for your organization',
        'companies.benefits.card1.title': 'Risk Reduction',
        'companies.benefits.card1.description': 'Identify behavioral vulnerabilities before they are exploited.',
        'companies.benefits.card2.title': 'Simplified Compliance',
        'companies.benefits.card2.description': 'A single framework covering NIS2, DORA, and ISO27001.',
        'companies.benefits.card3.title': 'Measurable ROI',
        'companies.benefits.card3.description': 'Advanced dashboards to demonstrate security posture effectiveness.',

        // Process Section
        'process.title': 'How It Works',
        'process.description': 'A structured 4-phase process to ensure maximum effectiveness',
        'process.step1.title': 'Initial Assessment',
        'process.step1.description': 'In-depth analysis of organizational context and behavioral vulnerabilities',
        'process.step2.title': 'Action Plan',
        'process.step2.description': 'Definition of personalized strategies based on the CPF3 framework',
        'process.step3.title': 'Implementation',
        'process.step3.description': 'Guided deployment with personnel and specialist training',
        'process.step4.title': 'Certification',
        'process.step4.description': 'Validation and certification release with continuous monitoring',

        // Contact Section
        'contact.badge': 'START NOW',
        'contact.title': 'Have Questions?',
        'contact.description': 'Our team is ready to help you start your CertiCredia journey',
        'contact.email.label': 'Email',
        'contact.email.placeholder': 'your@email.com',
        'contact.message.label': 'Message',
        'contact.message.placeholder': 'Tell us about your needs...',
        'contact.btn': 'Send Request',
        'contact.alternative': 'Or write to us directly at',

        // Footer
        'footer.description': 'The strategic partner for organizations and specialists in modern cybersecurity.',
        'footer.links': 'Quick Links',
        'footer.link.about': 'About Us',
        'footer.link.specialists': 'For Specialists',
        'footer.link.companies': 'For Organizations',
        'footer.link.docs': 'Documentation',
        'footer.resources': 'Resources',
        'footer.link.blog': 'Blog',
        'footer.link.faq': 'FAQ',
        'footer.link.support': 'Support',
        'footer.link.privacy': 'Privacy Policy',
        'footer.legal': 'Legal',
        'footer.link.terms': 'Terms of Service',
        'footer.link.cookie': 'Cookie Policy',
        'footer.copyright': '© 2024 CertiCredia. All rights reserved.',

        // Companies Detailed Section
        'companies.gov.badge': 'GOVERNANCE',
        'companies.gov.title': 'Security Governance, Simplified',
        'companies.gov.description': 'Our ecosystem allows you to improve cybersecurity maturity and cybersecurity governance strategy.',
        'companies.dashboard.title': 'Compliance Dashboard',
        'companies.dashboard.description': 'View your security level in real-time and monitor gaps.',
        'companies.matrix.title': 'Compilation Matrix',
        'companies.matrix.description': 'Pre-filled and guided assessment templates.',
        'companies.demo.btn': 'Request Dashboard Demo',

        // Companies CPF3 Section
        'companies.cpf3.badge': 'FOR GOVERNANCE',
        'companies.cpf3.title': 'CPF3:2026 Certification',
        'companies.cpf3.description': 'Obtain certification that demonstrates your psychological resilience beyond just technical capability. Replace the false security of paper compliance (ISO standards) with active prediction of human risk.',
        'companies.cpf3.dashboard.title': 'Dashboard & 10x10 Matrix',
        'companies.cpf3.dashboard.description': 'View 100 psychological indicators in real-time with traffic light scoring (Green/Yellow/Red).',
        'companies.cpf3.matrix.title': 'Compilation Matrix',
        'companies.cpf3.matrix.description': 'Guided templates to map company policies and HR procedures to framework psychological standards.',
        'companies.cpf3.btn': 'Request Company Assessment',
        'companies.cpf3.why.title': 'Why abandon old standards?',
        'companies.cpf3.why.description': 'Traditional certifications (ISO 27001) look at static processes. CPF3:2026 looks at the people who execute them.',
        'companies.cpf3.old': 'Focus only on Hardware/Software',
        'companies.cpf3.new1': 'Focus on Stress, Bias and Behavior',
        'companies.cpf3.new2': '40% incident reduction in the first year',
        'companies.cpf3.roi': 'ROI +200%',
        'companies.cpf3.roi.subtitle': 'On security investment',

        // Company Real Benefits
        'companies.real.title': 'Not just bureaucracy: Real Benefits',
        'companies.real.legal.title': 'Legal Protection',
        'companies.real.legal.description': 'CertiCredia certification demonstrates "due diligence" in data management, providing a fundamental legal shield in case of data breach according to GDPR regulations.',
        'companies.real.competitive.title': 'Competitive Advantage',
        'companies.real.competitive.description': 'Enter the vendor lists of large multinationals. Certification is increasingly a blocking requirement to participate in public and private tenders.',
        'companies.real.risk.title': 'Risk Reduction',
        'companies.real.risk.description': 'Reduce the probability of successful ransomware attacks by 70% thanks to structured implementation of security controls provided by the framework.',

        // Process Detailed
        'process.main.title': 'Our Method',
        'process.main.subtitle': 'From assessment to certification in 4 clear steps.',
        'process.detailed.step1.title': 'Initial Analysis',
        'process.detailed.step1.description': 'Perimeter and needs assessment, independently or in collaboration with our accredited specialist.',
        'process.detailed.step2.title': 'Platform Onboarding',
        'process.detailed.step2.description': 'Access to dashboard and uploading of document matrix.',
        'process.detailed.step3.title': 'Assessment Validation',
        'process.detailed.step3.description': 'Data is analyzed and, if necessary, the integration procedure is activated.',
        'process.detailed.step4.title': 'Certification Release',
        'process.detailed.step4.description': 'Issuance of encrypted digital certificate and public badge.',

        // Contact Form
        'contact.form.title': 'Request Center',
        'contact.form.subtitle': 'Here you can fill out the form to request information.',
        'contact.form.company.btn': 'I\'m an organization',
        'contact.form.specialist.btn': 'I\'m a Specialist',
        'contact.form.name.label': 'Name',
        'contact.form.name.placeholder': 'John Doe',
        'contact.form.email.label': 'Organization Email',
        'contact.form.email.placeholder': 'john@company.com',
        'contact.form.company.label': 'Organization Name & Tax ID',
        'contact.form.linkedin.label': 'LinkedIn Link or CV',
        'contact.form.linkedin.placeholder': 'https://linkedin.com/in/...',
        'contact.form.message.label': 'Message',
        'contact.form.message.placeholder': 'How can we help you?',
        'contact.form.submit.company': 'Request Certification Quote',
        'contact.form.submit.specialist': 'Apply as Specialist',
        'contact.form.privacy': 'By clicking send you accept our Privacy Policy. Your data is processed according to GDPR.',

        // Footer Details
        'footer.company.description': 'Leading certification body in information security. We protect the present to guarantee the future.',
        'footer.certifications.title': 'Certifications',
        'footer.certifications.cpf3': 'CPF3:2026',
        'footer.certifications.nis2': 'NIS 2 Compliance',
        'footer.certifications.gdpr': 'GDPR Assessment',
        'footer.certifications.tisax': 'TISAX',
        'footer.company.title': 'Company',
        'footer.company.about': 'About Us',
        'footer.company.team': 'Our Team',
        'footer.company.careers': 'Work With Us',
        'footer.company.blog': 'Blog',
        'footer.contacts.title': 'Contacts',
        'footer.contacts.email': 'info@certicredia.it',
        'footer.copyright.year': '© 2026 CertiCredia',

        // AI Chat Widget
        'chat.open.btn': 'Ask AI',
        'chat.header.title': 'CertiCredia AI Assistant',
        'chat.welcome.message': 'Hello! I\'m the CertiCredia virtual assistant. How can I help you with our certifications today?',
        'chat.input.placeholder': 'Ask about ISO 27001, costs...',
        'chat.disclaimer': 'AI can make mistakes. Verify important information.',
    }
};

// Language Manager Class
class LanguageManager {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.init();
    }

    detectLanguage() {
        // Check localStorage first
        const savedLang = localStorage.getItem('certicredia_lang');
        if (savedLang && translations[savedLang]) {
            return savedLang;
        }

        // Check browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('en')) {
            return 'en-US';
        }

        // Default to Italian
        return 'it';
    }

    init() {
        // Apply translations on page load
        this.applyTranslations();

        // Setup language switcher
        this.setupLanguageSwitcher();
    }

    applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);

            if (translation) {
                // Check if element is an input/textarea
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.hasAttribute('placeholder')) {
                        element.placeholder = translation;
                    }
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang === 'it' ? 'it' : 'en';
    }

    getTranslation(key) {
        return translations[this.currentLang]?.[key] || key;
    }

    setLanguage(lang) {
        if (!translations[lang]) return;

        this.currentLang = lang;
        localStorage.setItem('certicredia_lang', lang);
        this.applyTranslations();

        // Update active state in language switcher
        this.updateLanguageSwitcher();

        // Emit custom event for other components
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }

    setupLanguageSwitcher() {
        // Add language switcher to navbar
        const navbar = document.querySelector('#desktop-menu');
        const mobileMenu = document.querySelector('#mobile-menu .space-y-1');

        if (navbar) {
            const switcher = this.createLanguageSwitcher();
            navbar.insertBefore(switcher, navbar.lastElementChild);
        }

        if (mobileMenu) {
            const mobileSwitcher = this.createLanguageSwitcher(true);
            mobileMenu.appendChild(mobileSwitcher);
        }
    }

    createLanguageSwitcher(mobile = false) {
        const container = document.createElement('div');
        container.className = mobile
            ? 'px-3 py-2 flex gap-2'
            : 'flex gap-2 items-center';

        const createButton = (lang, label) => {
            const button = document.createElement('button');
            button.className = mobile
                ? 'px-3 py-1.5 rounded text-sm font-medium transition-colors'
                : 'px-3 py-1 rounded text-xs font-medium transition-colors';
            button.textContent = label;
            button.setAttribute('data-lang', lang);

            if (lang === this.currentLang) {
                button.className += mobile
                    ? ' bg-cyan-600 text-white'
                    : ' bg-cyan-600 text-white';
            } else {
                button.className += mobile
                    ? ' bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                    : ' bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700';
            }

            button.addEventListener('click', () => this.setLanguage(lang));
            return button;
        };

        container.appendChild(createButton('it', 'IT'));
        container.appendChild(createButton('en-US', 'EN'));

        return container;
    }

    updateLanguageSwitcher() {
        const buttons = document.querySelectorAll('[data-lang]');
        buttons.forEach(button => {
            const lang = button.getAttribute('data-lang');
            const isMobile = button.classList.contains('py-1.5');

            if (lang === this.currentLang) {
                button.className = isMobile
                    ? 'px-3 py-1.5 rounded text-sm font-medium transition-colors bg-cyan-600 text-white'
                    : 'px-3 py-1 rounded text-xs font-medium transition-colors bg-cyan-600 text-white';
            } else {
                button.className = isMobile
                    ? 'px-3 py-1.5 rounded text-sm font-medium transition-colors bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                    : 'px-3 py-1 rounded text-xs font-medium transition-colors bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700';
            }
        });
    }
}

// Initialize language manager when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.langManager = new LanguageManager();
    });
} else {
    window.langManager = new LanguageManager();
}
