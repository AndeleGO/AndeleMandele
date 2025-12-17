import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Package, Zap, Cpu, ShoppingBag } from 'lucide-react';

const MapDemo: React.FC = () => {
  const [step, setStep] = useState(0); 
  const [bagCount, setBagCount] = useState(0);

  // Animation Sequence State Machine
  // 0: Idle
  // 1: Scanning & Planning
  // 2: Moving to Pickup 1
  // 3: Moving to Pickup 2
  // 4: Moving to Bridge (Transit)
  // 5: Delivering 1
  // 6: Delivering 2
  // 7: Complete

  const startDemo = () => {
    setStep(1);
    setBagCount(0);
    
    // Timeline
    setTimeout(() => { setStep(2); }, 2000); // Start Pickup 1
    setTimeout(() => { setStep(3); setBagCount(1); }, 5000); // At Pickup 1, start to Pickup 2
    setTimeout(() => { setStep(4); setBagCount(2); }, 8000); // At Pickup 2, start Transit
    setTimeout(() => { setStep(5); }, 11000); // Cross bridge, go to Drop 1
    setTimeout(() => { setStep(6); setBagCount(1); }, 13000); // At Drop 1, go to Drop 2
    setTimeout(() => { setStep(7); setBagCount(0); }, 15000); // Done
    setTimeout(() => { setStep(0); }, 18000); // Reset
  };

  // Helper for courier position based on step
  const getCourierStyle = () => {
    const base = { transition: 'all 3s linear', transform: 'translate(-50%, -50%)' };
    switch(step) {
        case 0: return { ...base, top: '50%', left: '50%', opacity: 0 };
        case 1: return { ...base, top: '50%', left: '50%', opacity: 1, transition: 'none' }; // Center scan
        case 2: return { ...base, top: '180px', left: '550px' }; // Move to Seller 1
        case 3: return { ...base, top: '250px', left: '450px' }; // Move to Seller 2
        case 4: return { ...base, top: '350px', left: '250px' }; // Bridge
        case 5: return { ...base, top: '450px', left: '150px' }; // Drop 1
        case 6: return { ...base, top: '500px', left: '100px' }; // Drop 2
        case 7: return { ...base, top: '500px', left: '100px', opacity: 0 };
        default: return base;
    }
  };

  return (
    <div className="bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-800 relative h-[600px] w-full group">
      
      {/* HUD */}
      <div className="absolute top-0 left-0 w-full p-6 z-20 flex justify-between items-start pointer-events-none">
        <div className="bg-black/80 backdrop-blur-md p-4 rounded-xl border border-gray-700 text-white shadow-xl min-w-[200px]">
          <div className="flex items-center gap-2 mb-2">
             <div className={`w-3 h-3 rounded-full ${step > 0 ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></div>
             <span className="font-mono text-xs uppercase tracking-widest text-gray-400">AI Loģistika</span>
          </div>
          
          <div className="space-y-2 mt-2">
             <div className="flex justify-between text-sm">
                <span className="text-gray-400">Statuss:</span>
                <span className="font-bold text-andele-pink">
                   {step === 0 && "Gatavs"}
                   {step === 1 && "Meklē Maršrutu..."}
                   {(step === 2 || step === 3) && "Saņemšana (Batching)"}
                   {step === 4 && "Tranzīts"}
                   {step >= 5 && "Piegāde"}
                </span>
             </div>
             <div className="flex justify-between text-sm items-center">
                <span className="text-gray-400">Soma:</span>
                <div className="flex gap-1">
                   {[1, 2, 3].map(i => (
                      <div key={i} className={`w-2 h-4 rounded-sm ${i <= bagCount ? 'bg-andele-pink' : 'bg-gray-700'}`}></div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        <button 
          onClick={startDemo}
          className="pointer-events-auto bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg transition-all flex items-center gap-2"
        >
          {step === 0 ? <><Cpu size={18} /> Demonstrēt Loģistiku</> : 'Simulācija procesā...'}
        </button>
      </div>

      {/* RIGA MAP VISUALIZATION */}
      <div className="absolute inset-0 z-0 bg-[#0f172a]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <svg viewBox="0 0 800 600" className="w-full h-full">
          {/* Map Geometry */}
          <path d="M-50,500 C100,480 200,450 300,300 C350,220 400,180 500,150 C600,120 700,130 850,100" stroke="#1e293b" strokeWidth="80" fill="none" />
          <path d="M-50,500 C100,480 200,450 300,300 C350,220 400,180 500,150 C600,120 700,130 850,100" stroke="#334155" strokeWidth="2" fill="none" className="opacity-50" />
          
          {/* Bridges */}
          <line x1="280" y1="320" x2="340" y2="280" stroke="#475569" strokeWidth="6" />

          {/* Dynamic Route Line */}
          {step >= 2 && (
             <path 
                d="M550,180 L450,250 L250,350 L150,450 L100,500" 
                stroke="#E91E63" 
                strokeWidth="4" 
                strokeDasharray="10 5"
                fill="none"
                className="animate-[dash_30s_linear_infinite] opacity-50"
             />
          )}

          {/* Scan Radius */}
          {step === 1 && (
             <circle cx="400" cy="300" r="150" stroke="#3b82f6" strokeWidth="2" fill="rgba(59, 130, 246, 0.1)" className="animate-ping" />
          )}
        </svg>

        {/* NODES */}
        
        {/* Seller 1 */}
        <div className="absolute top-[180px] left-[550px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
           <div className={`p-2 rounded-full shadow-lg transition-all ${step > 2 ? 'bg-gray-700 opacity-50' : 'bg-white scale-110'}`}>
              <Package className="text-andele-pink w-5 h-5" />
           </div>
           <div className="bg-gray-800 text-white text-[10px] px-2 py-1 rounded mt-1">Pārdevējs A</div>
        </div>

        {/* Seller 2 (Batch) */}
        <div className="absolute top-[250px] left-[450px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
           <div className={`p-2 rounded-full shadow-lg transition-all ${step > 3 ? 'bg-gray-700 opacity-50' : 'bg-white scale-110'}`}>
              <Package className="text-andele-pink w-5 h-5" />
           </div>
           <div className="bg-gray-800 text-white text-[10px] px-2 py-1 rounded mt-1 flex items-center gap-1">
              <Zap size={8} className="text-yellow-400" /> Pārdevējs B
           </div>
        </div>

        {/* Buyer 1 */}
        <div className="absolute top-[450px] left-[150px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
           <div className={`p-2 rounded-full shadow-lg transition-all border-2 ${step === 5 ? 'bg-green-500 border-white scale-125' : 'bg-gray-800 border-gray-600'}`}>
              <MapPin className="text-white w-5 h-5" />
           </div>
           <div className="bg-gray-800 text-white text-[10px] px-2 py-1 rounded mt-1">Pircējs A</div>
        </div>

        {/* Buyer 2 */}
        <div className="absolute top-[500px] left-[100px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
           <div className={`p-2 rounded-full shadow-lg transition-all border-2 ${step === 6 ? 'bg-green-500 border-white scale-125' : 'bg-gray-800 border-gray-600'}`}>
              <MapPin className="text-white w-5 h-5" />
           </div>
           <div className="bg-gray-800 text-white text-[10px] px-2 py-1 rounded mt-1">Pircējs B</div>
        </div>

        {/* COURIER */}
        <div 
          className="absolute z-30 flex flex-col items-center justify-center"
          style={getCourierStyle()}
        >
           <div className="relative">
              <div className="bg-white p-3 rounded-full shadow-2xl shadow-blue-500/50 border-4 border-blue-500">
                 <Navigation className="text-blue-600 w-6 h-6 transform rotate-[-45deg]" />
              </div>
              {/* Bag Indicator */}
              {bagCount > 0 && (
                 <div className="absolute -top-2 -right-2 bg-andele-pink text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 border-gray-900 animate-bounce">
                    {bagCount}
                 </div>
              )}
           </div>
        </div>
        
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent p-6 z-20">
         <div className="grid grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700">
               <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Optimizācija</p>
               <div className="flex items-center gap-2">
                  <Zap className="text-yellow-400" size={16} />
                  <span className="text-white font-bold">Multi-Stop</span>
               </div>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700">
               <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Kurjera Ieņēmumi</p>
               <span className={`font-bold font-mono text-lg transition-all ${bagCount > 1 ? 'text-green-400 text-xl' : 'text-white'}`}>
                  {(3.50 + (bagCount * 3.50)).toFixed(2)} €
               </span>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700">
               <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Laika Ietaupījums</p>
               <span className="text-white font-bold">~55 minūtes</span>
            </div>
         </div>
      </div>

    </div>
  );
};

export default MapDemo;