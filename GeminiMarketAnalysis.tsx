import React, { useState } from 'react';
import { Search, Loader2, ExternalLink } from 'lucide-react';
import { askGeminiMarketAnalysis } from '../services/geminiService';
import { GeminiResponse } from '../types';

const GeminiMarketAnalysis: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<GeminiResponse | null>(null);
  
  const handleAnalysis = async (queryType: 'traffic' | 'competitors') => {
    setLoading(true);
    let query = "";
    if (queryType === 'traffic') {
      query = "Kāda ir pašreizējā satiksmes situācija Rīgas centrā un uz tiltiem? Vai ir sastrēgumi, kas ietekmētu 1 stundas piegādi?";
    } else {
      query = "Kādas ir Bolt Food un Wolt piegādes maksas šobrīd Rīgā? Vai ir palielināts pieprasījums?";
    }

    const result = await askGeminiMarketAnalysis(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-500/20 rounded-lg">
          <Search className="text-blue-400" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold">AI Tirgus Radars</h3>
          <p className="text-gray-400 text-sm">Reāllaika dati no Google Search (Gemini Powered)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <button
          onClick={() => handleAnalysis('traffic')}
          disabled={loading}
          className="bg-gray-700 hover:bg-gray-600 transition-colors p-4 rounded-xl text-left disabled:opacity-50"
        >
          <span className="block text-sm text-gray-400 mb-1">Satiksmes analīze</span>
          <span className="font-semibold">Pārbaudīt sastrēgumus Rīgā</span>
        </button>
        <button
          onClick={() => handleAnalysis('competitors')}
          disabled={loading}
          className="bg-gray-700 hover:bg-gray-600 transition-colors p-4 rounded-xl text-left disabled:opacity-50"
        >
           <span className="block text-sm text-gray-400 mb-1">Konkurence</span>
           <span className="font-semibold">Bolt/Wolt cenu monitorings</span>
        </button>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="animate-spin text-blue-400" size={32} />
          <span className="ml-3 text-gray-300">Analizē datus...</span>
        </div>
      )}

      {response && !loading && (
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 animate-in fade-in slide-in-from-bottom-4">
          <p className="text-gray-200 leading-relaxed whitespace-pre-line">{response.text}</p>
          
          {response.sources.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Avoti</p>
              <div className="flex flex-wrap gap-2">
                {response.sources.map((source, idx) => (
                  <a 
                    key={idx} 
                    href={source.uri} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 bg-blue-500/10 px-2 py-1 rounded transition-colors"
                  >
                    {source.title} <ExternalLink size={10} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GeminiMarketAnalysis;
