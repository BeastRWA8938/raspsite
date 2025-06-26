const container = document.getElementById('words-container');

// Customize your words
const text = "Neon Gravity Words Following My Cursor Through Space and Honey".split(' ');

// Words array with positions & velocities
const words = text.map((word) => {
    const el = document.createElement('div');
    el.classList.add('word');
    el.innerText = word;
    container.appendChild(el);
    return {
        el,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: 0,
        vy: 0
    };
});

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    for (let w of words) {
        // Attraction strength
        const ax = (mouseX - w.x) * 0.02;
        const ay = (mouseY - w.y) * 0.02;

        w.vx += ax;
        w.vy += ay;

        // Damping to simulate "moving through honey"
        w.vx *= 0.85;
        w.vy *= 0.85;

        w.x += w.vx;
        w.y += w.vy;

        w.el.style.left = w.x + 'px';
        w.el.style.top = w.y + 'px';
    }
    requestAnimationFrame(animate);
}

animate();
