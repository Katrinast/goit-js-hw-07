const textInput = document.querySelector(".input-anonymous");
const nameOutput = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
  const eventValue = event.currentTarget.value.trim();
  if (eventValue === "") {
    nameOutput.textContent = `Anonymous`
  } else {
    nameOutput.textContent = eventValue;
  }
});