function showText() {
    var inputText = document.getElementById("text-input").value;
    var paragraphs = inputText.split(/\n\s*\n/); // розділення тексту на абзаци
  
    // Вивід абзаців
    var outputDiv = document.getElementById("text-output");
    outputDiv.innerHTML = ""; // очищення блоку виводу
    for (var i = 0; i < paragraphs.length; i++) {
      var paragraphDiv = document.createElement("div"); // створення блоку для абзацу
      paragraphDiv.innerText = paragraphs[i]; // додавання тексту абзацу
      var paragraphLabel = document.createElement("label"); // створення підпису для абзацу
      paragraphLabel.innerText = "Абзац " + (i+1) + ":"; // додавання тексту підпису
      outputDiv.appendChild(paragraphLabel); // додавання підпису до блоку виводу
      outputDiv.appendChild(paragraphDiv); // додавання блоку абзацу до блоку виводу
    }
  }
  