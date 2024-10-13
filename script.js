const images = document.querySelectorAll('.animate');
let currentImageIndex = 0;

function showNextImage() {
    // Hide all images
    images.forEach((img, index) => {
        img.style.opacity = '0';  // Hide all images by setting opacity to 0
    });

    // Show the current image
    images[currentImageIndex].style.opacity = '1';  // Show current image by setting opacity to 1

    // Move to the next image, reset to 0 if we reach the end
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Start the animation loop
setInterval(showNextImage, 2000); // Change images every 2 seconds
