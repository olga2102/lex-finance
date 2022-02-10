const menu = document.querySelector(".nav");
const menuButton = document.querySelector(".toggle");
const body = document.querySelector(".page__body");
const links = document.querySelectorAll(".nav__link");
const header = document.querySelector(".header");
const title = document.querySelector(".consultation__title");
const slogan = document.querySelector(".consultation__slogan");

const closedMenu = () => {
  menuButton.classList.add("toggle--closed");
  menu.classList.remove("nav--opened");
  header.classList.remove("header--opened");
}

closedMenu();

//переключение меню
menuButton.addEventListener("click", () => {
  if (menuButton.classList.contains('toggle--closed')) { // меню закрыто
    body.classList.add("page__body--lock");
    menu.classList.add("nav--opened");
    menuButton.classList.remove("toggle--closed");
    menuButton.classList.add("toggle--opened");
    header.classList.add("header--opened");
    title.style.color = "rgba(77, 77, 77, 1)";
    slogan.style.color = "rgba(77, 77, 77, 1)"
  } else if (menuButton.classList.contains("toggle--opened")) { // меню закрыто
      body.classList.remove("page__body--lock");
      menu.classList.remove("nav--opened");
      menuButton.classList.remove("toggle--opened");
      menuButton.classList.add("toggle--closed");
      header.classList.remove("header--opened");
      title.style.color = "white";
      slogan.style.color = "white";
  }
});

//блокировка скролла
const scrollLock = () => {
  if (links && links.length > 0) {
    links.forEach(link => {
    link.addEventListener("click", () => {
      body.classList.remove("page__body--lock");
    });
  });
  }
};

scrollLock();
