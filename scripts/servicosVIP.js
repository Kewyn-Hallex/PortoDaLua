const cards = document.querySelectorAll(".card");
let currentIndex = 0;
let isDragging = false;
let startX = 0;

// (insere o esqueleto, se quiser deixar igual)

function updateCards() {
  cards.forEach((card, index) => {
    card.classList.remove("active", "above", "below", "hidden");
    if (index === currentIndex) {
      card.classList.add("active");
    } else if (index === currentIndex - 1) {
      card.classList.add("above");
    } else if (index === currentIndex + 1) {
      card.classList.add("below");
    } else {
      card.classList.add("hidden");
    }
  });
}

updateCards();

function swipe(direction) {
  if (direction === "left" && currentIndex < cards.length - 1) {
    currentIndex++;
  } else if (direction === "right" && currentIndex > 0) {
    currentIndex--;
  }
  updateCards();
}

// Setas do teclado
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") swipe("left");
  if (e.key === "ArrowLeft") swipe("right");
});

// Drag (mouse)
document.querySelector(".card-wrapper").addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const deltaX = e.clientX - startX;

    if (deltaX < -50) {
      swipe("left");
      isDragging = false;
    } else if (deltaX > 50) {
      swipe("right");
      isDragging = false;
    }
  }
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    document.body.style.cursor = "default";
  }
});
