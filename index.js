let carouselBackground = document.getElementById("carousel-background");
let carouselImage = document.getElementById("carousel-image");
let carouselImageLinks = [
  "https://picsum.photos/id/1022/800/600",
  "https://picsum.photos/id/1035/800/600",
  "https://picsum.photos/id/1049/800/600",
  "https://picsum.photos/id/1051/800/600",
  "https://picsum.photos/id/1004/800/600",
];
let currentImage = 0;

const preloadImages = () => {
  carouselImageLinks.forEach((link) => {
    let img = new Image();
    console.log(link);
    img.src = link;
  });
  // img.onload = () => {
  //   backgroundImage.classList.add("load-image");
  // };
};

const setImage = () => {
  carouselBackground.style.backgroundImage = `url(${carouselImageLinks[currentImage]})`;
  carouselImage.src = carouselImageLinks[currentImage];
};
preloadImages();
setImage();

const nextImage = () => {
  if (currentImage >= carouselImageLinks.length - 1) {
    currentImage = 0;
  } else {
    currentImage++;
  }
  setImage();
};

const previousImage = () => {
  if (currentImage <= 0) {
    currentImage = 4;
  } else {
    currentImage--;
  }
  setImage();
};
