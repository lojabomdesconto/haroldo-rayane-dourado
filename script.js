document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('rsvpModal');
  const openBtn = document.getElementById('openRsvpBtn');
  const closeBtn = document.getElementById('closeRsvpBtn');
  const rsvpForm = document.getElementById('rsvpForm');

  // Lógica para abrir o modal
  if (openBtn) {
    openBtn.addEventListener('click', function() {
      modal.style.display = 'flex';
    });
  }

  // Lógica para fechar o modal no botão "Cancelar"
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }

  // Fechar o modal ao clicar fora dele
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Envio do formulário para o WhatsApp
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Digite abaixo seu número do WhatsApp (ex: 5511999999999)
      const numeroWhatsapp = "5511999999999"; 

      const nome = document.getElementById('nome').value;
      const celebracao = document.getElementById('presencaCelebracao').value;
      const recepcao = document.getElementById('presencaRecepcao').value;
      const acompanhantes = document.getElementById('acompanhantes').value;

      // Formatação do texto enviado
      let mensagem = `*Confirmação de Presença - Casamento*\n\n`;
      mensagem += `👤 *Nome:* ${nome}\n`;
      mensagem += `⛪ *Celebração:* ${celebracao}\n`;
      mensagem += `🥂 *Recepção:* ${recepcao}\n`;
      mensagem += `👥 *Acompanhantes:* ${acompanhantes}`;

      // Monta e abre o link direto do WhatsApp
      const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
      window.open(urlWhatsapp, '_blank');
    });
  }
});
