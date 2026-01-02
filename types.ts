
export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface Program {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Testimony {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
