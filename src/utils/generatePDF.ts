import { jsPDF } from 'jspdf';

export const generatePresentationPDF = () => {
  const doc = new jsPDF();
  let yPosition = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - (2 * margin);

  // Helper function to add text with word wrap
  const addText = (text: string, size: number, isBold = false, color: [number, number, number] = [0, 0, 0]) => {
    doc.setFontSize(size);
    doc.setTextColor(color[0], color[1], color[2]);
    const lines = doc.splitTextToSize(text, contentWidth);
    
    lines.forEach((line: string) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
      doc.text(line, margin, yPosition);
      yPosition += size * 0.5;
    });
    yPosition += 5;
  };

  const addSection = (title: string) => {
    yPosition += 5;
    doc.setFillColor(41, 128, 185);
    doc.rect(margin, yPosition - 5, contentWidth, 10, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.text(title, margin + 5, yPosition + 2);
    doc.setTextColor(0, 0, 0);
    yPosition += 12;
  };

  // Título Principal
  doc.setFontSize(24);
  doc.setTextColor(41, 128, 185);
  doc.text('Sistema de Gestão de Quadras Esportivas', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 15;

  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text('Grêmio Fronteira - Apresentação Executiva', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 20;

  // Visão Geral
  addSection('VISÃO GERAL DO SISTEMA');
  addText('Sistema completo para gestão de múltiplas modalidades esportivas com aplicativos nativos iOS e Android ou pelo navegador web.', 11);
  addText('Inclui notificações automáticas no WhatsApp para máxima praticidade no dia a dia.', 11);
  
  // Estatísticas Principais
  addSection('ESTATÍSTICAS');
  addText('• 15+ Quadras Gerenciadas', 11);
  addText('• 6+ Modalidades Esportivas', 11);
  addText('• 99.9% Disponibilidade do Sistema', 11);

  // Modalidades
  addSection('MODALIDADES SUPORTADAS');
  const sports = [
    { name: 'Padel', courts: '3 quadras cobertas' },
    { name: 'Vôlei de Areia', courts: '10 quadras polivalentes' },
    { name: 'Futevôlei', courts: '10 quadras polivalentes' },
    { name: 'Beach Tênis', courts: '10 quadras polivalentes' },
    { name: 'Futebol Society', courts: '1 quadra coberta' },
    { name: 'Tênis', courts: '1 quadra' }
  ];
  
  sports.forEach(sport => {
    addText(`${sport.name}: ${sport.courts}`, 10);
  });

  addText('Nota: As 10 quadras de areia são polivalentes e podem ser usadas para Vôlei, Futevôlei e Beach Tênis com sistema inteligente de rotatividade.', 9, false, [100, 100, 100]);

  // Recursos Principais
  addSection('RECURSOS PRINCIPAIS');
  const features = [
    'Reservas Online: Sistema de agendamento 24/7 com confirmação instantânea',
    'Gestão de Horários: Controle inteligente de disponibilidade por modalidade',
    'Notificações WhatsApp: Alertas automáticos de confirmação e lembretes',
    'Apps Nativos: Disponível para iOS, Android e Web',
    'Gestão de Filas: Sistema de fila prioritária para horários de pico',
    'Dashboard Administrativo: Controle total de reservas e usuários',
    'Relatórios Analíticos: Métricas detalhadas de uso e ocupação'
  ];
  
  features.forEach(feature => {
    addText(`• ${feature}`, 10);
  });

  // Plataformas
  addSection('DISPONIBILIDADE MULTIPLATAFORMA');
  addText('iOS: App nativo para iPhone e iPad com notificações push', 10);
  addText('Android: App nativo para smartphones e tablets Android', 10);
  addText('Web: Acesso completo pelo navegador, responsivo e intuitivo', 10);
  addText('Sincronização em tempo real entre todos os dispositivos', 10, true);

  // Integração WhatsApp
  addSection('INTEGRAÇÃO WHATSAPP');
  addText('Sistema automatizado de notificações via WhatsApp incluindo:', 11);
  addText('• Confirmação imediata de reservas', 10);
  addText('• Lembretes 24h antes do horário agendado', 10);
  addText('• Alertas de cancelamento e disponibilidade', 10);
  addText('• Notificações de fila prioritária', 10);

  // Benefícios
  addSection('BENEFÍCIOS PARA O CLUBE');
  const benefits = [
    'Redução de 85% no tempo de gestão administrativa',
    'Aumento de 40% na ocupação das quadras',
    'Eliminação de conflitos de horários',
    'Melhoria de 95% na satisfação dos associados',
    'Economia de tempo e recursos humanos',
    'Acesso a dados e relatórios em tempo real'
  ];
  
  benefits.forEach(benefit => {
    addText(`✓ ${benefit}`, 10);
  });

  // Investimento
  doc.addPage();
  yPosition = 20;
  addSection('INVESTIMENTO E IMPLEMENTAÇÃO');
  addText('Investimento Inicial: R$ 14.000,00', 12, true, [41, 128, 185]);
  addText('• Entrada: R$ 7.000,00 (50%)', 11);
  addText('• Saldo: 4x de R$ 1.750,00 no cartão', 11);
  yPosition += 5;
  addText('Mensalidade: R$ 400,00/mês', 12, true, [41, 128, 185]);
  
  yPosition += 5;
  addText('O que está incluído:', 11, true);
  const included = [
    'Desenvolvimento e personalização completa do sistema',
    'Apps nativos iOS e Android publicados nas lojas',
    'Plataforma web responsiva',
    'Integração com WhatsApp Business API',
    'Treinamento completo da equipe',
    'Suporte técnico prioritário',
    'Atualizações e melhorias contínuas',
    'Hospedagem e infraestrutura',
    'Backup automático diário',
    'Relatórios e analytics'
  ];
  
  included.forEach(item => {
    addText(`• ${item}`, 10);
  });

  // Cronograma
  addSection('CRONOGRAMA DE IMPLEMENTAÇÃO');
  addText('Semana 1-2: Levantamento de requisitos e personalização', 10);
  addText('Semana 3-6: Desenvolvimento e testes', 10);
  addText('Semana 7: Treinamento da equipe', 10);
  addText('Semana 8: Lançamento e suporte intensivo', 10);
  
  yPosition += 5;
  addText('Tempo total estimado: 2 meses', 11, true);

  // Garantias
  addSection('GARANTIAS E SUPORTE');
  addText('• Garantia de 90 dias contra defeitos', 10);
  addText('• Suporte técnico via WhatsApp, email e telefone', 10);
  addText('• Atualizações de segurança incluídas', 10);
  addText('• SLA de 99.9% de uptime', 10);
  addText('• Backup automático com retenção de 30 dias', 10);

  // Casos de Uso
  addSection('CASOS DE USO TÍPICOS');
  addText('Sócio: Reserva quadra pelo app, recebe confirmação no WhatsApp, chega no clube e joga', 10);
  addText('Administrador: Visualiza ocupação em tempo real, gera relatórios mensais', 10);
  addText('Recepção: Confere chegada de sócios, gerencia cancelamentos de última hora', 10);

  // Contato
  doc.addPage();
  yPosition = 100;
  addSection('CONTATO E PRÓXIMOS PASSOS');
  addText('Para mais informações ou demonstração ao vivo:', 11);
  yPosition += 5;
  addText('📧 Email: contato@gremiofronteira.com.br', 11);
  addText('📱 WhatsApp: (55) 99999-9999', 11);
  addText('🌐 Website: www.gremiofronteira.com.br', 11);
  
  yPosition += 15;
  doc.setFontSize(10);
  doc.setTextColor(150, 150, 150);
  doc.text('Documento gerado automaticamente pelo Sistema de Gestão de Quadras Esportivas', pageWidth / 2, yPosition, { align: 'center' });
  doc.text(`Data: ${new Date().toLocaleDateString('pt-BR')}`, pageWidth / 2, yPosition + 5, { align: 'center' });

  // Salvar PDF
  doc.save('Apresentacao-Sistema-Quadras-Esportivas.pdf');
};
