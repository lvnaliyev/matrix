function appendNCopies(n, original, appendTo) {
  for (var i = 0; i < n; i++) {
    var randomizer = (document.querySelector(".demo").innerHTML = Math.floor(
      Math.random() * 2
    ));
    var clone = original.cloneNode(true);
    appendTo.appendChild(clone);
  }
}

var myDiv = document.querySelector(".demo");
appendNCopies(innerHeight, myDiv, document.body);
