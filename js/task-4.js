
const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (login === "" || password === "") {
    return alert('All form fields must be filled in');
  }

  const userData = {
    Login: login,
    Password: password,
  };

  console.log(userData);
  
  form.reset();
}