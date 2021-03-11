// Radio buttons
let selectPresupuestoAprox = document.getElementById("selectBudget");
let selectPlan = document.getElementById("selectPlan");
let radioViajeEn = document.getElementsByName("grupoFamiliar");
let radioClima = document.getElementsByName("clima");
let radioLugar = document.getElementsByName("lugar");

let viajeEnR;
let climaR;
let lugarR;

// Selects validation
function selectValues() {
  let selectArray = [];

  selectPresupuestoAprox.value
    ? selectArray.push(selectPresupuestoAprox.value)
    : null;

  selectPlan.value ? selectArray.push(selectPlan.value) : null;

  return selectArray;
}

// Radio validation
function radioValues() {
  let radioArray = [];
  for (let i = 0, length = radioViajeEn.length; i < length; i++) {
    if (radioViajeEn[i].checked) {
      viajeEnR = radioViajeEn[i].value;
      viajeEnR ? radioArray.push(viajeEnR) : null;
      break;
    }
  }
  for (let i = 0, length = radioClima.length; i < length; i++) {
    if (radioClima[i].checked) {
      climaR = radioClima[i].value;
      climaR ? radioArray.push(climaR) : null;
      break;
    }
  }

  for (let i = 0, length = radioLugar.length; i < length; i++) {
    if (radioLugar[i].checked) {
      lugarR = radioLugar[i].value;
      lugarR ? radioArray.push(lugarR) : null;
      break;
    }
  }

  return radioArray;
}

// Checkbox validation
let interesesArray = [];

function checkboxValues() {
  let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  for (let i = 0; i < checkboxes.length; i++) {
    interesesArray.push(checkboxes[i].value);
  }
  return interesesArray;
}

// Función para guardar lo que el cliente cargó, ejecucion de función para agregar datos del cliente al sistema.
function saveClient() {
  let presupuesto = document.getElementById("selectBudget").value,
    fecha = document.getElementById("date").value,
    plan = document.getElementById("selectPlan").value,
    viaje = viajeEnR,
    clima = climaR,
    lugar = lugarR,
    intereses = interesesArray,
    nombre = document.getElementById("name").value,
    apellido = document.getElementById("surname").value,
    mail = document.getElementById("email").value,
    mensaje = document.getElementById("message").value;

  addClientToSystem(
    presupuesto,
    fecha,
    plan,
    viaje,
    clima,
    lugar,
    intereses,
    nombre,
    apellido,
    mail,
    mensaje
  );
}
