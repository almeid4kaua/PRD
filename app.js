document.addEventListener('DOMContentLoaded', function() {
  // Adiciona o event listener a todos os links "Descubra mais"
  document.querySelectorAll('.pirate-more').forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault();  // Previne o comportamento padrão do link
          // Busca o próximo elemento irmão da classe 'pirate-extra-info' e alterna sua exibição
          var extraInfo = this.nextElementSibling;
          if (extraInfo.style.display === 'none' || !extraInfo.style.display) {
              extraInfo.style.display = 'block';
          } else {
              extraInfo.style.display = 'none';
          }
      });
  });
});