// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll to video container when clicking buttons
  const scrollButtons = document.querySelectorAll('.download-button');

  scrollButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      // Prevent default link behavior if href is #
      if (button.getAttribute('href') === '#') {
        e.preventDefault();
      }

      // Scroll to video container smoothly
      const videoSection = document.querySelector('.video-container');
      if (videoSection) {
        videoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  // Fade-in animation for video container when it enters viewport
  const videoContainer = document.querySelector('.video-container');

  if (videoContainer) {
    // Initially hide video container
    videoContainer.style.opacity = 0;
    videoContainer.style.transition = 'opacity 1s ease-out';

    // Intersection Observer to detect when video container is visible
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoContainer.style.opacity = 1;
          observer.unobserve(videoContainer);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(videoContainer);
  }
});
