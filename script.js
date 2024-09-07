// script.js

var slideshowImages = [
    'girl.jpg', // Replace with path to your first background image
    'queue.png'  // Replace with path to your second background image
];

var currentImageIndex = 0;
var slideshowContainer = document.getElementById('backgroundSlideshow');

function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
    slideshowContainer.style.backgroundImage = `url('${slideshowImages[currentImageIndex]}')`;
}

// Change background image every 5 seconds (5000 milliseconds)
setInterval(changeBackgroundImage, 5000);

// Initialize with the first background image
slideshowContainer.style.backgroundImage = `url('${slideshowImages[currentImageIndex]}')`;
