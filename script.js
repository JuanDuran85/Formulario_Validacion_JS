function validacion() {
  var nombre = document.getElementById("name").value;

  var fecha_de_nacimiento = document.getElementById("birthday").value;

  var genero = document.getElementById("gender").value;

  var correo = document.getElementById("email").value;

  var adulto = document.getElementById("adult").value;

  if (nombre == "") {
    alert("Por favor ingrese su nombre");
    return false;
  }

  if (fecha_de_nacimiento == "") {
    alert("Por favor ingrese su fecha de nacimiento");
    return false;
  }

  if (genero == "1") {
    alert("Por favor ingrese género");
    return false;
  }

  if (correo == "") {
    alert("Por favor ingrese su correo");
    return false;
  }

  if (adulto == "1") {
    alert("Por favor ingrese si es mayor de edad");
    return false;
  }

  if ((nombre != "") && (fecha_de_nacimiento != "") && (genero != "") && (correo != "") && (adulto != "")) {
    alert("¡Gracias por registrarte!")
    return true;
  }
}