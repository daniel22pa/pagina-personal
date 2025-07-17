document.addEventListener("DOMContentLoaded", () => {
  const secciones = document.querySelectorAll("main section");

  secciones.forEach((seccion) => {
    seccion.addEventListener("mouseenter", () => {
      seccion.classList.add("resaltado");
    });

    seccion.addEventListener("mouseleave", () => {
      seccion.classList.remove("resaltado");
    });
  });
});
