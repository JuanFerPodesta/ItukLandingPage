const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");
const linksMobile = document.querySelectorAll(".linksMobile");

window.addEventListener("resize", function () {
  if (header.classList.contains("open")) {
    cerrarBoton();
  }
});

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    cerrarBoton();
  } else {
    abrirBoton();
    for (i = 0; i < linksMobile.length; i++) {
      linksMobile[i].addEventListener("click", cerrarBoton);
    }
  }
});

// *** funciones hamburguerBtn ***

function cerrarBoton() {
  header.classList.remove("open");
  body.classList.remove("noscroll");
  fadeElements.forEach(function (element) {
    element.classList.remove("fade-in");
    element.classList.add("fade-out");
  });
}

function abrirBoton() {
  header.classList.add("open");
  body.classList.add("noscroll");
  fadeElements.forEach(function (element) {
    element.classList.remove("fade-out");
    element.classList.add("fade-in");
  });
}

// *** fin funciones hamburguerBtn ***
