document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.clickable-box');
    const cat = document.querySelector('.cat');
    const clickSound = document.getElementById('audio1');
    const catSound = document.getElementById('audio2');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Ensure background music plays
    backgroundMusic.play().catch(error => {
        console.log("Autoplay was prevented. Click anywhere to play the music.");
        document.body.addEventListener('click', () => {
            backgroundMusic.play();
        }, { once: true });
    });

    // Define specific clickable area inside the green box
    const clickableArea = {
        xMin: 100, // Update these values based on your layout
        xMax: 200,
        yMin: 100,
        yMax: 200
    };

    box.addEventListener('click', (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x >= clickableArea.xMin && x <= clickableArea.xMax && y >= clickableArea.yMin && y <= clickableArea.yMax) {
            cat.classList.remove('hidden');
            cat.classList.add('found');
            catSound.play();
            setTimeout(() => {
                window.location.href = 'bye.html'; // Change to your next HTML page
            }, 500); // Delay to allow sound to play
        } else {
            clickSound.play();
        }
    });
});

  