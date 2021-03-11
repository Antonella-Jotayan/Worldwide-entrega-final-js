$("#dolar").on("click", function () {
  obtenerDatos("dolar");
});
$("#euro").on("click", function () {
  obtenerDatos("euro");
});

function obtenerDatos(valor) {
  let url = `https://mindicador.cl/api/${valor}`;

  const api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  api.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      let datos = JSON.parse(this.responseText);
      let resultado = document.querySelector("#resultado");
      resultado.innerHTML = "";

      let i = 0;

      for (let item of datos.serie) {
        i++;
        resultado.innerHTML += `<li>${item.fecha.substr(0, 10)} |$ ${
          item.valor
        }</li>`;
        if (i == 1) {
          break;
        }
      }
    }
  };
}
