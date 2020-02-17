function validacion(){
var nombre = document.getElementById("nombre").value;
var apellidos = document.getElementById("apellidos").value;
var email = document.getElementById("email").value;
var user = document.getElementById("user").value;
var pass = document.getElementById("pass").value;
var telefono = document.getElementById("telefono").value;

if (nombre == ""){
alert("Por favor ingrese su nombre");
}
if (apellidos == ""){
alert("Por favor ingrese sus apellidos");
}

if (email == ""){
alert("Por favor ingrese su email");
}

if (user == ""){
alert("Por favor ingrese un usuario");
}
if (pass == ""){
alert("Por favor ingrese su contraseña");
}
if (telefono == ""){
alert("Por favor ingrese su teléfono");
}

if ((nombre != "") && (apellidos != "") && (email != "") && (user != "") && (pass != "") && (telefono != "")){
alert("Gracias por registrarte!")
}
}
