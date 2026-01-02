
import { NavItem, Stat, Program, Testimony } from './types';

export const SCHOOL_NAME = "Ecole Globale International Girls' School";
export const TAGLINE = "Empowering tomorrow's women leaders through holistic excellence.";

export const NAV_ITEMS: NavItem[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Campus Life', href: '#campus' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

export const STATS: Stat[] = [
  { label: 'Student-Teacher Ratio', value: '10:1', icon: 'fa-users' },
  { label: 'Acres of Green Campus', value: '45+', icon: 'fa-leaf' },
  { label: 'Sports Disciplines', value: '12', icon: 'fa-basketball' },
  { label: 'Alumni Worldwide', value: '5000+', icon: 'fa-globe' },
];

export const PROGRAMS: Program[] = [
  {
    title: 'IB Diploma Programme',
    description: 'A globally recognized rigorous curriculum that fosters critical thinking and global-mindedness.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
    tags: ['Global Standard', 'Grades 11-12']
  },
  {
    title: 'Cambridge IGCSE',
    description: 'Building a strong foundation for secondary education with a focus on core subject mastery.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
    tags: ['Skill Based', 'Grades 9-10']
  },
  {
    title: 'Holistic Arts & Sports',
    description: 'Beyond classrooms: Horse riding, swimming, classical dance, and visual arts integrated into daily life.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop',
    tags: ['Extra-Curricular', 'All Ages']
  }
];

export const TESTIMONIALS: Testimony[] = [
  {
    name: "Sarah Jenkins",
    role: "Parent of Grade 9 Student",
    quote: "The transformation in my daughter's confidence since joining Ecole Globale is remarkable. It truly is a second home.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Priyanka Sharma",
    role: "Alumni, Class of 2018",
    quote: "Ecole Globale didn't just teach me subjects; it taught me how to lead with empathy and resilience.",
    avatar: "https://i.pravatar.cc/150?u=priyanka"
  },
  {
    name: "Emily Watson",
    role: "Student, Grade 12",
    quote: "The mentorship program helped me discover my passion for international relations and secure my dream college spot.",
    avatar: "https://i.pravatar.cc/150?u=emily"
  },
  {
    name: "Aisha Khan",
    role: "Student, Grade 10",
    quote: "From horse riding to advanced physics, every day here is an opportunity to challenge myself and grow with my sisters.",
    avatar: "https://i.pravatar.cc/150?u=aisha"
  }
];
