import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtnHandler = document.querySelector('[data-start]');
const daysCounterRef = document.querySelector('[data-days]');
const hoursCounterRef = document.querySelector('[data-hours]');
const minutesCounterRef = document.querySelector('[data-minutes]');
const secondsCounterRef = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      alert('Please choose a date in the future');
    } else {
      startBtnHandler.removeAttribute('disabled');
      startBtnHandler.addEventListener('click', () => {
        const intevalId = setInterval(() => {
          const remainder = selectedDates[0].getTime() - Date.now();
          const converted = convertMs(remainder);
          daysCounterRef.textContent = addLeadingZero(converted.days);
          hoursCounterRef.textContent = addLeadingZero(converted.hours);
          minutesCounterRef.textContent = addLeadingZero(converted.minutes);
          secondsCounterRef.textContent = addLeadingZero(converted.seconds);
          if (
            converted.days === 0 &&
            converted.hours === 0 &&
            converted.minutes === 0 &&
            converted.seconds === 0
          ) {
            clearInterval(intevalId);
          }
        }, 1000);
      });
    }
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(number) {
  if (number < 10) {
    return `0${number}`;
  }
}
flatpickr('#datetime-picker', options);
