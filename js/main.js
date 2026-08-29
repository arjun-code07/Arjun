// Main configuration and data
const config = {
  skills: [
    { name: "HTML5", icon: "https://cdn-icons-png.flaticon.com/128/174/174854.png" },
    { name: "CSS3", icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png" },
    { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/128/1199/1199124.png" },
    { name: "MySQL", icon: "https://cdn-icons-png.flaticon.com/512/528/528260.png" },
    { name: "React", icon: "https://img.icons8.com/?size=40&id=bzf0DqjXFHIW&format=png" },
    { name: "Node.js", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968322.png" },
    { name: "Tailwind", icon: "https://img.icons8.com/?size=96&id=4PiNHtUJVbLs&format=png" },
    { name: "PHP", icon: "https://cdn-icons-png.flaticon.com/512/919/919830.png" },
    { name: "Bootstrap", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
    { name: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
    { name: "GitHub", icon: "https://img.icons8.com/?size=96&id=AZOZNnY73haj&format=png" },
    { name: "Java", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png" }
  ],
  
  education: [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology",
      major: "Computer Science & Engineering",
      period: "2025 - 2029",
      image: "https://i.pinimg.com/736x/f5/fa/98/f5fa980c7dec129eda08274403016a53.jpg",
      color: "text-yellow-400"
    },
    {
      institution: "Army Public School",
      degree: "Senior Secondary (10+2)",
      major: "Board: C.B.S.E",
      period: "Passing Year: 2024",
      image: "assets/aps.png",
      color: "text-green-400"
    },
    {
      institution: "Army Public School",
      degree: "Secondary (10)",
      major: "Board: C.B.S.E",
      period: "Passing Year: 2022",
      image: "assets/aps.png",
      color: "text-blue-400"
    }
  ],
  
  projects: [
    {
      title: "E-Charge Assist",
      description: "A full-stack E-Charge solution with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB"],
      gradient: "from-teal-500 to-purple-600",
      icon: "fa-laptop-code",
      category: "full-stack"
    },
    {
      title: "UniClub-Connect",
      description: "A responsive University Club application.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      gradient: "from-purple-500 to-pink-600",
      icon: "fa-mobile-alt",
      category: "frontend"
    },
  ],
  
  achievements: {
    stats: [
      { label: "Projects", value: "2", icon: "fa-code", color: "from-teal-500 to-cyan-500" },
      { label: "Certification", value: "6", icon: "fa-users", color: "from-purple-500 to-pink-500" },
      { label: "Years Experience", value: "0", icon: "fa-briefcase", color: "from-orange-500 to-red-500" },
      { label: "Skills Mastered", value: "7+", icon: "fa-star", color: "from-yellow-500 to-orange-500" }
    ],
    badges: [
      { title: "Creative Designer", description: "Designed and implemented 1 responsive UI/UX projects", icon: "fa-paint-brush", color: "from-pink-500 to-purple-600" },
      { title: "Problem Solver", description: "Solved 17+ coding challenges and optimized performance", icon: "fa-lightbulb", color: "from-yellow-500 to-orange-600" },
      { title: "Continuous Learner", description: "Completed 5+ online courses and certifications", icon: "fa-graduation-cap", color: "from-indigo-500 to-blue-600" },
      { title: "Team Player", description: "Led and collaborated with diverse teams on complex projects", icon: "fa-people-group", color: "from-red-500 to-pink-600" }
    ]
  }
};

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', function() {
  initializePortfolio();
  initializeThemeToggle();
});

function initializePortfolio() {
  createSkills();
  createAchievements();
  createProjects();
  initializeProjectTabs();
  initializeMobileMenu();
  initializeSmoothScrolling();
  initializeScrollAnimations();
  createParticles();
}

function initializeThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleSidebar = document.getElementById('theme-toggle-sidebar');
  
  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  
  if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    updateThemeIcon(themeToggle, true);
    updateThemeIcon(themeToggleSidebar, true);
  }
  
  function updateThemeIcon(button, isLight) {
    if (!button) return;
    const icon = button.querySelector('i');
    if (isLight) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
  
  function toggleTheme() {
    const isLight = document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeIcon(themeToggle, isLight);
    updateThemeIcon(themeToggleSidebar, isLight);
  }
  
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  if (themeToggleSidebar) {
    themeToggleSidebar.addEventListener('click', toggleTheme);
  }
}

function createSkills() {
  const skillsContainer = document.querySelector('#skills .grid');
  skillsContainer.innerHTML = config.skills.map(skill => `
    <div class="skill-card fade-in">
      <div class="flex flex-col items-center">
        <img src="${skill.icon}" alt="${skill.name}" class="w-16 h-16 mb-4">
        <p class="text-center text-teal-300 font-medium">${skill.name}</p>
      </div>
    </div>
  `).join('');
}

function createAchievements() {
  // Create Stats
  const statsContainer = document.querySelector('#achievements .grid:first-child');
  statsContainer.innerHTML = config.achievements.stats.map((stat, index) => `
    <div class="achievement-stat fade-in" style="animation-delay: ${index * 0.1}s">
      <div class="bg-gradient-to-br ${stat.color} p-0.5 rounded-2xl">
        <div class="bg-gray-900 rounded-2xl p-6 h-full flex flex-col items-center justify-center">
          <i class="fas ${stat.icon} text-3xl mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent"></i>
          <p class="text-3xl font-bold text-white mb-1">${stat.value}</p>
          <p class="text-gray-400 text-center text-sm">${stat.label}</p>
        </div>
      </div>
    </div>
  `).join('');
  
  // Create Achievement Badges
  const badgesContainer = document.querySelector('#achievements .grid:last-child');
  badgesContainer.innerHTML = config.achievements.badges.map((badge, index) => `
    <div class="achievement-badge fade-in" style="animation-delay: ${index * 0.1}s">
      <div class="bg-gradient-to-br ${badge.color} p-0.5 rounded-xl h-full">
        <div class="bg-gray-900 rounded-xl p-6 h-full flex flex-col">
          <div class="flex items-start justify-between mb-3">
            <i class="fas ${badge.icon} text-3xl bg-gradient-to-r ${badge.color} bg-clip-text text-transparent"></i>
            <span class="badge-shine">✨</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">${badge.title}</h3>
          <p class="text-gray-300 text-sm flex-1">${badge.description}</p>
          <div class="mt-4 pt-4 border-t border-gray-700">
            <div class="flex items-center gap-2 text-teal-400 text-xs font-semibold hover:text-teal-300 transition-colors cursor-pointer">
              <span>Unlock Achievement</span>
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function createProjects(filterCategory = 'all') {
  const projectsContainer = document.querySelector('#projects .grid');
  const filteredProjects = filterCategory === 'all' 
    ? config.projects 
    : config.projects.filter(p => p.category === filterCategory);
  
  projectsContainer.innerHTML = filteredProjects.map((project, index) => `
    <div class="project-card project-animate" style="animation-delay: ${index * 0.08}s" data-category="${project.category}">
      <div class="project-card-inner h-full bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-teal-500/50">
        <div class="h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden group">
          <i class="fas ${project.icon} text-white text-5xl group-hover:scale-125 transition-all duration-300"></i>
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>
        <div class="p-4 flex-1 flex flex-col">
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">${project.title}</h3>
          <p class="text-gray-300 mb-4 text-sm flex-1">${project.description}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            ${project.technologies.map(tech => `
              <span class="tech-badge bg-teal-900/50 text-teal-300 px-2 py-1 rounded text-xs border border-teal-500/30 hover:bg-teal-800/70 transition-all duration-200">${tech}</span>
            `).join('')}
          </div>
          <div class="flex gap-3 mt-auto">
            <a href="#" class="flex-1 bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white px-3 py-2 rounded text-center text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
              <i class="fas fa-link"></i> Link
            </a>
            <a href="#" class="flex-1 bg-gray-800 hover:bg-gray-700 border border-teal-500/50 text-teal-400 hover:text-teal-300 px-3 py-2 rounded text-center text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
              <i class="fas fa-code"></i> Code
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function initializeProjectTabs() {
  const projectTabs = document.querySelectorAll('.project-tab');
  
  projectTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      projectTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      const category = this.getAttribute('data-category');
      createProjects(category);
    });
  });
}

