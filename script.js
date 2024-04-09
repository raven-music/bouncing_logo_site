const logo = document.getElementById('logoContainer');
let dx = 1; // Speed in the x-direction
let dy = 1; // Speed in the y-direction
let x = 0; // Initial x-position
let y = 0; // Initial y-position

function updatePosition() {
    const screenWidth = window.innerWidth - logo.clientWidth;
    const screenHeight = window.innerHeight - logo.clientHeight;

    x += dx;
    y += dy;

    if (x >= screenWidth || x <= 0) dx *= -1; // Reverse direction on horizontal edges
    if (y >= screenHeight || y <= 0) dy *= -1; // Reverse direction on vertical edges

    logo.style.left = x + 'px';
    logo.style.top = y + 'px';

    requestAnimationFrame(updatePosition); // Continuously update the logo's position
}

updatePosition();
