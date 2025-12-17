import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ArrowDown } from 'lucide-react';
import { Logo } from './components/Logo';
import Hero from './components/Hero';
import Proposal from './components/Proposal';
import CourierFleet from './components/CourierFleet';
import MapDemo from './components/MapDemo';
import Economics from './components/Economics';
import GeminiMarketAnalysis from './components/GeminiMarketAnalysis';
import PresentationMode from './components/PresentationMode';

const App: React.FC = () => {
  const [showPresentation, setShowPresentation] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-andele-pink selection:text-white scroll-smooth relative">
      
      {/* Presentation Overlay */}
      {showPresentation && (
        <PresentationMode onClose={() => setShowPresentation(false)} />
      )}

      {/* Premium Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-xl z-50 border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <Logo className="w-8 h-8 text-andele-pink" />
              <span className="text-2xl font-serif font-bold text-gray-900 tracking-tighter">Andele GO</span>
            </div>
            
            <div className="hidden md:flex space-x-10">
              <a href="#vision" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">Vīzija</a>
              <a href="#fleet" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">Flote</a>
              <a href="#tech" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">Tehnoloģija</a>
              <a href="#finance" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">Bizness</a>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowPresentation(true)}
                className="hidden sm:block px-6 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-full hover:bg-andele-pink transition-colors shadow-lg hover:shadow-pink-500/25"
              >
                Sākt Prezentāciju
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero onStartPresentation={() => setShowPresentation(true)} />
        
        <div id="vision" className="scroll-mt-20">
           <Proposal />
        </div>

        <div id="fleet" className="scroll-mt-20">
           <CourierFleet />
        </div>

        {/* Tech Section - Detailed */}
        <section id="tech" className="py-32 bg-gray-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 mb-20">
               <div className="lg:w-1/3">
                  <span className="text-andele-pink font-bold tracking-widest uppercase text-sm mb-4 block">Tehnoloģija</span>
                  <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Ģeniāla Loģistika (Genius Logistics™)</h2>
                  <p className="text-gray-600 font-light text-lg mb-6 leading-relaxed">
                    Mūsu AI algoritms nedarbojas kā standarta taksometrs. Tas "skenē" apkārtni 24/7. 
                    Ja kurjers ved paciņu no Centra uz Pārdaugavu, sistēma automātiski atrod citus pārdevējus pa ceļam, kuru paciņas jānogādā tajā pašā virzienā.
                  </p>
                  <ul className="space-y-4">
                     <li className="flex gap-3 text-gray-700 font-medium">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">1</div>
                        Viena brauciena laikā tiek apkalpoti 2-4 klienti.
                     </li>
                     <li className="flex gap-3 text-gray-700 font-medium">
                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">2</div>
                        Kurjera peļņa pieaug trīskārši, nemainot cenu klientam.
                     </li>
                     <li className="flex gap-3 text-gray-700 font-medium">
                        <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-xs font-bold">3</div>
                        Ekoloģiskākais veids, kā pārvietot preces pilsētā.
                     </li>
                  </ul>
               </div>
               <div className="lg:w-2/3">
                   <div className="shadow-2xl rounded-3xl overflow-hidden border border-gray-200 bg-white transform hover:scale-[1.01] transition-transform duration-500">
                     <MapDemo />
                   </div>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
               <GeminiMarketAnalysis />
               <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Datu Vadīta Izaugsme</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                     Mēs izmantojam Gemini AI un Google Maps datus, lai prognozētu pieprasījumu pirms tas rodas. 
                     Ja piektdienas vakarā līst lietus, mēs zinām, ka pieprasījums pēc "Party kleitām" ar piegādi uz mājām pieaugs par 300%. 
                     Mēs sagatavojam kurjerus iepriekš.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-gray-50 p-4 rounded-xl">
                        <p className="text-3xl font-bold text-gray-900">98%</p>
                        <p className="text-xs text-gray-500 uppercase">Piegādes precizitāte</p>
                     </div>
                     <div className="bg-gray-50 p-4 rounded-xl">
                        <p className="text-3xl font-bold text-gray-900 text-green-600">-30%</p>
                        <p className="text-xs text-gray-500 uppercase">Izmaksas pret konkurentiem</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Financials Section */}
        <section id="finance" className="py-32 bg-white scroll-mt-20">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8">
                 <div className="max-w-xl">
                    <span className="text-andele-pink font-bold tracking-widest uppercase text-sm mb-4 block">Biznesa Modelis</span>
                    <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Finanšu Ilgtspēja</h2>
                    <p className="text-gray-600 text-lg font-light">
                       Atšķirībā no "Gig Economy" milžiem, mēs nepērkam tirgus daļu ar zaudējumiem. 
                       Mūsu modelis ir pelnošs no pirmā pasūtījuma pateicoties "Genius Logistics" pakešu apvienošanai.
                    </p>
                 </div>
                 <div className="text-right hidden md:block">
                    <p className="text-6xl font-bold text-andele-pink">23%</p>
                    <p className="text-gray-500 font-medium">Lielāki ienākumi kurjeriem</p>
                 </div>
              </div>
              <Economics />
           </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
             <div className="flex flex-col items-center justify-center text-center">
                <Logo className="w-12 h-12 text-white mb-6" />
                <h2 className="text-3xl font-serif font-bold mb-8">Andele GO</h2>
                <div className="flex gap-8 mb-12 text-gray-400">
                   <a href="#" className="hover:text-white transition-colors">Privātums</a>
                   <a href="#" className="hover:text-white transition-colors">Noteikumi</a>
                   <a href="#" className="hover:text-white transition-colors">Sazināties</a>
                </div>
                <p className="text-gray-600 text-sm">
                   &copy; 2025 Konceptuāls piedāvājums Andele Mandele.
                </p>
             </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;