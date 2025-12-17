import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { UnitEconomics } from '../types';

const data = [
  { name: 'Bolt Food', income: 2.85, fill: '#94a3b8' },
  { name: 'Andele GO', income: 3.50, fill: '#E91E63' },
];

const unitData: UnitEconomics[] = [
  { item: 'Kurjera Izmaksa', amount: 3.50, type: 'expense' },
  { item: 'Transakcijas', amount: 0.15, type: 'expense' },
  { item: 'Apdrošināšana', amount: 0.10, type: 'expense' },
  { item: 'Platformas Peļņa', amount: 0.75, type: 'profit' },
];

const PIE_COLORS = ['#334155', '#94a3b8', '#cbd5e1', '#E91E63'];

const Economics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {/* Courier Comparison */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Kurjera ienākumi (5km brauciens)</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis unit="€" />
              <Tooltip 
                cursor={{fill: 'transparent'}}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="income" name="Bruto ienākumi" radius={[4, 4, 0, 0]} barSize={60} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Andele GO piedāvā ~23% lielākus ienākumus kurjeriem salīdzinājumā ar standarta pārtikas piegādi (2.85 €).
        </p>
      </div>

      {/* Unit Economics */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Vienības Ekonomika (Pasūtījums 4.50 €)</h3>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="h-64 w-full sm:w-1/2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={unitData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="amount"
                >
                  {unitData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full sm:w-1/2 space-y-3 mt-4 sm:mt-0">
             {unitData.map((item, index) => (
               <div key={index} className="flex justify-between items-center text-sm">
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full" style={{ backgroundColor: PIE_COLORS[index] }}></div>
                   <span className="text-gray-600">{item.item}</span>
                 </div>
                 <span className="font-semibold">{item.amount.toFixed(2)} €</span>
               </div>
             ))}
             <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                <span className="font-bold text-gray-800">Cena Klientam</span>
                <span className="font-bold text-andele-pink">4.50 €</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Economics;