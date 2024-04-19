function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxContainer = document.querySelector('#boxes');
const buttonCreate = document.querySelector('.create-btn');
const buttonDestroy = document.querySelector('.destroy-btn');
const amountInput = document.querySelector("#controls input");
console.log(buttonDestroy);

buttonCreate.addEventListener("click", () => {
  const amount = parseInt(amountInput.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    amountInput.value = "";
  } else {
    alert('Please enter a number between 1 and 100!');
  }
});

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++){
    const box = document.createElement('div');
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes () {
  boxContainer.innerHTML = "";
}


buttonDestroy.addEventListener("click", destroyBoxes);