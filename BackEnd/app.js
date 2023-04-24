
var varSpeed = 1000;
/*function showText() {
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
*/
function showText() {
  const x = document.getElementById("text-input");
  const text = x.value;
  const textNode = document.getElementById("text-output");
  const words = text.split(" ");
   // default speed

  if (text) {
    document.getElementById("input-area").remove();
    textNode.style.height = "100vh";

    // Increase speed 10% of target speed until target speed is reached
    const targetSpeed = 200; // set your desired speed here
    let currentSpeed = varSpeed;
    const intervalTime = 150000 / currentSpeed;

    const intervalId = setInterval(function () {
      if (!words.length) {
        return clearInterval(intervalId);
      }

      textNode.innerText = " " + words.shift();

      // Increase speed until target speed is reached
      if (currentSpeed < targetSpeed) {
        const speedIncreaseRate = (targetSpeed - currentSpeed) * 0.1 / targetSpeed; // modify speed increase rate here
        currentSpeed += currentSpeed * speedIncreaseRate;
        clearInterval(intervalId);
        setInterval(function () {
          if (!words.length) {
            return clearInterval(intervalId);
          }

          textNode.innerText = " " + words.shift();
        }, 150000  / currentSpeed);
      }
    }, intervalTime);
  }
}

function speedIncrease() {
  varSpeed += 10;
  document.getElementById("hereSpeed").innerHTML = varSpeed/10; // update displayed speed
}

function speedDecrease() {
  varSpeed -= 10;
  document.getElementById("hereSpeed").innerHTML = varSpeed/10; // update displayed speed
}

function speedSet() {
  var wordsPerMinute = parseInt(
    document.getElementById("words-per-minute").value
  );
  console.log(wordsPerMinute); // add this line to debug
  if (wordsPerMinute > 0) {
    varSpeed = wordsPerMinute;
    document.getElementById("setSpeed").innerHTML =
      wordsPerMinute + " words per minute";
    showText();
    document.getElementById("hereSpeed").innerHTML = varSpeed/10; // update displayed speed
  }
}
//Сюди вписувати кількість слів за хвилину

//Зробити грамотний вивід швидкості слів
//Це разовий вивід
document.getElementById("hereSpeed").innerHTML = varSpeed/10;
