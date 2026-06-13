const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const visibleCount = 3; // تعداد کارت‌های نمایش داده شده
const totalCards = track.children.length;

function updateCarousel() {
  const cardWidth = track.children[0].offsetWidth + 24; // gap = 24
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= totalCards - visibleCount;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < totalCards - visibleCount) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});
