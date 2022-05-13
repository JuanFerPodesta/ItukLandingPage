// sections

const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

const hero = document.getElementById("hero");

const fadeElements = document.querySelectorAll(".has-fade");
const linksMobile = document.querySelectorAll(".linksMobile");

// btns
const btnHamburger = document.querySelector("#btnHamburger");

window.addEventListener("resize", function () {
  if (header.classList.contains("open")) {
    cerrarBotoRapido();
    mostrar(hero);
  }
  if (document.documentElement.scrollTop > 0) {
    cerrarBotoRapido();
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

// * btnHamburger functions *

function cerrarBotoRapido() {
  header.classList.remove("open");
  body.classList.remove("noscroll");
  fadeElements.forEach(function (element) {
    ocultar(element);
  });
}

function cerrarBoton() {
  if (document.documentElement.scrollTop === 0) {
    mostrar(hero);
  }
  header.classList.remove("open");
  body.classList.remove("noscroll");
  fadeElements.forEach(function (element) {
    element.classList.remove("fade-in");
    element.classList.add("fade-out");
  });
}

function abrirBoton() {
  if (document.documentElement.scrollTop > 0) {
    ocultar(hero);
  }
  header.classList.add("open");
  body.classList.add("noscroll");
  fadeElements.forEach(function (element) {
    mostrar(element);
    element.classList.remove("fade-out");
    element.classList.add("fade-in");
  });
}

// *** end of btnHamburger functions ***

// * general functions *

function ocultar(section) {
  section.classList.add("hidden");
}

function mostrar(section) {
  section.classList.remove("hidden");
}

function setBackToDefault(valor) {
  valor.value = ``;
}

function setBackToDefaultElement(valor) {
  valor.innerHTML = ``;
}

// *** end of general functions ***
