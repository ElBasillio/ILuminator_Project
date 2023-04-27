
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
let pause = false;

function showTextWithPause() {
  const x = document.getElementById("text-input");
  const text = x.value;
  const textNode = document.getElementById("text-output");
  const words = text.split(" ");
  const targetSpeed = 200; // set your desired speed here
  let currentSpeed = varSpeed; // default speed
  const intervalTime = 150000 / currentSpeed;
  const pauseButton = document.querySelector(".pauseControl");

  pauseButton.style.display = "none"; // hide the pause button by default

  if (text) {
    document.getElementById("input-area").remove();
    textNode.style.height = "100vh";
    pauseButton.style.display = "flex"; // show the pause button
    pauseButton.style.justifyContent = "center"; // center the button horizontally
    pauseButton.style.bottom = "0"; // align the button to the bottom
    pauseButton.style.position = "absolute"; // position the button absolutely
    

    const intervalId = setInterval(function () {
      if (pause) return; // check if pause is enabled

      if (!words.length) {
        pauseButton.style.display = "none"; // hide the pause button
        return clearInterval(intervalId);
      }

      textNode.innerText = " " + words.shift();

      // Increase speed until target speed is reached
      if (currentSpeed < targetSpeed) {
        const speedIncreaseRate = (targetSpeed - currentSpeed) * 0.1 / targetSpeed; // modify speed increase rate here
        currentSpeed += currentSpeed * speedIncreaseRate;
        clearInterval(intervalId);
        setInterval(function () {
          if (pause) return; // check if pause is enabled

          if (!words.length) {
            pauseButton.style.display = "none"; // hide the pause button
            return clearInterval(intervalId);
          }

          textNode.innerText = " " + words.shift();
        }, 150000 / currentSpeed);
      }
    }, intervalTime);
  }
}


function togglePause() {
  pause = !pause;
}


function speedIncrease() {
  varSpeed += 100;
  document.getElementById("hereSpeed").innerHTML = varSpeed/10; // update displayed speed
}

function speedDecrease() {
  varSpeed -= 100;
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