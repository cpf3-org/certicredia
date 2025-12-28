#!/bin/bash

echo "============================================"
echo "RESET DATABASE CERTICREDIA"
echo "============================================"
echo ""

cd /home/user/certicredia

echo "1. Esecuzione seed dei dati demo..."
node scripts/seedEnhancedDemoData.js

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ DATABASE RESET COMPLETATO!"
    echo ""
    echo "Credenziali:"
    echo "- Admin: admin@certicredia.test / Admin123!@#"
    echo "- Ente: ente@certicredia.test / Ente123!@#"
    echo "- Specialist: specialist@certicredia.test / Specialist123!@#"
    echo ""
else
    echo "❌ Errore durante il seed!"
    exit 1
fi
