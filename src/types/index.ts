export interface NavItem {
  title: string;
  url: string;
  isExternal?: boolean;
  description?: string;
  badge?: string;
  columns?: {
    title: string;
    links: {
      title: string;
      url: string;
      description?: string;
    }[];
  }[];
}

export interface Office {
  id: string;
  city: string;
  addressLines: string[];
  phone: string;
  email: string;
  coordinates?: { lat: number; lng: number };
}

export interface StatItem {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  detail?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  capabilities: string[];
  keyDeals: {
    title: string;
    location: string;
    size: string;
    value?: string;
  }[];
}

export interface Person {
  id: string;
  slug: string;
  name: string;
  jobTitle: string;
  image: string;
  email: string;
  linkedin: string;
  categories: string[];
  bio: string;
}

export interface Property {
  id: string;
  title: string;
  location: string;
  sector: 'Industrial & Logistics' | 'Science & Technology' | 'Offices' | 'Alternatives';
  status: 'To Let' | 'For Sale' | 'Under Offer';
  sizeSqFt: string;
  sizeSqM: string;
  image: string;
  description: string;
  features: string[];
  tenure: 'Leasehold' | 'Freehold';
  epcRating: string;
}

export interface ResearchItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  publishDate: string;
  readTime: string;
  summary: string;
  image: string;
  pdfUrl?: string;
  keyTakeaways?: string[];
  podcastEpisode?: {
    duration: string;
    hosts: string[];
    guest: string;
  };
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
}
