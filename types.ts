export interface EditData {
  [key: string]: string;
}

export interface ItineraryEvent {
  id: string;
  timeKey: string;
  noteKey: string;
  title: string;
  description?: string;
  highlight?: boolean;
  locationLink?: string;
  locationName?: string;
  badges?: { text: string; type: 'info' | 'warning' | 'success' | 'alert' }[];
  details?: { title: string; items: string[] };
  imageSrc?: string;
}

export interface DaySchedule {
  day: number;
  date: string;
  title: string;
  weather: string;
  weatherIcon: string;
  events: ItineraryEvent[];
}