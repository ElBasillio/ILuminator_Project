let varSpeed = 500;

function showText() {
  const x = document.getElementById("text-input");
  const text = x.value;

  const textNode = document.getElementById("text-output");

  const words = text.split(" ");

  if (text) {
    document.getElementById("input-area").remove();
    textNode.style.height = "100vh";

    const intervalId = setInterval(function () {
      if (!words.length) {
        return clearInterval(intervalId);
      }
      textNode.innerText = " " + words.shift();
    }, 150000 / varSpeed);
  }
}

function speedIncrease() {
  varSpeed += 50;
  document.getElementById("hereSpeed").innerHTML = varSpeed;
}

function speedDecrease() {
  varSpeed -= 50;
  document.getElementById("hereSpeed").innerHTML = varSpeed;
}

function speedSet() {
  var wordsPerMinute = parseInt(
    document.getElementById("words-per-minute").value
  );
  if (wordsPerMinute > 0) {
    varSpeed = wordsPerMinute;
    document.getElementById("setSpeed").innerHTML =
      wordsPerMinute + " words per minute";
    showText();
  }
}
//Сюди вписувати кількість слів за хвилину

//Зробити грамотний вивід швидкості слів
//Це разовий вивід
document.getElementById("hereSpeed").innerHTML = varSpeed;
