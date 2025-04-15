document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          // Extrair o ID da seção do href
          const targetId = this.getAttribute('href').substring(1); // Remove o "#"
          const targetElement = document.getElementById(targetId); // Seleciona o elemento pela ID
          
          // Se o elemento de destino existir, rola suavemente até ele
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });
});