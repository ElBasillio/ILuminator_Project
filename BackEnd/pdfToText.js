// підключаємо бібліотеку PDF.js
import * as pdfjsLib from "pdfjs-dist";

// створюємо функцію для читання тексту з PDF
async function readPdfFile(filePath) {
  // завантажуємо PDF-файл
  const pdf = await pdfjsLib.getDocument(filePath).promise;

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

  return fullText;
}


const filePath = "path/to/file.pdf";
const text = await readPdfFile(filePath);

// виводимо текст у консоль
console.log(text);
// цей фрагмент містить помилку
/*  .catch((error) => {
    console.error(error); // виводимо помилку у консоль, якщо є
  }); */ 