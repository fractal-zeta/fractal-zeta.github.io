// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dynamic project section
const projectButtons = document.querySelectorAll('.project-btn');
const projectGrid = document.querySelector('.project-grid');

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

    // Clear the grid
    projectGrid.innerHTML = '';

    // Add new images to the grid
    images.forEach(image => {
      const projectItem = document.createElement('div');
      projectItem.classList.add('project-item');
      projectItem.innerHTML = `<img src="${image}" alt="${projectType} Project">`;
      projectGrid.appendChild(projectItem);
    });
  });
});

// Set the default project area to "web"
document.querySelector('.project-btn[data-project="web"]').click();

// Click-to-zoom functionality
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close');

projectGrid.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    modal.style.display = 'flex';
    modalImg.src = e.target.src;
  }
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
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