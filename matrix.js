var digit,
  maxDigits = 5000,
  randomize = function () {
    return Math.floor(Math.random() + 0.5);
  },
  codeArea = document.querySelector(".demo"),
  generate = function (e) {
    if (e.keyCode == "103") {
      // replace old result with one digit
      codeArea.innerHTML = randomize();
      // then generate the rest of the digits
      for (var i = 1; i < maxDigits; ++i) {
        digit = randomize();
        codeArea.innerHTML += digit;
      }
    }
  };
window.addEventListener("keypress", generate);
