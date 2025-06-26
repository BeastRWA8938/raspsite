const container = document.getElementById('letters-container');
const phrase = "Neon Gravity Letters Following My Cursor";
const chars = phrase.split('');

// Set up each letter with a unique turbulence phase
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
        offsetX: (Math.random() - 0.5) * 50,
        offsetY: (Math.random() - 0.5) * 50,
        turbulenceOffset: Math.random() * 1000, // random phase for turbulence
    };
});

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate(t) {
    for (let letter of letters) {
        // Target position with offset
        const targetX = mouseX + letter.offsetX;
        const targetY = mouseY + letter.offsetY;

        // Gentle attraction
        letter.vx += (targetX - letter.x) * 0.01;
        letter.vy += (targetY - letter.y) * 0.01;

        // Add turbulence as a wavy force
        letter.vx += Math.cos(t / 500 + letter.turbulenceOffset) * 0.2;
        letter.vy += Math.sin(t / 500 + letter.turbulenceOffset) * 0.2;

        // Damping (viscous drag)
        letter.vx *= 0.80;
        letter.vy *= 0.80;

        letter.x += letter.vx;
        letter.y += letter.vy;

        letter.el.style.left = letter.x + 'px';
        letter.el.style.top = letter.y + 'px';
    }
    requestAnimationFrame(animate);
}

// Start the animation
animate(0);
