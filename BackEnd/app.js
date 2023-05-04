
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
function getParagraphs() {
  const x = document.getElementById("text-input");
  const text = x.value;
  const paragraphs = text.split("\n");
  console.log(paragraphs); 
  return paragraphs;
}

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
    
    // add continue button
    const continueButton = document.createElement("button");
    continueButton.innerHTML = "Продовжити";
    continueButton.onclick = function() {
      pause = false;
      continueButton.style.display = "none";
    };
    pauseButton.appendChild(continueButton);

    const intervalId = setInterval(function () {
      if (pause) return; // check if pause is enabled

      if (!words.length) {
        pauseButton.style.display = "none"; // hide the pause button
        continueButton.style.display = "none"; // hide the continue button
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
            continueButton.style.display = "none"; // hide the continue button
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
  const pauseControl = document.querySelector('.pauseControl');
  const resumeButton = pauseControl.querySelector('button:last-child');
  resumeButton.style.display = 'inline-block';
}
function resume() {
  // рядок коду для продовження тексту

  // змінюємо стилі додаткової кнопки, щоб приховати її знову
  const pauseControl = document.querySelector('.pauseControl');
  const resumeButton = pauseControl.querySelector('button:last-child');
  resumeButton.style.display = 'none';
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