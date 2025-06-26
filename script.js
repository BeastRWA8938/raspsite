const container = document.getElementById('letters-container');

// Write your phrase here:
const phrase = "Neon Gravity Letters Following My Cursor";
const chars = phrase.split('');

// Create letter objects with positions and random offsets
const letters = chars.map((char) => {
    const el = document.createElement('div');
    el.classList.add('letter');
    el.innerText = char;
    container.appendChild(el);

    return {
        el,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: 0,
        vy: 0,
        offsetX: (Math.random() - 0.5) * 50, // slight target offset
        offsetY: (Math.random() - 0.5) * 50
    };
});

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    for (let letter of letters) {
        // Target with offset so they don't overlap perfectly
        const targetX = mouseX + letter.offsetX;
        const targetY = mouseY + letter.offsetY;

        // Gentle attraction
        letter.vx += (targetX - letter.x) * 0.01;
        letter.vy += (targetY - letter.y) * 0.01;

        // Heavy damping
        letter.vx *= 0.80;
        letter.vy *= 0.80;

        letter.x += letter.vx;
        letter.y += letter.vy;

        letter.el.style.left = letter.x + 'px';
        letter.el.style.top = letter.y + 'px';
    }
    requestAnimationFrame(animate);
}

animate();
