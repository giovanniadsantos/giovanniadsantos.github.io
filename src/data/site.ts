export const site = {
  name: 'Giovanni Angelo',
  role: 'Desenvolvimento de sites e sistemas sob medida',
  email: 'giovanniadsantos@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/giovanniangelo',
    github: 'https://github.com/giovanniadsantos',
    instagram: 'https://www.instagram.com/giovanni_angelo',
  },
};

export const whatsapp = {
  number: '5521969154868',
  defaultMessage: 'Olá Giovanni, vim pelo seu site e gostaria de um orçamento.',
};

export function whatsappHref(message: string = whatsapp.defaultMessage): string {
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`;
}
