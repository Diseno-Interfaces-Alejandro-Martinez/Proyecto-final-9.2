// JavaScript para abrir y cerrar el menú deslizante
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

// Al hacer clic en el botón de menú, mostrar el menú deslizante y el overlay
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

// Al hacer clic en el botón de cerrar, ocultar el menú deslizante y el overlay
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// También cerrar el menú si se hace clic en el overlay
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});
