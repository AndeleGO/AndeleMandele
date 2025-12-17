import React from 'react';
import { Zap, ShoppingBag, Truck, Bike } from 'lucide-react';
import { Logo } from './Logo';

const CourierCard: React.FC<{ type: string; img: string; title: string; speed: string; icon: React.ReactNode }> = ({ type, img, title, speed, icon }) => (
  <div className="relative group overflow-hidden rounded-2xl h-[500px] flex-1 min-w-[300px] border border-gray-800">
    {/* Background Image */}
    <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-50 group-hover:brightness-75" />
    
    {/* Branding Overlay (Simulating Jackets/Bags) */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
    
    {/* Digital Branding Elements */}
    <div className="absolute top-6 left-6 bg-andele-pink text-white px-3 py-1 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-md bg-opacity-90 z-10">
       <Logo className="w-4 h-4" />
       <span className="text-xs font-bold tracking-widest uppercase">Official Fleet</span>
    </div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 p-8 w-full z-10">
      <div className="flex justify-between items-center mb-4">
         <div className="p-3 bg-white/10 backdrop-blur rounded-xl text-andele-pink border border-white/10">
            {icon}
         </div>
         <span className="text-andele-pink font-mono text-xl">{speed}</span>
      </div>
      
      <h3 className="text-3xl font-serif font-bold text-white italic mb-2">{title}</h3>
      <p className="text-gray-300 text-sm font-medium mb-6 uppercase tracking-wider">{type}</p>
      
      <div className="space-y-2 border-t border-gray-700 pt-4">
        <div className="flex items-center gap-2 text-gray-400 text-xs">
           <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
           <span>Pearl Protection™ kameras</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-xs">
           <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
           <span>Andele GO formastērps</span>
        </div>
      </div>
    </div>
  </div>
);

const CourierFleet: React.FC = () => {
  return (
    <section className="py-32 bg-luxury-black text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-andele-pink font-bold tracking-widest uppercase text-sm mb-4 block">Mūsu Flote</span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                 Pielāgots transports <br /> katram pirkumam.
              </h2>
              <p className="text-gray-400 text-lg font-light">
                 No zīda kleitas līdz ziemas mētelim. Mūsu kurjeri ir aprīkoti ar specializētām termosomām, kas aizsargā preci un saglabā tās "pirkuma brīža" sajūtu.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm max-w-sm">
               <div className="flex items-center gap-3 mb-3">
                  <ShoppingBag className="text-andele-pink" />
                  <span className="font-bold text-lg">Universālā Ietilpība</span>
               </div>
               <p className="text-gray-400 text-sm leading-relaxed">
                  Mūsu "GO" somas ir dizainētas, lai perfekti ietilpinātu visus standarta 
                  <span className="text-white font-bold"> Omniva (S, M, L)</span> un 
                  <span className="text-white font-bold"> DPD</span> sūtījumu izmērus. 
                  Viena soma – bezgalīgas iespējas.
               </p>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 justify-center">
           <CourierCard 
             type="Pilsētas Centrs • Satiksmes apiešana"
             img="https://images.unsplash.com/photo-1618506469602-5e4c6c19eb93?q=80&w=1000&auto=format&fit=crop"
             title="Velo Express"
             speed="~20 min"
             icon={<Bike size={24} />}
           />
           <CourierCard 
             type="Paplašinātais Centrs • Lielāks ātrums"
             img="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop"
             title="Moto Zibsnis"
             speed="~35 min"
             icon={<Zap size={24} />}
           />
           <CourierCard 
             type="Pārdaugava • Lielie pirkumi"
             img="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop"
             title="Auto Premium"
             speed="~50 min"
             icon={<Truck size={24} />}
           />
        </div>
      </div>
    </section>
  );
};

export default CourierFleet;