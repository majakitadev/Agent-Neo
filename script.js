document.addEventListener("DOMContentLoaded", function () {
            const loadingScreen = document.getElementById("loading-screen");
            const mainContent = document.getElementById("main-content");
            const video = document.getElementById("loading-video");

            // Wait for video to finish playing
            video.addEventListener("ended", function () {
                loadingScreen.style.opacity = "0"; // Fade out effect
                setTimeout(() => {
                    loadingScreen.style.display = "none"; // Hide loading screen
                    mainContent.style.display = "block"; // Show website content
                }, 1000); // Adjust delay for smooth transition
            });
        });

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Event listener for window resizing
window.addEventListener('resize', resizeCanvas);

// Call resizeCanvas on load to set initial size
resizeCanvas();

const fontSize = 25;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(0).map(() => Math.random() * canvas.height); // Random starting positions

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.07)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const colors = ["rgba(0,73,121,0.9)", "rgba(100,0,0,0.9)"];
  ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
  ctx.font = `${fontSize}px monospace`;

  drops.forEach((y, x) => {
    // Display the character at the current drop position
    const text = String.fromCharCode(0x30A0 + Math.random() * 96);
    ctx.fillText(text, x * fontSize, y * fontSize);

    // Update the drop's position, making it fall
    drops[x] = y + 0.85;

    // Reset drop to the top when it reaches the bottom
    if (y * fontSize > canvas.height && Math.random() > 0.95) {
      drops[x] = 0; // Reset drop to the top
    }
  });

  setTimeout(() => requestAnimationFrame(drawMatrix), 70); // Slows down the effect
}


drawMatrix();

