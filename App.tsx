import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function App() {
  const data = [
    { name: 'Jan', value: 400, revenue: 2400, cost: 2210 },
    { name: 'Feb', value: 300, revenue: 1398, cost: 2210 },
    { name: 'Mar', value: 200, revenue: 9800, cost: 2290 },
    { name: 'Apr', value: 278, revenue: 3908, cost: 2000 },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
      <h1>Ģeniāla Loģistika - Genius Logistics™</h1>
      
      <section style={{ marginTop: '30px' }}>
        <h2>Mūsu Algoritms</h2>
        <p>Mēs nedarbjojamies kā standarta taksometrs. Sistēma "skenē" apkārtni 24/7 un automātiski atrod optimālos maršrutus.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '20px' }}>
          <div style={{ padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
            <h3>2-4 Klienti</h3>
            <p>Viena brauciena laikā tiek apkalpoti 2-4 klienti</p>
          </div>
          <div style={{ padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
            <h3>3x Ienākumi</h3>
            <p>Kurjera peļņa pieaug trīskārši, nemainot cenu klientam</p>
          </div>
          <div style={{ padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
            <h3>Ekoloģiski</h3>
            <p>Ekoloģiskākais veids, kā pārvietot preces pilsētā</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Datu Vadīta Izaugsme</h2>
        <p>Mēs izmantojam Gemini AI un Google Maps datus, lai prognozētu pieprasījumu pirms tas rodas.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '20px' }}>
          <div style={{ padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '32px', margin: '10px 0' }}>98%</h3>
            <p>Piegādes precizitāte</p>
          </div>
          <div style={{ padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '32px', margin: '10px 0' }}>-30%</h3>
            <p>Izmaksas pret konkurentiem</p>
          </div>
          <div style={{ padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '32px', margin: '10px 0' }}>23%</h3>
            <p>Lielāki ienākumi kurjeriem</p>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Finanšu Ilgtspēja</h2>
        <p>Atšķirībā no "Gig Economy" milžiem, mēs nepērkam tirgus daļu ar zaudējumiem.</p>
        <p>Mūsu modelis ir pelnošs no pirmā pasūtījuma pateicoties "Genius Logistics" pakešu apvienošanai.</p>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>Sniegums</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
}
