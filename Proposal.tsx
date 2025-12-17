import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

const Proposal: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-50 via-white to-white opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          <div className="lg:w-1/2 sticky top-24">
            <div className="relative">
              <div className="absolute -top-10 -left-10 text-[200px] font-serif text-gray-50 opacity-50 leading-none select-none">"</div>
              <h2 className="text-6xl font-serif font-bold text-gray-900 leading-[1.1] mb-8 relative z-10">
                Līva, <span className="text-andele-pink">Andele</span> ir iekarojusi sirdis.
                <br />
                Tagad iekarosim ielas.
              </h2>
            </div>
            <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed">
              Jūs izveidojāt kopienu, kas mainīja veidu, kā mēs pērkam. 
              Tagad mēs piedāvājam rīku, kas mainīs veidu, kā mēs <span className="italic">saņemam</span>.
              <br /><br />
              <span className="font-semibold text-gray-900">Andele GO</span> nav tikai kurjers. Tā ir luksusa pieredze par pieejamu cenu. 
              Mēs noņemam "iepakojuma meklēšanas" stresu un "pakomāta gaidīšanas" laiku.
            </p>
            
            <div className="grid grid-cols-1 gap-6 mb-10">
               <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                 <div className="bg-green-100 p-2 rounded-full text-green-700 shrink-0"><TrendingUp size={20} /></div>
                 <div>
                    <h4 className="font-bold text-gray-900">Pozitīva vienības ekonomika</h4>
                    <p className="text-sm text-gray-500">Pelnošs no 1. dienas ar 4.50€ cenu. Mēs nešaubāmies.</p>
                 </div>
               </div>
               <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                 <div className="bg-purple-100 p-2 rounded-full text-purple-700 shrink-0"><ShieldCheck size={20} /></div>
                 <div>
                    <h4 className="font-bold text-gray-900">Pearl Protection™</h4>
                    <p className="text-sm text-gray-500">Kurjers veic foto fiksāciju saņemšanas brīdī. Drošība abām pusēm.</p>
                 </div>
               </div>
               <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                 <div className="bg-blue-100 p-2 rounded-full text-blue-700 shrink-0"><Users size={20} /></div>
                 <div>
                    <h4 className="font-bold text-gray-900">Laimīgāki Kurjeri</h4>
                    <p className="text-sm text-gray-500">Tīrs darbs (nav ēdiena), labāks atalgojums, prestižs zīmols.</p>
                 </div>
               </div>
            </div>

            <button className="group px-10 py-5 bg-gray-900 text-white rounded-full font-bold flex items-center gap-3 hover:bg-andele-pink hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300">
              Apskatīt integrācijas plānu
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="lg:w-1/2 relative lg:mt-20">
             {/* Abstract Phone UI Visualization */}
             <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-8 border-gray-800 w-[360px] mx-auto rotate-2 hover:rotate-0 transition-transform duration-700">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
                
                {/* Screen Content */}
                <div className="bg-white rounded-[2.5rem] overflow-hidden h-[700px] relative flex flex-col">
                   {/* Header */}
                   <div className="bg-andele-pink p-8 pt-14 text-white rounded-b-[3rem] shadow-xl z-10 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
                      <div className="flex justify-between items-center mb-6">
                         <Logo className="w-8 h-8 text-white" />
                         <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">LIVE</span>
                      </div>
                      <h3 className="text-3xl font-serif font-bold mb-1">Tava Kleita</h3>
                      <p className="text-pink-100 flex items-center gap-2 text-sm">
                         <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                         Kurjers ir ceļā (4 min)
                      </p>
                   </div>
                   
                   {/* Map Area */}
                   <div className="bg-gray-100 flex-grow relative -mt-10">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-full h-full opacity-40 bg-[url('https://upload.wikimedia.org/wikipedia/commons/b/bd/OpenStreetMap_Logo.svg')] bg-cover grayscale"></div>
                      </div>
                      
                      {/* Route Line */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                         <path d="M180,200 Q220,350 180,500" stroke="#E91E63" strokeWidth="4" fill="none" strokeDasharray="8 8" className="animate-[dash_10s_linear_infinite]" />
                      </svg>

                      {/* Pins */}
                      <div className="absolute top-[200px] left-[180px] -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10">
                         <Logo className="w-6 h-6 text-andele-pink" />
                      </div>
                      <div className="absolute bottom-[200px] left-[180px] -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-2xl z-20 border-4 border-white">
                         <Logo className="w-8 h-8" />
                      </div>
                   </div>

                   {/* Bottom Sheet */}
                   <div className="bg-white p-6 rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] relative z-10">
                      <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6"></div>
                      <div className="flex items-center gap-4 mb-6">
                         <div className="w-14 h-14 rounded-full bg-gray-100 overflow-hidden border-2 border-andele-pink p-0.5">
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150" className="w-full h-full rounded-full object-cover" alt="Driver" />
                         </div>
                         <div>
                            <p className="font-bold text-gray-900 text-lg">Jānis Bērziņš</p>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Andele GO Pro • 4.99 ⭐</p>
                         </div>
                         <div className="ml-auto flex gap-2">
                             <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200">
                                <span className="sr-only">Call</span>
                                📞
                             </button>
                         </div>
                      </div>
                      <button className="w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors">
                         Sazināties ar kurjeru
                      </button>
                   </div>
                </div>
             </div>
             
             {/* Floating Price Tag */}
             <div className="absolute top-40 -left-12 bg-white p-6 rounded-2xl shadow-2xl animate-bounce duration-[2000ms]">
                <div className="flex items-center gap-2 mb-1">
                   <Logo className="w-4 h-4 text-andele-pink" />
                   <span className="text-xs font-bold text-gray-400 uppercase">Fixed Price</span>
                </div>
                <span className="text-4xl font-serif font-bold text-gray-900">4.50 €</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Proposal;