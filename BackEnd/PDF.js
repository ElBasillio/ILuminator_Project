async function readPdfFile(file) {
  const pdf = await pdfjsLib.getDocument({ url: URL.createObjectURL(file) }).promise;
  const numPages = pdf.numPages;
  let fullText = "";

  for (let i = 1; i <= numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const textItems = content.items.map((item) => item.str);

    // Об'єднати рядки в один абзац з використанням переносу рядка
    const paragraph = textItems.join("\n");
    fullText += paragraph + "\n\n"; // Додати два переноси рядка після кожного абзацу
  }

  const textContainer = document.getElementById("text-container");
  textContainer.textContent = fullText;
}

const fileInput = document.getElementById("file-input");
const readBtn = document.getElementById("read-btn");

readBtn.addEventListener("click", async () => {
  const file = fileInput.files[0];
  if (file) {
    try {
      await readPdfFile(file);
    } catch (error) {
      console.error(error);
    }
  }
});
