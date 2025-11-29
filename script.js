const botones = document.querySelectorAll(".boton");
const mensajes = document.querySelectorAll(".mensaje");
const overlay = document.querySelector(".overlay-blur");

botones.forEach((boton, index) => {
  boton.addEventListener("click", (event) => {
    event.stopPropagation();

    // esconder todos
    mensajes.forEach((msg) => (msg.style.display = "none"));

    // mostrar el correspondiente
    const msg = mensajes[index];
    msg.style.display = "block";

    overlay.classList.add("activo");
  });
});

overlay.addEventListener("click", () => {
  mensajes.forEach((msg) => (msg.style.display = "none"));
  overlay.classList.remove("activo");
});

// cerrar clickeando fuera
document.addEventListener("click", () => {
  mensajes.forEach((msg) => (msg.style.display = "none"));
  overlay.classList.remove("activo");
});
