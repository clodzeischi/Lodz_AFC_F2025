const frog = document.getElementById('frog');
const step = 40; // grid size
let x = 180;
let y = 360;

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (y - step >= 0) y -= step;
            break;
        case 'ArrowDown':
            if (y + step <= 360) y += step;
            break;
        case 'ArrowLeft':
            if (x - step >= 0) x -= step;
            break;
        case 'ArrowRight':
            if (x + step <= 360) x += step;
            break;
    }
    frog.style.left = `${x}px`;
    frog.style.top = `${y}px`;
});

// Vehicle spawner
function spawnVehicle() {
    const vehicle = document.createElement('div');
    vehicle.classList.add('vehicle');

    // Random lane
    const lanes = [80, 120, 160, 200, 240];
    const lane = lanes[Math.floor(Math.random() * lanes.length)];
    vehicle.style.top = `${lane}px`;

    // Direction
    const direction = Math.random() < 0.5 ? 'left' : 'right';
    vehicle.dataset.direction = direction;

    // Emoji pool
    const emojis = ['🚗', '🚙', '🛻', '🚓', '🏎️'];
    vehicle.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // Start position
    vehicle.style.left = direction === 'left' ? '400px' : '-60px';
    game.appendChild(vehicle);

    // Movement
    const speed = 2 + Math.random() * 2;
    const interval = setInterval(() => {
        let currentLeft = parseFloat(vehicle.style.left);
        if (direction === 'left') {
            currentLeft -= speed;
            if (currentLeft < -60) {
                clearInterval(interval);
                vehicle.remove();
            }
        } else {
            currentLeft += speed;
            if (currentLeft > 400) {
                clearInterval(interval);
                vehicle.remove();
            }
        }
        vehicle.style.left = `${currentLeft}px`;
    }, 20);
}


// Spawn vehicles every 800ms
setInterval(spawnVehicle, 800);