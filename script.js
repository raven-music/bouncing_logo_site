const logo = document.getElementById('logoContainer');
let dx = 3; 
let dy = 3; 
let x = 0; 
let y = 0; 
let screenWidth = window.innerWidth - logo.clientWidth;
let screenHeight = window.innerHeight - logo.clientHeight;

function updatePosition() {
    x += dx;
    y += dy;

    if (x >= screenWidth || x <= 0) {
        dx *= -1; 
        x = Math.max(0, Math.min(x, screenWidth)); 
    }
    if (y >= screenHeight || y <= 0) {
        dy *= -1; 
        y = Math.max(0, Math.min(y, screenHeight)); 
    }

    logo.style.left = x + 'px';
    logo.style.top = y + 'px';

    requestAnimationFrame(updatePosition); 
}

function updateScreenSize() {
    screenWidth = window.innerWidth - logo.clientWidth;
    screenHeight = window.innerHeight - logo.clientHeight;
    // Check if logo is out of bounds after window resize and reposition it if necessary
    if (x >= screenWidth || y >= screenHeight) {
        x = 0;
        y = 0;
        logo.style.left = x + 'px';
        logo.style.top = y + 'px';
    }
}

updateScreenSize();

window.addEventListener('resize', updateScreenSize);

updatePosition();
