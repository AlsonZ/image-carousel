let carouselBackground = document.getElementById("carousel-background");

let carouselImages = ["https://picsum.photos/400/300"];
let currentImage = 0;

carouselBackground.style.backgroundImage = `url(${carouselImages[currentImage]})`;

const nextImage = () => {
  carouselBackground.style.backgroundImage = `url(${
    carouselImages[++currentImage]
  })`;
};
