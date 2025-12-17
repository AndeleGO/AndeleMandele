export interface ChartData {
  name: string;
  value: number;
  revenue?: number;
  cost?: number;
  profit?: number;
}

export interface UnitEconomics {
  item: string;
  amount: number;
  type: 'income' | 'expense' | 'profit';
}

export interface GeminiResponse {
  text: string;
  sources: Array<{ title: string; uri: string }>;
}

export enum DeliveryZone {
  CENTER = 'Zelta Jūdze',
  EXTENDED = 'Paplašinātais Centrs',
  PARDAUGAVA = 'Pārdaugavas Anklāvs'
}

export interface CourierStatus {
  id: string;
  name: string;
  lat: number;
  lng: number;
  status: 'idle' | 'pickup' | 'transit' | 'delivered';
  transport: 'bike' | 'scooter' | 'car';
}
