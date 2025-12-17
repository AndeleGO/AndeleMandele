import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';

interface HeroProps {
  onStartPresentation: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartPresentation }) => {
  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
       {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-slate-50 skew-x-12 transform origin-top-right z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-100 rounded-full blur-[100px] opacity-60 z-0"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-20">
        <div className="flex flex-col items-center text-center">
          
          <div className="mb-8 animate-in fade-in zoom-in duration-1000">
             <div className="inline-flex items-center justify-center w-20 h-20 bg-andele-pink rounded-3xl shadow-2xl shadow-pink-300 transform rotate-45 mb-6">
                <div className="transform -rotate-45">
                   <Logo className="w-10 h-10 text-white" />
                </div>
             </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-900 leading-tight mb-8 tracking-tight">
            Andele <span className="text-transparent bg-clip-text bg-gradient-to-r from-andele-pink to-purple-600">GO</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl font-light leading-relaxed">
            Ekskluzīvs piedāvājums Andele Mandele ekosistēmai.
            <br className="hidden md:block"/>
            Apvienojot greznību ar ātrumu.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <button 
              onClick={onStartPresentation}
              className="px-10 py-5 bg-gray-900 text-white rounded-full font-bold shadow-2xl hover:bg-andele-pink hover:shadow-pink-500/30 transition-all duration-300 flex items-center gap-3 text-lg group"
            >
              Sākt Prezentāciju
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
               Tikai Līvai Jaunozolai
            </p>
          </div>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-300">
         <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;