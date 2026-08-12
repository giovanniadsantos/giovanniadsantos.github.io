import type { ImageMetadata } from 'astro';
import prayersImage from '../assets/images/projects/prayers.png';
import angeliAcessoriosImage from '../assets/images/projects/angeli-acessorios.png';
import aconselhaMaisImage from '../assets/images/projects/aconselha-mais.png';

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  url: string;
  accentFrom: string;
  accentTo: string;
  image?: ImageMetadata;
}

export const projects: Project[] = [
  {
    slug: 'prayers',
    name: 'Prayers',
    tagline: 'Mural de oração para comunidades cristãs',
    category: 'Sites para comunidades',
    url: 'https://www.prayers.app.br',
    accentFrom: '#c1622d',
    accentTo: '#d98e4a',
    image: prayersImage,
  },
  {
    slug: 'angeli-acessorios',
    name: 'Angeli Acessórios',
    tagline: 'Catálogo online com venda pelo WhatsApp para o nicho de artesanato',
    category: 'Catálogo com venda via WhatsApp',
    url: 'https://angeliacessorios.com.br',
    accentFrom: '#6e8b6b',
    accentTo: '#9cb199',
    image: angeliAcessoriosImage,
  },
  {
    slug: 'aconselha-mais',
    name: 'Aconselha Mais',
    tagline: 'Ferramenta de gestão de processos de aconselhamento bíblico',
    category: 'Sistemas e ferramentas sob medida',
    url: 'https://aconselha-mais.vercel.app',
    accentFrom: '#9c4c21',
    accentTo: '#c1622d',
    image: aconselhaMaisImage,
  },
];
