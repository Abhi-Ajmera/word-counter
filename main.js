let txtbox = document.getElementById("txtarea");

txtbox.addEventListener("input", function () {
  var text = this.value;
  document.getElementById("chartxt").innerHTML = text.length;

  text = text.trim();
  var word = text.split(" ");
  let cleanWord = word.filter(function (element) {
    return element != "";
  });
  document.getElementById("wordtxt").innerHTML = cleanWord.length;
});
