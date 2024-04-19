function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorText = document.querySelector('.change-color');
const colorBtn = document.querySelector('.color');


colorBtn.addEventListener("click", changeColorByClick);



function changeColorByClick() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorText.textContent = newColor;
}




