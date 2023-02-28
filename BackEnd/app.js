let speed = 500;

function showText() {
  const x = document.getElementById("text-input");
  const text = x.value;

  const textNode = document.getElementById("text-output")

  const words = text.split(" "); 

  if(text) {
    document.getElementById("input-area").remove()
    textNode.style.height = '100vh';

    const intervalId = setInterval(function() { 
      if (!words.length) {
        return clearInterval(intervalId); 
      }
      textNode.innerText = " " + words.shift();
    }, speed);
  }
}

function speedIncrease{
  return x = x + 50;
}

function speedDecrease{
  return x = x - 50;
}

function speedSet{

}