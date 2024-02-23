const autoText = document.querySelector(".auto-text");
const cursor = document.querySelector(".cursor");

const word = ["Fun", "Good", "Exciting", "Confusing", "Awesome", "😂"];
const typeDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (word.length) {
    setTimeout(type, newLetterDelay);
  }
});

function type() {
  if (charIndex < word[index].length) {
    autoText.textContent += word[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typeDelay);
  } else {
    setTimeout(erase, typeDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    autoText.textContent = word[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= word.length) {
      index = 0;
    }
    setTimeout(type, typeDelay + 1100);
  }
}
