const dynamicText = document.querySelector('.dynamic-text');
const words = ["Invoices", "Quotations", "Products"];
let wordIndex = 0;

function updateText() {
  switch (wordIndex) {
    case 0:
      dynamicText.textContent = words[0];
      break;
    case 1:
      dynamicText.textContent = words[1];
      break;
    case 2:
      dynamicText.textContent = words[2];
      break;
    default:
      dynamicText.textContent = words[0]; 
  }

  wordIndex = (wordIndex + 1) % words.length; 
}

setInterval(updateText, 3000); 