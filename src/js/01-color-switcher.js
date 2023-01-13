const bodyRef = document.querySelector('body');
const startBtnHandle = document.querySelector('[data-start]');
const stopBtnHandle = document.querySelector('[data-stop]');
let intervalId;

startBtnHandle.addEventListener('click', () => {
  startBtnHandle.toggleAttribute('disabled');
  stopBtnHandle.toggleAttribute('disabled');
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtnHandle.addEventListener('click', () => {
  clearInterval(intervalId);
  startBtnHandle.toggleAttribute('disabled');
  stopBtnHandle.toggleAttribute('disabled');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
