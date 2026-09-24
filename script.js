const modal = document.getElementById('rsvpModal');
const closeBtn = document.getElementById('closeRsvpBtn');

// Função para abrir o modal
function openModal() {
  modal.style.display = 'flex';
}

// Fechar modal ao clicar no botão Cancelar
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Fechar modal ao clicar fora do conteúdo
window.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
