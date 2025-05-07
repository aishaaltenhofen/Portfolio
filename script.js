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
  "images/image16.jpg",
  "images/image17.jpg",
  "images/image18.jpg",
  "images/image19.jpg",
  "images/image20.jpg",
  "images/image21.jpg",
  "images/image22.jpg",
  "images/image23.jpg",
  // Add more images here in the desired order
];

let imageDescriptions = [
  "<em>First Exposure</em>, 2024<br>Solo exhibition, Austin Space, Munich<br>Documentation: Julian Blum",
  "<em>First Exposure</em>, 2024<br>Solo exhibition, Austin Space, Munich<br>Documentation: Julian Blum",
  "<em>First Exposure</em>, 2024<br>Solo exhibition, Austin Space, Munich<br>Documentation: Julian Blum",
  "<em>First Exposure</em>, 2024<br>Solo exhibition, Austin Space, Munich<br>Documentation: Julian Blum",
  "<em>First Exposure</em>, 2024<br>Solo exhibition, Austin Space, Munich<br>Documentation: Julian Blum",
];

let imageDescriptions = [
  "<em>Confessions Projected</em>, 2023<br>Solo exhibition, XYZ Gallery, Berlin<br>Documentation: Alex Smith",
  "<em>Pussy Got The Cream</em>, 2022<br>Group exhibition, ABC Space, London<br>Documentation: Maria Gomez",
  "<em>The Archive Doesn’t Care</em>, 2021<br>Solo exhibition, Kunsthalle Bonn<br>Documentation: Tobias Rehm"
];

let currentIndex = 0;

function showImage(index) {
  const slide = document.getElementById("slide");
  const info = document.getElementById("imageInfo");

  slide.src = images[index];
  info.innerHTML = imageDescriptions[index];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

window.onload = function () {
  showImage(currentIndex);
};
