import React from 'react';
import { Fingerprint, History, Target, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Chi Siamo</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            CertiCredia nasce come risposta al fallimento persistente delle misure di sicurezza tradizionali. Siamo l'ente custode del Cybersecurity Psychology Framework.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <History className="text-cyan-400" /> La Nostra Storia
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Fondati sulla ricerca pionieristica di <strong>Giuseppe Canale</strong> (CISSP), abbiamo trasformato 27 anni di esperienza operativa e psicoanalitica in un modello scientifico.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Dopo aver analizzato incidenti globali come SolarWinds e Colonial Pipeline, abbiamo dimostrato che il vero vettore di attacco non è solo il codice, ma i processi pre-cognitivi umani.
            </p>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="text-cyan-400" /> La Nostra Missione
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              La nostra missione è colmare il gap tra tecnologia e psicologia. Certifichiamo aziende in grado di prevedere e prevenire i fallimenti di sicurezza prima che si verifichino.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Promuoviamo una sicurezza che non colpevolizza l'utente ("l'anello debole"), ma comprende le dinamiche inconsce, come lo stress e i bias cognitivi, per costruire una resilienza reale.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                {
                    icon: <Users className="w-8 h-8 text-purple-400" />,
                    title: "Approccio Human-Centric",
                    desc: "Integrazione della teoria delle relazioni oggettuali e psicologia cognitiva."
                },
                {
                    icon: <Fingerprint className="w-8 h-8 text-purple-400" />,
                    title: "Privacy by Design",
                    desc: "Analisi aggregata (gruppi di 10+) con iniezione di rumore statistico per tutelare il singolo."
                },
                {
                    icon: <Target className="w-8 h-8 text-purple-400" />,
                    title: "Validazione Scientifica",
                    desc: "Framework basato su validazione di caso e analisi retrospettiva di incidenti reali."
                }
            ].map((val, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6">
                    <div className="bg-slate-800 p-4 rounded-full mb-4">{val.icon}</div>
                    <h4 className="text-lg font-semibold text-white mb-2">{val.title}</h4>
                    <p className="text-sm text-slate-400">{val.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};