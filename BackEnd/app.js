let varSpeed = 500;


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
    }, varSpeed);
  }
}

function speedIncrease(){
  return varSpeed += 50;
}

function speedDecrease(){
  return varSpeed -= 50;
}

//Сюди вписувати кількість слів за хвилину
function speedSet(){

}
//Зробити грамотний вивід швидкості слів
//Це разовий вивід
document.getElementById("hereSpeed").innerHTML=varSpeed;
