import React from 'react';
import { UserCheck, Building2, FileJson, BrainCircuit, GraduationCap, BarChart3, TrendingUp, Shield, Users, Lock, ChevronRight } from 'lucide-react';
import { Button } from './Button';

export const Services: React.FC = () => {
  return (
    <div className="bg-slate-950 py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            SEZIONE SPECIALISTI - 2 BLOCCHI DISTINTI
           ========================================================================= */}
        <section id="specialists" className="mb-40 scroll-mt-24">
          <div className="flex items-center gap-3 text-cyan-400 font-bold mb-12 border-b border-slate-800 pb-4">
             <GraduationCap className="w-8 h-8" />
             <span className="text-2xl tracking-widest">PER SPECIALISTI</span>
          </div>

          {/* -------------------- BLOCCO 1: LA CERTIFICAZIONE (IL KIT) -------------------- */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 mb-16 shadow-xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-xs font-bold mb-4">FASE 1: L'ESAME</div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Diventa Auditor Certificato CPF3
                </h2>
                <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                    Le aziende cercano professionisti che vadano oltre la checklist tecnica. La certificazione CertiCredia ti abilita all'uso del framework psicologico per affiancare le aziende.
                </p>
                
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="bg-slate-800 p-3 rounded-lg h-fit"><UserCheck className="w-6 h-6 text-cyan-500" /></div>
                        <div>
                            <h4 className="text-xl font-semibold text-white">Esame Specialist</h4>
                            <p className="text-slate-400">Ottieni il badge ufficiale e l'iscrizione all'albo degli auditor abilitati.</p>
                        </div>
                    </div>
                </div>
                <Button variant="primary" className="mt-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Richiedi Syllabus Esame
                </Button>
                </div>
                
                {/* L'IMMAGINE DEL KIT (RICHIESTA) */}
                <div className="flex-1 w-full relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
                    <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                        <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-slate-700 pb-4">Il Kit dello Specialista</h3>
                        <ul className="space-y-4">
                            {['Manuale Operativo CPF3:2025', 'Accesso Dashboard Valutatore', 'Slide Formative per Clienti', 'Badge Digitale Blockchain'].map((item, i) => (
                                <li key={i} className="flex items-center justify-between p-4 bg-slate-900 rounded-lg border border-slate-800 group hover:border-cyan-500/30 transition-colors">
                                    <span className="text-slate-300 font-medium">{item}</span>
                                    <div className="w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
          </div>

          {/* -------------------- BLOCCO 2: LA CARRIERA (IL GRIGLIA) -------------------- */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700">
             <div className="text-center mb-12">
                <div className="inline-block px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-xs font-bold mb-4">FASE 2: IL LAVORO</div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Percorso di Carriera Auditor</h3>
                <p className="text-slate-400 max-w-2xl mx-auto">Da tecnico a consulente strategico. Il CPF3 ti permette di accedere a ruoli di governance ad alto valore aggiunto.</p>
             </div>
             
             {/* L'IMMAGINE DELLA CARRIERA (GRID) */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all group">
                    <div className="text-5xl font-black text-slate-800 mb-6 group-hover:text-slate-700 transition-colors">01</div>
                    <h4 className="text-2xl font-bold text-white mb-2">Training</h4>
                    <p className="text-slate-400 mb-6">Corso intensivo di 40 ore su psicologia cognitiva.</p>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden"><div className="h-full w-1/3 bg-cyan-900"></div></div>
                </div>
                <div className="bg-slate-950 p-8 rounded-2xl border border-cyan-900/50 shadow-lg hover:border-cyan-500/50 transition-all relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 bg-cyan-500 text-slate-900 text-xs font-bold rounded-bl-lg">TOP TIER</div>
                    <div className="text-5xl font-black text-slate-800 mb-6 group-hover:text-cyan-900/20 transition-colors">02</div>
                    <h4 className="text-2xl font-bold text-white mb-2">Certification</h4>
                    <p className="text-slate-400 mb-6">Esame teorico-pratico e rilascio del badge CPF3 Auditor.</p>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden"><div className="h-full w-2/3 bg-cyan-500"></div></div>
                </div>
                <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all group">
                    <div className="text-5xl font-black text-slate-800 mb-6 group-hover:text-slate-700 transition-colors">03</div>
                    <h4 className="text-2xl font-bold text-white mb-2">Placement</h4>
                    <p className="text-slate-400 mb-6">Accesso al network CertiCredia per affiancamento clienti.</p>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden"><div className="h-full w-full bg-purple-500"></div></div>
                </div>
             </div>
          </div>
        </section>


        {/* =========================================================================
            SEZIONE AZIENDE - 2 BLOCCHI DISTINTI
           ========================================================================= */}
        <section id="companies" className="scroll-mt-24">
          <div className="flex items-center justify-end gap-3 text-blue-400 font-bold mb-12 border-b border-slate-800 pb-4 text-right">
             <span className="text-2xl tracking-widest">PER AZIENDE</span>
             <Building2 className="w-8 h-8" />
          </div>

          {/* -------------------- BLOCCO 1: LA SOLUZIONE TECNICA (DASHBOARD) -------------------- */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 mb-16 shadow-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* L'IMMAGINE DELLA DASHBOARD (RICHIESTA) */}
                <div className="order-2 md:order-1 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-slate-950 border border-slate-700 rounded-2xl p-6 shadow-2xl">
                        <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                            <span className="text-white font-bold flex items-center gap-2"><Shield className="w-4 h-4 text-blue-400"/> CPF3 Risk View</span>
                            <span className="text-xs bg-red-900/30 text-red-400 px-2 py-1 rounded border border-red-900/50 animate-pulse">Critical Level</span>
                        </div>
                        <div className="space-y-6">
                            {[
                                { label: 'Vulnerabilità Autorità (Cat 1.x)', val: '85%', color: 'bg-red-500' },
                                { label: 'Sovraccarico Cognitivo (Cat 5.x)', val: '62%', color: 'bg-yellow-500' },
                                { label: 'Stress Response (Cat 7.x)', val: '12%', color: 'bg-green-500' }
                            ].map((item, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between text-xs text-slate-300 mb-2 font-medium">
                                        <span>{item.label}</span>
                                        <span>{item.val}</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden border border-slate-700/50">
                                        <div className={`${item.color} h-full rounded-full shadow-lg`} style={{width: item.val}}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between text-xs text-slate-500">
                            <span>Last scan: Realtime</span>
                            <span>Engine: v3.2.1</span>
                        </div>
                </div>
                </div>

                <div className="order-1 md:order-2">
                <div className="inline-block px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-xs font-bold mb-4">STRUMENTI</div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Predizione del Rischio Umano
                </h2>
                <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                    Ottieni la certificazione che dimostra la tua resilienza psicologica. Sostituisci la falsa sicurezza della compliance cartacea (ISO standard) con la predizione attiva tramite la nostra Dashboard.
                </p>
                
                <div className="grid gap-6 mb-8">
                    <div className="flex gap-4">
                        <div className="bg-slate-800 p-3 rounded-lg h-fit"><BarChart3 className="w-6 h-6 text-blue-400" /></div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">Dashboard 10x10</h3>
                            <p className="text-slate-400">100 indicatori psicologici monitorati in tempo reale.</p>
                        </div>
                    </div>
                </div>

                <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Richiedi Demo
                </Button>
                </div>
            </div>
           </div>

           {/* -------------------- BLOCCO 2: IL VALORE STRATEGICO (ROI) -------------------- */}
           <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700">
              <div className="flex flex-col justify-center order-2 md:order-1">
                  <div className="inline-block px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-xs font-bold mb-4 w-fit">VANTAGGI</div>
                  <h3 className="text-3xl font-bold text-white mb-6">Perché abbandonare i vecchi standard?</h3>
                  <p className="text-slate-400 mb-8 text-lg">
                      Le certificazioni tradizionali guardano ai processi statici. Il CPF3:2025 guarda alle persone che li eseguono, riducendo drasticamente gli incidenti.
                  </p>
                  <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-slate-300">
                          <div className="bg-red-500/10 p-2 rounded text-red-400"><Lock className="w-5 h-5" /></div>
                          <span className="line-through decoration-red-500/50 decoration-2 text-slate-500">Focus solo su Hardware/Software</span>
                      </li>
                      <li className="flex items-center gap-3 text-white font-medium">
                          <div className="bg-green-500/10 p-2 rounded text-green-400"><Users className="w-5 h-5" /></div>
                          <span>Focus su Stress, Bias e Comportamento</span>
                      </li>
                      <li className="flex items-center gap-3 text-white font-medium">
                          <div className="bg-green-500/10 p-2 rounded text-green-400"><TrendingUp className="w-5 h-5" /></div>
                          <span>Riduzione incidenti del 40% nel primo anno</span>
                      </li>
                  </ul>
              </div>
              
              {/* L'IMMAGINE DEL ROI (RICHIESTA) */}
              <div className="order-1 md:order-2 relative h-64 md:h-auto bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center group shadow-2xl">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity transform group-hover:scale-110 duration-700"></div>
                   <div className="relative z-10 text-center p-8 bg-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-700">
                       <div className="text-6xl font-black text-white mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">+200%</div>
                       <div className="text-slate-300 font-bold uppercase tracking-widest text-sm">ROI Sicurezza</div>
                       <div className="text-slate-500 text-xs mt-2">Anno fiscale 2024</div>
                   </div>
              </div>
           </div>

        </section>

      </div>
    </div>
  );
};