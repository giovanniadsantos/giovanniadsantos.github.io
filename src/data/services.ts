export interface Service {
  title: string;
  description: string;
  whatsappMessage: string;
}

export const services: Service[] = [
  {
    title: 'Sites institucionais e para comunidades',
    description:
      'Presença online para igrejas, ministérios e organizações que querem se conectar melhor com sua comunidade.',
    whatsappMessage: 'Olá Giovanni, tenho interesse em um site institucional ou para minha comunidade.',
  },
  {
    title: 'Catálogos com venda via WhatsApp',
    description:
      'Catálogo online elegante com botão direto para fechar vendas no WhatsApp — sem taxas de marketplace.',
    whatsappMessage: 'Olá Giovanni, tenho interesse em um catálogo com venda via WhatsApp.',
  },
  {
    title: 'Sistemas e ferramentas sob medida',
    description:
      'Ferramentas para organizar processos internos: agendamentos, atendimento, gestão de atividades.',
    whatsappMessage: 'Olá Giovanni, preciso de um sistema ou ferramenta sob medida para o meu negócio.',
  },
  {
    title: 'Manutenção e evolução contínua',
    description:
      'Acompanhamento contínuo, ajustes e novas funcionalidades depois do lançamento — sem te deixar na mão.',
    whatsappMessage: 'Olá Giovanni, gostaria de saber mais sobre manutenção contínua do meu site/sistema.',
  },
];
