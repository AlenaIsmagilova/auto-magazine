const galleryButtonBack = document.querySelector(".content__button-left");
const galleryButtonForward = document.querySelector(".content__button-right");
const galleryContainer = document.querySelector(".content__gallery-container");
const humburgerMenuButton = document.querySelector(".humburger-menu__button");
const humburgerMenu = document.querySelector('.humburger_menu');

galleryButtonForward.addEventListener("click", () => {
  galleryContainer.style.setProperty("transform", "translateX(-100%)");
});

galleryButtonBack.addEventListener("click", () => {
  galleryContainer.style.setProperty("transform", "translateX(0)");
});

humburgerMenuButton.addEventListener('click', () => {
humburgerMenu.style.
})