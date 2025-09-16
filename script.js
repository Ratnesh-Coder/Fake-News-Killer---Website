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

  // Fade-in and play/pause animation for video container when it enters viewport
  const videoContainer = document.querySelector('.video-container');
  const video = videoContainer.querySelector('video');
  let isIntersecting = false;

  if (videoContainer && video) {
    // Initially hide video container
    videoContainer.style.opacity = 0;
    videoContainer.style.transition = 'opacity 1s ease-out';

    // Intersection Observer to detect when video container is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
          videoContainer.style.opacity = 1;
          video.play();
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the video is visible

    observer.observe(videoContainer);

    // Play on hover
    videoContainer.addEventListener('mouseenter', () => {
      video.play();
    });

    // Pause when mouse leaves, but only if the video is not on screen
    videoContainer.addEventListener('mouseleave', () => {
      if (!isIntersecting) {
        video.pause();
      }
    });
  }
});