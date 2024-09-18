let counter_div = (document.getElementById("counter_value").innerHTML = 0);

const incrementButton = document.getElementById("increment_value");

const decrementButton = document.getElementById("decrement_value");

incrementButton.addEventListener("click", () => {
  counter_div = counter_div + 1;
  document.getElementById("counter_value").innerHTML = counter_div;
});

decrementButton.addEventListener("click", () => {
  counter_div = counter_div - 1;
  document.getElementById("counter_value").innerHTML = counter_div;
});
