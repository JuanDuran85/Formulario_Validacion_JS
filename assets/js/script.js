function validando() {
    var nombre, telefono, nacimiento, hombre, mujer, otro, mayor;

    nombre = document.getElementById("nombre").value;
    telefono = document.getElementById("telefono").value;
    nacimiento = document.getElementById("nacimiento").value;  
    hombre = document.getElementById("hombre").checked;
    mujer = document.getElementById("mujer").checked;
    otro = document.getElementById("otro").checked;
    mayor = document.getElementById("mayor").checked;

    const expresion = /\w+@\w+\.+[a-z]/;

    if (nombre === "" || telefono === "" || nacimiento === "" ) {
        Swal.fire({
            icon: 'error',
            title: 'Lo siento...',
            text: 'Debes ingresar todos los valores',
            footer: 'No puedes dejar las casillas sin valores'
          });
          return false;
    } else if (nombre.length > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar un nombre válido',
            footer: 'El máximo permitido es de 20 caracteres'
        });
        return false;
    } else if (telefono.length > 9 || isNaN(telefono)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar un número de teléfono',
            footer: 'El máximo permitido es de 9 caracteres'
          });
          return false;
    } else if (nacimiento.length !== 10) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar una fecha de nacimiento',
            footer: 'ingresar día/mes/año'
          });
          return false;
    } else if(hombre === false && mujer === false && otro === false) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar su sexo',
            footer: 'Puedes ingresar hombre, mujer u otro'
          });
          return false;
    } else if (mayor === false) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes ingresar si eres mayo de 18 años',
            footer: 'El registro es sólo para mayores de edad'
          });
          return false;
    
   
    }        
}