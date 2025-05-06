let images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg"
  // Add more images here in the desired order
];

let currentIndex = 0;
const slide = document.getElementById("slide");

function showImage(index) {
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  currentIndex = index;
  slide.src = images[currentIndex];
}

function prevImage() {
  showImage(currentIndex - 1);
}

function nextImage() {
  showImage(currentIndex + 1);
}

document.addEventListener("DOMContentLoaded", () => {
  showImage(currentIndex);
});
