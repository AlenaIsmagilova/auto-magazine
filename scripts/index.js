const galleryButtonBack = document.querySelector(".content__button-left");
const galleryButtonForward = document.querySelector(".content__button-right");
const galleryContainer = document.querySelector(".content__gallery-container");

galleryButtonForward.addEventListener("click", () => {
  galleryContainer.style.setProperty("transform", "translateX(-101%)");
});

galleryButtonBack.addEventListener("click", () => {
  galleryContainer.style.setProperty("transform", "translateX(0)");
});
