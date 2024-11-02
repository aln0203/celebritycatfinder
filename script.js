document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.clickable-box');
    const cat = document.querySelector('.cat');
    const clickSound = document.getElementById('audio1');
    const catSound = document.getElementById('audio2');
    const backgroundMusic = document.getElementById('backgroundMusic');
    let wrongClickCount = 0;

    // Ensure background music plays
    backgroundMusic.play().catch(error => {
        console.log("Autoplay was prevented. Click anywhere to play the music.");
        document.body.addEventListener('click', () => {
            backgroundMusic.play();
        }, { once: true });
    });

    // Randomly define specific clickable area inside the green box
    const randomClickableArea = () => {
        const xMin = Math.floor(Math.random() * 200);
        const xMax = xMin + 50; // Adjust size if needed
        const yMin = Math.floor(Math.random() * 200);
        const yMax = yMin + 50; // Adjust size if needed
        return { xMin, xMax, yMin, yMax };
    };

    const clickableArea = randomClickableArea();

    const showHintDot = () => {
        const hintDot = document.createElement('div');
        hintDot.style.position = 'absolute';
        hintDot.style.top = `${clickableArea.yMin}px`;
        hintDot.style.left = `${clickableArea.xMin}px`;
        hintDot.style.width = '10px';
        hintDot.style.height = '10px';
        hintDot.style.backgroundColor = 'red';
        hintDot.style.borderRadius = '50%';
        box.appendChild(hintDot);
        setTimeout(() => {
            hintDot.remove();
        }, 1000); // 1 second
    };

    box.addEventListener('click', (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x >= clickableArea.xMin && x <= clickableArea.xMax && y >= clickableArea.yMin && y <= clickableArea.yMax) {
            cat.classList.toggle('hidden');
            cat.classList.toggle('found');
            catSound.play();
            setTimeout(() => {
                window.location.href = 'bye.html'; // Change to your next HTML page
            }, 500); // Delay to allow sound to play
        } else {
            clickSound.play();
            wrongClickCount++;
            if (wrongClickCount % 5 === 0) {
                showHintDot();
            }
        }
    });
});
