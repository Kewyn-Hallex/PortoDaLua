const fundo = document.querySelector(".initPage");

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
const easing = 0.05; // quanto menor, mais suave

document.addEventListener("mousemove", function (e) {
    targetX = (e.clientX / window.innerWidth - 0.5) * 20;
    targetY = (e.clientY / window.innerHeight - 0.5) * 20;
});

function animateBackground() {
    // interpolação para suavizar
    currentX += (targetX - currentX) * easing;
    currentY += (targetY - currentY) * easing;

    fundo.style.backgroundPosition = `${50 + currentX}% ${50 + currentY}%`;

    requestAnimationFrame(animateBackground);
}

animateBackground(); // inicia a animação
