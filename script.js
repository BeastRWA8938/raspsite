const tracker = document.getElementById('tracker');

document.addEventListener('mousemove', (e) => {
    tracker.style.left = `${e.clientX}px`;
    tracker.style.top = `${e.clientY}px`;
});
