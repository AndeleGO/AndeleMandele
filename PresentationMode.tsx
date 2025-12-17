import React, { useState } from 'react';
import { X, ArrowRight, Heart } from 'lucide-react';
import { Logo } from './Logo';

interface PresentationModeProps {
  onClose: () => void;
}

const PresentationMode: React.FC<PresentationModeProps> = ({ onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Problēma",
      subtitle: "Kāpēc Andelei vajag GO?",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-600 leading-relaxed">
            Andele Mandele ir <span className="font-bold text-gray-900">emocionāls pirkums</span>. 
            Bet piegāde ar pakomātu ir <span className="font-bold text-red-500">emociju bremze</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
             <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-lg mb-2">Tagad</h3>
                <ul className="space-y-2 text-gray-500">
                   <li>❌ Jāmeklē kaste/maiss</li>
                   <li>❌ Jādrukā uzlīme</li>
                   <li>❌ Jāiet uz pakomātu</li>
                   <li>❌ 2-3 dienu gaidīšana</li>
                </ul>
             </div>
             <div className="p-6 bg-pink-50 rounded-2xl border border-pink-100">
                <h3 className="font-bold text-lg mb-2 text-andele-pink">Ar Andele GO</h3>
                <ul className="space-y-2 text-gray-700">
                   <li>✅ Kurjers pie durvīm 15 minūtēs</li>
                   <li>✅ Nav jāiepako (Mums ir somas)</li>
                   <li>✅ Pircējs saņem pēc 60 minūtēm</li>
                   <li>✅ "Instant Gratification"</li>
                </ul>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Risinājums",
      subtitle: "Genius Logistics™",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-gray-600">
            Mēs neesam taksometrs. Mēs esam <span className="font-bold text-blue-600">Loģistikas Tīkls</span>.
          </p>
          <div className="bg-gray-900 text-white p-6 md:p-8 rounded-3xl shadow-xl overflow-hidden">
             <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="font-mono text-sm">LIVE ALGORITHM</span>
                </div>
                <span className="font-bold text-2xl">4.50 €</span>
             </div>
             <div className="space-y-4 font-mono text-sm text-gray-300">
                <p>&gt; Scanning Route: Centrs -&gt; Pārdaugava</p>
                <p>&gt; <span className="text-green-400">Found Match 1:</span> Kleita (Ģertrūdes iela)</p>
                <p>&gt; <span className="text-green-400">Found Match 2:</span> Kurpes (Čaka iela)</p>
                <p>&gt; <span className="text-blue-400">Optimizing...</span></p>
                <p>&gt; Result: 1 Kurjers = 3 Piegādes = 10.50€ Peļņa</p>
             </div>
          </div>
          <p className="text-sm text-gray-500 text-center">
             Mūsu kurjers nebrauc tukšs. Sistēma automātiski "paķer" sūtījumus pa ceļam.
          </p>
        </div>
      )
    },
    {
      id: 3,
      title: "Bizness",
      subtitle: "Kāpēc tas atmaksājas?",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
             <div className="p-4 bg-white shadow-lg rounded-2xl border border-gray-100">
                <p className="text-gray-500 text-xs uppercase mb-1">Cena Klientam</p>
                <p className="text-3xl font-bold text-gray-900">4.50 €</p>
             </div>
             <div className="p-4 bg-white shadow-lg rounded-2xl border border-gray-100">
                <p className="text-gray-500 text-xs uppercase mb-1">Kurjers Saņem</p>
                <p className="text-3xl font-bold text-green-600">3.50 €</p>
             </div>
             <div className="p-4 bg-white shadow-lg rounded-2xl border border-gray-100">
                <p className="text-gray-500 text-xs uppercase mb-1">Platforma</p>
                <p className="text-3xl font-bold text-andele-pink">0.75 €</p>
             </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-2xl">
             <h4 className="font-bold text-gray-900 mb-2">Mērogojamība (Scale)</h4>
             <p className="text-gray-600 mb-4">
                Pie 1000 pasūtījumiem dienā (kas ir tikai 5% no Andeles apjoma):
             </p>
             <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <span className="text-gray-600">Dienas Peļņa (Neto)</span>
                <span className="font-bold text-xl text-gray-900">~750 €</span>
             </div>
             <div className="flex items-center justify-between mt-2">
                <span className="text-gray-600">Gada Peļņa (Neto)</span>
                <span className="font-bold text-xl text-andele-pink">~270,000 €</span>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Līva, darām to?",
      subtitle: "Nākamais solis",
      content: (
        <div className="text-center space-y-8">
          <div className="inline-block p-6 bg-pink-50 rounded-full animate-bounce">
             <Heart className="w-16 h-16 text-andele-pink fill-current" />
          </div>
          <h3 className="text-3xl font-serif font-bold text-gray-900">
             Šis ir "Missing Link".
          </h3>
          <p className="text-xl text-gray-600 max-w-lg mx-auto">
             Man ir tehnoloģiskais plāns, kurjeru tīkla stratēģija un mārketinga vīzija.
             Jums ir kopiena. Apvienosim spēkus.
          </p>
          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-12 py-6 bg-gray-900 text-white rounded-full font-bold text-xl hover:bg-andele-pink transition-all shadow-xl hover:shadow-pink-500/30 flex items-center justify-center gap-3 mx-auto"
          >
             Sākt Projekta Izstrādi
             <ArrowRight />
          </button>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(curr => curr + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(curr => curr - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex justify-between items-center p-6 md:p-8 border-b border-gray-100 flex-none bg-white z-20">
         <div className="flex items-center gap-3">
            <Logo className="w-8 h-8 text-andele-pink" />
            <span className="font-bold text-xl tracking-tight hidden sm:inline">Andele GO <span className="text-gray-400 font-normal">| Biznesa Piedāvājums</span></span>
            <span className="font-bold text-xl tracking-tight sm:hidden">Andele GO</span>
         </div>
         <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} />
         </button>
      </div>

      {/* Slide Content */}
      <div className="flex-1 overflow-y-auto bg-slate-50 relative">
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>

         <div className="min-h-full flex items-center justify-center p-4 md:p-6">
            <div className="max-w-4xl w-full bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 relative z-10 flex flex-col">
                <div className="mb-8">
                   <span className="text-andele-pink font-bold tracking-widest uppercase text-sm mb-2 block">
                      Solis {slides[currentSlide].id} / {slides.length}
                   </span>
                   <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-2 leading-tight">
                      {slides[currentSlide].title}
                   </h2>
                   <p className="text-lg md:text-xl text-gray-400 font-light">
                      {slides[currentSlide].subtitle}
                   </p>
                </div>
                
                <div className="flex-1">
                   {slides[currentSlide].content}
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-100">
                   <button 
                      onClick={prevSlide}
                      disabled={currentSlide === 0}
                      className={`text-gray-500 font-bold hover:text-gray-900 px-4 py-2 transition-opacity ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                   >
                      Atpakaļ
                   </button>
                   
                   <div className="flex gap-2">
                      {slides.map((_, idx) => (
                         <div 
                            key={idx} 
                            className={`h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-andele-pink w-8' : 'bg-gray-200 w-3'}`}
                         ></div>
                      ))}
                   </div>

                   {currentSlide < slides.length - 1 ? (
                      <button 
                         onClick={nextSlide}
                         className="bg-gray-900 text-white px-6 md:px-8 py-3 rounded-full font-bold hover:bg-andele-pink transition-colors flex items-center gap-2"
                      >
                         Tālāk <ArrowRight size={18} />
                      </button>
                   ) : (
                      <button className="opacity-0 px-8 pointer-events-none">Tālāk</button>
                   )}
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default PresentationMode;