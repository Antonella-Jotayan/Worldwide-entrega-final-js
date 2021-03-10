function datarange() {
  $('input[name="daterange"]').daterangepicker(
    {
      opens: "center",
    },

    function (start, end, label) {
      let salida = new Date(start);
      let regreso = new Date(end);

      let milisecondsPerDay = 24 * 60 * 60 * 1000;
      let milisecondsElapsed = Math.abs(salida.getTime() - regreso.getTime());
      let numberOfDays = Math.round(milisecondsElapsed / milisecondsPerDay);
      let numberOfNights = numberOfDays - 1;

      $(".firstText").html("Gracias por contactarte con nosotros!");

      $(".secondText").html(
        "En menos de 24 hs vamos a estar enviándote el presupuesto para un viaje de" +
          " " +
          numberOfDays +
          " " +
          "días" +
          " " +
          "y" +
          " " +
          numberOfNights +
          " " +
          "noches."
      );
    }
  );
}

datarange();
