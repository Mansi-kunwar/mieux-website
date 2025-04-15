// let valueDisplays = document.querySelectorAll(".num");
// let interval = 500;

// valueDisplays.forEach((valueDisplay) => {
//   let startValue = 0;
//   let endValue = parseInt(valueDisplay.getAttribute("data-val"));
//   let duration = Math.floor(interval / endValue);
//   let counter = setInterval(function () {
//     startValue += 1;
//     valueDisplay.textContent = startValue;
//     if (startValue == endValue) {
//       clearInterval(counter);
//     }
//   }, duration);
// });

let valueDisplays = document.querySelectorAll(".num");
let interval = 1000; // Total duration in ms (can adjust if needed)

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  // Remove "+" if any, then parse to number
  let endValue = parseInt(valueDisplay.getAttribute("data-val").replace("+", ""));
  let increment = 100;

  // Calculate time per increment based on interval and number of steps
  let steps = Math.ceil(endValue / increment);
  let duration = Math.floor(interval / steps);

  let counter = setInterval(function () {
    startValue += increment;
    if (startValue >= endValue) {
      valueDisplay.textContent = endValue + "+"; // Add "+" back if needed
      clearInterval(counter);
    } else {
      valueDisplay.textContent = startValue;
    }
  }, duration);
});
