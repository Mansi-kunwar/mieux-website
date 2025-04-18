// company info counting script

// let valueDisplays = document.querySelectorAll(".num");
// let interval = 1000;

// valueDisplays.forEach((valueDisplay) => {
//   let startValue = 0;
//   let endValue = parseInt(valueDisplay.getAttribute("data-val").replace("+", ""));
//   let increment = Math.ceil(endValue / 20); 
//   let duration = Math.floor(interval / (endValue / increment));

//   let counter = setInterval(function () {
//     startValue += increment;
//     if (startValue >= endValue) {
//       valueDisplay.textContent = endValue + "+";
//       clearInterval(counter);
//     } else {
//       valueDisplay.textContent = startValue;
//     }
//   }, duration);
// });

let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;
let hasCounted = false; // To prevent repeating

const startCounting = () => {
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val").replace("+", ""));
    let increment = Math.ceil(endValue / 20);
    let duration = Math.floor(interval / (endValue / increment));

    let counter = setInterval(function () {
      startValue += increment;
      if (startValue >= endValue) {
        valueDisplay.textContent = endValue + "+";
        clearInterval(counter);
      } else {
        valueDisplay.textContent = startValue;
      }
    }, duration);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasCounted) {
        hasCounted = true;
        startCounting();
      }
    });
  },
  {
    threshold: 0.5 // triggers when 50% of the element is visible
  }
);

// Observe the container that holds all counters
const statsSection = document.querySelector(".box-container2");
observer.observe(statsSection);
