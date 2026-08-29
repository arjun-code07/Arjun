// Enhanced Typing Animation with letter-by-letter effect
const phrases = [
  "Full Stack Developer",
  "Software Engineer",
  "Problem Solver"
];

const colors = [
  "text-yellow-400",
  "text-red-400", 
  "text-teal-400",
  "text-purple-400"
];

let currentPhraseIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;
let isWaiting = false;

function typeLoop() {
  const element = document.getElementById("animated-text");
  const currentPhrase = phrases[currentPhraseIndex];
  const currentColor = colors[currentPhraseIndex];

  // Set color
  element.className = currentColor;

  if (!isDeleting && !isWaiting) {
    // Typing forward
    if (currentLetterIndex <= currentPhrase.length) {
      element.textContent = currentPhrase.substring(0, currentLetterIndex);
      currentLetterIndex++;
      setTimeout(typeLoop, 80); // Faster typing speed for all letters
    } else {
      // Finished typing current phrase
      isWaiting = true;
      setTimeout(() => {
        isWaiting = false;
        isDeleting = true;
        setTimeout(typeLoop, 100);
      }, 1500); // Pause at end of phrase
    }
  } else if (isDeleting) {
    // Deleting backward
    if (currentLetterIndex > 0) {
      element.textContent = currentPhrase.substring(0, currentLetterIndex - 1);
      currentLetterIndex--;
      setTimeout(typeLoop, 40); // Faster deleting speed
    } else {
      // Finished deleting, move to next phrase
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(typeLoop, 500); // Pause before next phrase
    }
  }
}

// Start typing animation when DOM is loaded
document.addEventListener('DOMContentLoaded', typeLoop);
