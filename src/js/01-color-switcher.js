const bodyRef = document.querySelector('body');
const startBtnHandle = document.querySelector('[data-start]');
const stopBtnHandle = document.querySelector('[data-stop]');
let flag = false;
let intervalId;

startBtnHandle.addEventListener('click', () => {
  if (!flag) {
    flag = true;
    intervalId = setInterval(() => {
      bodyRef.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
});

stopBtnHandle.addEventListener('click', () => {
  clearInterval(intervalId);
  flag = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
