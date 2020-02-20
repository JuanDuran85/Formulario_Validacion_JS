function validando() {
    var nombre, telefono, dia, mes, año, hombre, mujer;

    nombre = document.getElementById("nombre").value;
    telefono = document.getElementById("telefono").value;
    dia = document.getElementById("dia").value;
    mes = document.getElementById("mes").value;
    año = document.getElementById("año").value;
    hombre = document.getElementById("Hombre").checked;
    mujer = document.getElementById("Mujer").checked;
    


    /*const expresion = /^[0-9]*$/;*/

    if (nombre==""){
        alert("Nombre requerido")
    };

    if  (telefono==""){
        alert("Teléfono requerido")
    };

    if  (isNaN(telefono)){
        alert("Ingrese un teléfono válido")
    };

    if (dia=="" && mes=="" && año==""){
        alert("Ingrese fecha de nacimiento")
    };

    if (dia==""){
        alert("Ingrese día de nacimiento")
    };

    if (mes==""){
        alert("Ingrese mes de nacimiento")
    };
    if (año==""){
        alert("Ingrese año de nacimiento")
    };
    if (isNaN(dia) || isNaN(mes) || isNaN(año)) {
        alert("Ingrese su fecha de nacimiento válida")
    };
        
    if (hombre===false && mujer===false){
        alert("Ingrese su sexo")
    };

    if ((nombre != "") && (telefono != "") && (dia != "") && (mes != "") && (año != "") && (sexo != "")){
        alert("Gracias por registrarte!")
    };



}