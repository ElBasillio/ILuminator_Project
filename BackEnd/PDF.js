// створюємо функцію для читання тексту з PDF
async function readPdfFile(file) {
    // завантажуємо PDF-файл
    const pdf = await pdfjsLib.getDocument({ url: URL.createObjectURL(file) }).promise;
  
    // зчитуємо кількість сторінок у PDF
    const numPages = pdf.numPages;
    // проходимось по всіх сторінках і зчитуємо текст
    let fullText = "";
    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const text = content.items.map((item) => item.str).join("");
      fullText += text + "\n";
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
        console.error(error); // виводимо текст у консоль
      }
    }
  });