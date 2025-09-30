export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseUsItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  category: string;
  image: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  service: string;
  content: string;
  rating: number;
}

export interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  postalCode: string;
  projectType: string;
  description: string;
  consent: boolean;
}