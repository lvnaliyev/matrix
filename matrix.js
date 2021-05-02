var digit,
  maxDigits = 5000,
  randomize = function () {
    return Math.floor(Math.random() + 0.5);
  },
  codeArea = document.querySelector(".demo"),
  generate = function (e) {
    if (e.buttons == "0") {
      // replace old result with one digit
      codeArea.innerHTML = randomize();
      // then generate the rest of the digits
      for (var i = 1; i < maxDigits; ++i) {
        digit = randomize();
        codeArea.innerHTML += digit;
      }
    }
  };
window.addEventListener("click", generate);
