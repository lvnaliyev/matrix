var digit,
  maxDigits = 5000,
  randomize = function () {
    return Math.floor(Math.random() + 0.5);
  },
  codeArea = document.querySelector(".demo"),
  generate = function () {
    // replace old result with one digit
    codeArea.innerHTML = randomize();
    // then generate the rest of the digits
    for (var i = 1; i < maxDigits; ++i) {
      digit = randomize();
      codeArea.innerHTML += digit;
    }
  };
setInterval(() => generate(), 1);

// e.buttons == "0"
