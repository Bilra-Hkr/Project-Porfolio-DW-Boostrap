const textElement = document.getElementById('typing-text');

// Daftar kata
const words = ['Informatics Student', 'Web Developer', 'Java Programmer', 'Gamers'];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  if (!textElement) return;
  const currentWord = words[wordIndex];

  if (isDeleting) {
    textElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    textElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = 150;
  if (isDeleting) typeSpeed /= 2;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500;
  }
  setTimeout(type, typeSpeed);
}
document.addEventListener('DOMContentLoaded', type);
