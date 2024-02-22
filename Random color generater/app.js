const btn = document.querySelector("button");
const hexCode = document.querySelector(".hex");
function randomColor() {
  let randCode = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color =
      color +
      randCode[Math.floor(Math.random() * 16)] +
      randCode[Math.floor(Math.random() * 16)] +
      randCode[Math.floor(Math.random() * 16)] +
      randCode[Math.floor(Math.random() * 16)] +
      randCode[Math.floor(Math.random() * 16)] +
      randCode[Math.floor(Math.random() * 16)];
    return color;
  }
}

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = randomColor();
  hexCode.innerText = randomColor();
});
