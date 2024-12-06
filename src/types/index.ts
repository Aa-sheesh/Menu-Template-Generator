export interface Template {
  id: string;
  name: string;
  background: string;
  layout: 'portrait' | 'landscape';
  description: string;
  downloads: number;
}

export interface CardData {
  id: string;
  templateId: string;
  title: string;
  date: string;
  time: string;
  location: string;
  message: string;
  hostName: string;
  createdAt: string;
}

export interface AdminState {
  isAdmin: boolean;
}