// company info counting script

let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

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
