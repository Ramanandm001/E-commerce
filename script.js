//code for mouse cursor effect--------------------------------------------------------------------------------------------------------------------------
const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    });
    document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 500);
    });
    const hoverTargets = document.querySelectorAll('.hover-target');
    hoverTargets.forEach((target) => {
    target.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
    });
    target.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
    });

