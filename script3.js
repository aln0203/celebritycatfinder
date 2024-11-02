// Get the background music element
const backgroundMusic = document.getElementById("background-music");

// Set volume for background music if needed
backgroundMusic.volume = 0.5;

// Start playing the background music when the page loads
window.onload = () => {
    backgroundMusic.play();
};
