const doc = document.getElementById("app");
const inputValue = document.getElementById("guessInput");
const btnSubmit = document.getElementById("btnSubmit");
const btnStartGame = document.getElementById("btnStartGame");
const guessValue = document.createElement("p");

doc.appendChild(guessValue);
const guesses = [];

const startMethod = () => {
  inputValue.setAttribute("disabled", "true");
  btnSubmit.setAttribute("disabled", "true");
};
startMethod();

btnStartGame.addEventListener("click", () => {
  btnStartGame.setAttribute("disabled", "true");
  inputValue.removeAttribute("disabled");
  btnSubmit.removeAttribute("disabled");
});

btnSubmit.addEventListener("click", () => {
  if (!inputValue.value) {
    alert("Please Enter a value");
  } else {
    if (inputValue.value == 55) {
      alert("You got it !!");
      btnStartGame.removeAttribute("disabled");
      inputValue.setAttribute("disabled", "true");
      inputValue.value = "";
      btnSubmit.setAttribute("disabled", "true");
      guesses.length = 0;
      guessValue.innerHTML = [...guesses];
    } else if (inputValue.value > 55) {
      alert("A bit low");
      guesses.push(inputValue.value);
      guessValue.innerHTML = [...guesses];
    } else {
      alert("A Bit high");
      guesses.push(inputValue.value);
      guessValue.innerHTML = [...guesses];
    }
  }
});
