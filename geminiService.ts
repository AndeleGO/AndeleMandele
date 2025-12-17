import { GoogleGenAI } from "@google/genai";
import { GeminiResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const askGeminiMarketAnalysis = async (query: string): Promise<GeminiResponse> => {
  if (!process.env.API_KEY) {
    return {
      text: "Lūdzu, ievadiet derīgu API atslēgu, lai izmantotu tirgus analīzi.",
      sources: []
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: query,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: "Tu esi 'Andele GO' biznesa stratēģis. Atbildi latviešu valodā, kodolīgi un profesionāli. Izmanto Google Search, lai atrastu aktuālo informāciju par Rīgas satiksmi, konkurentu (Bolt, Wolt) cenām vai laika apstākļiem, ja tas tiek prasīts.",
      },
    });

    const text = response.text || "Nevarēja iegūt atbildi.";
    
    // Extract sources from grounding chunks
    const sources: Array<{ title: string; uri: string }> = [];
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    
    if (chunks) {
      chunks.forEach((chunk: any) => {
        if (chunk.web) {
          sources.push({
            title: chunk.web.title || "Avots",
            uri: chunk.web.uri || "#"
          });
        }
      });
    }

    return { text, sources };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "Atvainojiet, radās kļūda savienojumā ar AI servisu. Lūdzu mēģiniet vēlāk.",
      sources: []
    };
  }
};