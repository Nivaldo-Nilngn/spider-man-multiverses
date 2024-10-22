document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("videoModal");
  var link = document.getElementById("trailerButton");
  var span = document.getElementsByClassName("close")[0];
  var iframe = modal.querySelector("iframe");

  // Certifica-se de que a modal está oculta ao carregar a página
  modal.style.display = "none";

  // Abre a modal ao clicar no botão
  link.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "flex"; // Exibe a modal
    iframe.src += "?autoplay=1"; // Adiciona autoplay ao vídeo
  }

  // Fecha a modal ao clicar no "X"
  span.onclick = function() {
    modal.style.display = "none"; // Oculta a modal
    iframe.src = iframe.src.replace("?autoplay=1", ""); // Remove autoplay e pausa o vídeo
  }

  // Fecha a modal ao clicar fora dela
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none"; // Oculta a modal
      iframe.src = iframe.src.replace("?autoplay=1", ""); // Remove autoplay e pausa o vídeo
    }
  }
});
