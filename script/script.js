// Array vacío para hacerle push, declaracion de funcion para agregar el cliente al sistema, objeto cliente, push.

let clientList = [];

function addClientToSystem(
  presupuesto,
  plan,
  viaje,
  clima,
  lugar,
  intereses,
  nombre,
  apellido,
  mail,
  mensaje
) {
  let newClient = {
    presupuesto: presupuesto,
    plan: plan,
    viaje: viaje,
    clima: clima,
    lugar: lugar,
    intereses: intereses,
    nombre: nombre,
    apellido: apellido,
    mail: mail,
    mensaje: mensaje,
  };
  console.log(newClient);
  clientList.push(newClient);
  jsonStoreClient(clientList);
}

// Guardar en local storage
function jsonStoreClient(list) {
  localStorage.setItem("localClient", JSON.stringify(list));
}

// Traer desde local storage
let storedListJSON = localStorage.getItem("localClient");
let storedListObj = JSON.parse(storedListJSON);

// console.log(storedListObj);
