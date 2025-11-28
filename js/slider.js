// About Slider functionality
const slides = [
  {
    title: "Introduction",
    subtitle: "Arjun Pandey",
    role: "Full Stack Developer",
    content: "Hi, I'm Arjun Pandey! I'm passionate about web development and always eager to innovate and create efficient solutions. I love building full-stack web apps, exploring new tech, and optimizing user experiences."
  },
  {
    title: "College",
    subtitle: "LPU, JALANDHAR",
    role: "B.Tech in CSE",
    content: "I'm currently pursuing Computer Science at LPU, Jalandhar with a focus on software development and AI. The curriculum has provided me with a strong foundation in algorithms, data structures, and modern development practices."
  },
  {
    title: "Skills",
    subtitle: "My Stack",
    role: "React · Node.js · Tailwind",
    content: "I specialize in JavaScript ecosystems, RESTful APIs, and responsive design using modern frameworks and tools. I'm constantly learning new technologies to stay at the forefront of web development."
  },
  {
    title: "Hobbies",
    subtitle: "Beyond Code",
    role: "Cricket · Badminton · Gaming",
    content: "In my free time, I love playing Cricket, Badminton, and staying active outdoors. I'm also an avid gamer who enjoys exploring virtual worlds and competitive gaming scenes."
  }
];

let currentSlide = 0;

function initializeSlider() {
  const slideElements = document.querySelectorAll('.slide');
  const imageSlides = document.querySelectorAll('.about-image-slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dots = document.querySelectorAll('.slider-dot');
  const swipeBox = document.querySelector('.about-slider');

  function showSlide(n) {
    // Hide all text slides
    slideElements.forEach(slide => {
      slide.classList.remove('active');
    });
    
    // Hide all image slides
    imageSlides.forEach(imageSlide => {
      imageSlide.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Show current text slide
    if (slideElements[n]) {
      slideElements[n].classList.add('active');
    }
    
    // Show current image slide
    if (imageSlides[n]) {
      imageSlides[n].classList.add('active');
    }
    
    // Show current dot
    if (dots[n]) {
      dots[n].classList.add('active');
    }
    currentSlide = n;
  }

  // Next slide
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      let next = currentSlide + 1;
      if (next >= slides.length) next = 0;
      showSlide(next);
    });
  }

  // Previous slide
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      let prev = currentSlide - 1;
      if (prev < 0) prev = slides.length - 1;
      showSlide(prev);
    });
  }

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  // Auto slide
  setInterval(() => {
    let next = currentSlide + 1;
    if (next >= slides.length) next = 0;
    showSlide(next);
  }, 5000);

  // Touch swipe support
  if (swipeBox) {
    let startX = 0;

    swipeBox.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
    }, false);

    swipeBox.addEventListener('touchend', function(e) {
      let endX = e.changedTouches[0].clientX;
      let diffX = startX - endX;

      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          // Swiped left - next slide
          let next = currentSlide + 1;
          if (next >= slides.length) next = 0;
          showSlide(next);
        } else {
          // Swiped right - previous slide
          let prev = currentSlide - 1;
          if (prev < 0) prev = slides.length - 1;
          showSlide(prev);
        }
      }
    }, false);
  }

  // Initialize first slide
  showSlide(0);
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSlider);
