let images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
  "images/image7.jpg",
  "images/image8.jpg",
  "images/image9.jpg",
  "images/image10.jpg",
  "images/image11.jpg",
  "images/image12.jpg",
  "images/image13.jpg",
  "images/image14.jpg",
  "images/image15.jpg",
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
