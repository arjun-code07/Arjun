# Arjun Pandey - Portfolio Website

## Overview
A modern, responsive portfolio website showcasing Arjun Pandey's skills, education, projects, and contact information. The website features smooth animations, an interactive about section slider, and a clean, professional design.

## Project Type
Static HTML/CSS/JavaScript portfolio website

## Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Tailwind CSS (CDN), Custom CSS
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins)
- **Server**: Python SimpleHTTPServer (for local development)

## Project Structure
```
.
├── index.html           # Main HTML file
├── css/
│   ├── style.css       # Main styles
│   └── animations.css  # Animation styles
├── js/
│   ├── main.js         # Main functionality
│   ├── slider.js       # About section slider
│   └── animations.js   # Typing animations
├── assets/
│   ├── aps.png         # Army Public School logo
│   ├── education.png   # Education icon
│   └── fav2.png        # Favicon
└── server.py           # Development server

```

## Features
- Responsive design for all devices
- Animated hero section with typing effect
- Interactive about section with swipe-able slider
- Skills showcase with hover effects
- Education timeline
- Project portfolio cards
- Contact form (Formspree integration)
- Smooth scrolling navigation
- Mobile-friendly menu

## Development Setup
The project uses a Python HTTP server to serve static files on port 5000.

## Recent Changes
- 2024-11-24: Initial import from GitHub and Replit environment setup
- Added Python HTTP server with cache-control headers for Replit iframe compatibility
- Configured workflow and deployment settings
- Updated hero section layout with improved text hierarchy
- Changed profile image from rectangle to circle with glowing border
- Limited grid background animation to hero section only
- Added dark/light theme toggle with persistent storage
- Removed "I'm" prefix from animated role descriptions
- Added theme toggle button in navigation bar (moon/sun icon)
- Implemented CSS variables for seamless theme switching
- Fixed mobile navbar overlap by increasing hero section padding (6rem on mobile)
- Applied gradient color to "Arjun Pandey" text matching section headers (cyan to purple)
- Fixed animated text layout shift with dedicated container and fixed min-height
- Reduced section spacing from py-20 to py-4 (compact layout)
- Adjusted hero content alignment to bottom-right with margin-right: 12rem
- Added padding-top and padding-bottom for better vertical positioning
- Moved mobile navigation sidebar from left to right side with improved styling
- Reduced contact form size (max-w-4xl to max-w-2xl) with smaller padding
- Removed Education section from navigation and portfolio
- Added dynamic photo sections in About Me that change with slider (introduction, college, skills, hobbies)
- Updated mobile menu with icons and improved styling
- Enhanced project cards with smooth animations and hover effects
- Added Link and Code buttons to each project card
- Implemented staggered animation delays for project cards
- Added grid animation fade-out when scrolling to About section
- Project cards now scale and lift on hover with shadow effects

## Deployment
Configured as a static site deployment on Replit, serving all static files from the root directory.

## Contact Form
The contact form uses Formspree (https://formspree.io/f/xzzqzndz) for form submissions.
