// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dynamic project section with smooth transitions
const projectButtons = document.querySelectorAll('.project-btn');
const projectImagesContainer = document.querySelector('.project-images');

const projectImages = {
  web: ['assets/images/web1.jpg', 'assets/images/web2.jpg', 'assets/images/web3.jpg', 'assets/images/web4.jpg', 'assets/images/web2.jpg', 'assets/images/web3.jpg', 'assets/images/web4.jpg'],
  mobile: ['assets/images/mobile1.jpg', 'assets/images/mobile2.jpg', 'assets/images/mobile3.jpg'],
  ai: ['assets/images/ai1.jpg', 'assets/images/ai2.jpg', 'assets/images/ai3.jpg']
};

projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    projectButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    // Change project images
    const projectType = button.getAttribute('data-project');
    const images = projectImages[projectType];

    // Fade out current images
    projectImagesContainer.style.opacity = 0;

    // Wait for fade-out to complete, then update images
    setTimeout(() => {
      projectImagesContainer.innerHTML = images
        .map(image => `<img src="${image}" alt="${projectType} Project">`)
        .join('');
      // Fade in new images
      projectImagesContainer.style.opacity = 1;
    }, 300); // Match the transition duration in CSS
  });
});

// Set the default project area to "web"
document.querySelector('.project-btn[data-project="web"]').click();

// Scroll functionality for arrows
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', () => {
  projectImagesContainer.scrollBy({
    left: -300, // Scroll by the width of one image
    behavior: 'smooth'
  });
});

rightArrow.addEventListener('click', () => {
  projectImagesContainer.scrollBy({
    left: 300, // Scroll by the width of one image
    behavior: 'smooth'
  });
});




// Scroll-triggered animations
const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Stop observing after animation triggers
      }
    });
  },
  {
    threshold: 0.2, // Trigger when 20% of the element is visible
  }
);

animatedElements.forEach((element) => {
  observer.observe(element);
});