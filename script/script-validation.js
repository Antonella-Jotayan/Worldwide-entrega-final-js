// // Validacion: Solo letras para input name e input surname.
document.getElementById("name").addEventListener("keyup", onlyLetters);
document.getElementById("surname").addEventListener("keyup", onlyLetters);

function onlyLetters() {
  let re = /[^a-z]/gi;
  this.value = this.value.replace(re, "");
}

// Validación nombre, apellido, mail, mensaje.

const form = document.getElementById("form");
const nombre = document.getElementById("name");
const apellido = document.getElementById("surname");
const email = document.getElementById("email");
const mensaje = document.getElementById("message");

let validationFields = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectValidation = selectValues();
  const radioValidation = radioValues();
  const checkboxValidation = checkboxValues();
  const inputsValidation = checkInputs();

  if (
    selectValidation.length == 2 &&
    inputsValidation.length >= 3 &&
    radioValidation.length == 3 &&
    checkboxValidation.length >= 1
  ) {
    saveClient();
    modal();
  }
});

function checkInputs() {
  const nombreValue = nombre.value.trim();
  const apellidoValue = apellido.value.trim();
  const emailValue = email.value.trim();
  const mensajeValue = mensaje.value.trim();
  validationFields = [];

  if (nombreValue === "") {
    setErrorFor(nombre, "Completar campo");
  } else if (nombreValue.length <= 3) {
    setErrorFor(nombre, "Ingresar nombre completo");
  } else {
    setSuccessFor(nombre);
    validationFields.push("nombre");
  }

  if (apellidoValue === "") {
    setErrorFor(apellido, "Completar campo");
  } else if (apellidoValue.length <= 3) {
    setErrorFor(apellido, "Ingresar apellido completo");
  } else {
    setSuccessFor(apellido);
    validationFields.push("apellido");
  }

  if (emailValue === "") {
    setErrorFor(email, "Completar campo");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "El email es inválido");
  } else {
    setSuccessFor(email);
    validationFields.push("email");
  }

  if (mensajeValue.length > 5000) {
    setErrorFor(mensaje, "El mensaje es demasiado largo");
  } else {
    setSuccessFor(mensaje);
  }
  return validationFields;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// Funciones para íconos de success o error y mensaje de error.

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "formControl error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "formControl success";
}
