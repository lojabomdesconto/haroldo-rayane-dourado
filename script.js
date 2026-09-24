document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Substitua pelo número do WhatsApp que receberá as confirmações (com DDD)
    const numeroWhatsapp = "553492995097"; 

    const nome = document.getElementById('nome').value;
    const celebracao = document.getElementById('presencaCelebracao').value;
    const recepcao = document.getElementById('presencaRecepcao').value;
    const acompanhantes = document.getElementById('acompanhantes').value;

    // Montagem da mensagem formatada para o WhatsApp
    let mensagem = `*Confirmação de Presença - Casamento*\n\n`;
    mensagem += `👤 *Nome:* ${nome}\n`;
    mensagem += `⛪ *Celebração:* ${celebracao}\n`;
    mensagem += `🥂 *Recepção:* ${recepcao}\n`;
    mensagem += `👥 *Acompanhantes:* ${acompanhantes}`;

    // Codifica o texto para ser enviado na URL
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;

    // Abre o WhatsApp em uma nova aba
    window.open(urlWhatsapp, '_blank');
});
