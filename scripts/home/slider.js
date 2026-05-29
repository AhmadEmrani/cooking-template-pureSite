class HeroSlider {
  constructor() {
    this.currentSlide = 0;
    this.slides = document.querySelectorAll('.hero');
    this.indicators = document.querySelectorAll('.indicator');
    this.prevBtn = document.querySelector('.prev-btn');
    this.nextBtn = document.querySelector('.next-btn');
    this.totalSlides = this.slides.length;
    this.isAnimating = false;
    
    this.init();
  }
  
  init() {
    // Event listeners for navigation buttons
    this.prevBtn.addEventListener('click', () => this.prevSlide());
    this.nextBtn.addEventListener('click', () => this.nextSlide());
    
    // Event listeners for indicators
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index));
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prevSlide();
      if (e.key === 'ArrowRight') this.nextSlide();
    });
    
    // Touch/Swipe support
    this.addSwipeSupport();
    
    // Auto-play (optional - uncomment if needed)
    // this.startAutoPlay();
  }
  
  goToSlide(index) {
    if (this.isAnimating || index === this.currentSlide) return;
    
    this.isAnimating = true;
    const direction = index > this.currentSlide ? 'next' : 'prev';
    
    // Remove active class from current slide
    this.slides[this.currentSlide].classList.remove('active');
    if (direction === 'prev') {
      this.slides[this.currentSlide].classList.add('prev');
    }
    
    // Update current slide
    this.currentSlide = index;
    
    // Add active class to new slide
    this.slides[this.currentSlide].classList.add('active');
    this.slides[this.currentSlide].classList.remove('prev');
    
    // Update indicators
    this.updateIndicators();
    
    // Reset animation lock
    setTimeout(() => {
      this.isAnimating = false;
      // Clean up prev class from all slides
      this.slides.forEach(slide => slide.classList.remove('prev'));
    }, 600);
  }
  
  nextSlide() {
    const nextIndex = (this.currentSlide + 1) % this.totalSlides;
    this.goToSlide(nextIndex);
  }
  
  prevSlide() {
    const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.goToSlide(prevIndex);
  }
  
  updateIndicators() {
    this.indicators.forEach((indicator, index) => {
      if (index === this.currentSlide) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }
  
  addSwipeSupport() {
    let startX = 0;
    let endX = 0;
    const slider = document.querySelector('.hero-slider');
    
    slider.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });
    
    slider.addEventListener('touchmove', (e) => {
      endX = e.touches[0].clientX;
    });
    
    slider.addEventListener('touchend', () => {
      const diff = startX - endX;
      
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
    });
  }
  
  startAutoPlay(interval = 5000) {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, interval);
    
    // Pause on hover
    const slider = document.querySelector('.hero-slider');
    slider.addEventListener('mouseenter', () => {
      clearInterval(this.autoPlayInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
      this.startAutoPlay(interval);
    });
  }
}

// Initialize slider when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new HeroSlider();
});
