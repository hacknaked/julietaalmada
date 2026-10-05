// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
type SocialLink = {
  label: string;
  href: string;
};

export const SITE = {
  name: 'Julieta Almada',
  role: 'Evaluación, orientación y tratamiento psicopedagógico',
  email: 'consultas@julietaalmada.ar',
  tagline: 'Psicopedagoga & docente',
  description:
    'Trabajo junto a niños, adolescentes y familias para comprender qué está sucediendo en cada proceso de aprendizaje y encontrar estrategias posibles para avanzar.',
  status: 'Agenda abierta para entrevistas de admisión',
  social: [
    // { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-username' },
  ] as SocialLink[],
  locale: 'es',
} as const;

export const NAV_LINKS = [
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Contacto', href: '/#hablemos' },
] as const;
