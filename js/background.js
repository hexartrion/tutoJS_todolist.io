const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const img = document.querySelector(".img");

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.className = "img-cover";

img.appendChild(bgImage);