const formSubmitHandler = document.querySelector('form');

formSubmitHandler.addEventListener('submit', () => {
  const firstDelay = document.querySelector('[name="delay"]').value;
  const delayStep = document.querySelector('[name="step"]').value;
  const amount = document.querySelector('[name="amount"]').value;
  let counter = 1;

  while (counter <= amount) {
    let delay = firstDelay + delayStep * counter;
    const promiseId = createPromise(promiseId, delay);
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
