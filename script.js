document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('rsvpModal');
  const openBtn = document.getElementById('rsvpBtn'); // ID exatamente igual ao seu HTML
  const closeBtn = document.getElementById('closeRsvpBtn');
  const rsvpForm = document.getElementById('rsvpForm');

  // Abrir o modal ao clicar em "Confirmar Presença"
  if (openBtn) {
    openBtn.addEventListener('click', function() {
      modal.style.display = 'flex';
    });
  }

  // Fechar o modal ao clicar em "Cancelar"
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }

  // Fechar o modal se clicar fora da caixa branca
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Envio do formulário via WhatsApp
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Digite aqui o número do WhatsApp que vai receber os dados (DDD + número)
      const numeroWhatsapp = "553492995097"; 

      const nome = document.getElementById('nome').value;
      const celebracao = document.getElementById('presencaCelebracao').value;
      const recepcao = document.getElementById('presencaRecepcao').value;
      const acompanhantes = document.getElementById('acompanhantes').value;

      // Formatação da mensagem para o WhatsApp
      let mensagem = `*Confirmação de Presença - Casamento Haroldo Jr & Rayane*\n\n`;
      mensagem += `👤 *Nome:* ${nome}\n`;
      mensagem += `⛪ *Celebração:* ${celebracao}\n`;
      mensagem += `🥂 *Recepção:* ${recepcao}\n`;
      mensagem += `👥 *Acompanhantes:* ${acompanhantes}`;

      // Monta e abre a URL no WhatsApp
      const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
      window.open(urlWhatsapp, '_blank');
    });
  }
});