function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileOverlay.classList.remove('hidden');
    mobileOverlay.classList.add('active');
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    setTimeout(() => {
      mobileOverlay.classList.add('hidden');
    }, 300);
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}

function initializeScrollAnimations() {
  const gridBg = document.querySelector('.grid-bg');
  const aboutSection = document.getElementById('about');
  
  function checkScroll() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('active');
      }
    });
    
    // Fade out grid when reaching about section
    if (gridBg && aboutSection) {
      const aboutTop = aboutSection.getBoundingClientRect().top;
      if (aboutTop < window.innerHeight) {
        gridBg.classList.add('fade-out');
      } else {
        gridBg.classList.remove('fade-out');
      }
    }
  }

  // Initial check
  checkScroll();
  
  // Check on scroll
  window.addEventListener('scroll', checkScroll);
}

function createParticles() {
  const particlesContainer = document.getElementById('particles');
  
  // Check if particles container exists
  if (!particlesContainer) {
    return;
  }
  
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 3 + 1;
    
    // Random animation delay and duration
    const delay = Math.random() * 15;
    const duration = Math.random() * 10 + 10;
    
    // Apply styles
    particle.style.left = `${posX}vw`;
    particle.style.top = `${posY}vh`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    
    // Random color
    const colors = ['#00ffe1', '#ff00ff', '#00ff88'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = color;
    
    particlesContainer.appendChild(particle);
  }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
