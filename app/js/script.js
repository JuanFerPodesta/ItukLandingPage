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

// * carousel *

const state = {};
const carouselList = document.querySelector(".carousel__list");
const carouselItems = document.querySelectorAll(".carousel__item");
const elems = Array.from(carouselItems);

carouselList.addEventListener("click", function (event) {
  var newActive = event.target;
  var isItem = newActive.closest(".carousel__item");

  if (!isItem || newActive.classList.contains("carousel__item_active")) {
    return;
  }

  update(newActive);
});

const update = function (newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);

  current.classList.remove("carousel__item_active");

  [current, prev, next, first, last].forEach((item) => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos);
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current;
  }

  return diff;
};

//*** end of carousel ***

// * btnHamburger functions *

function cerrarBotoRapido() {
  header.classList.remove("open");
  body.classList.remove("noscroll");
  fadeElements.forEach(function (element) {
    ocultar(element);
  });
}

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
