
(function(){
    var botonEnviarForm = document.getElementById('botonEnviarForm');
    botonEnviarForm.onclick = validar;
}());


function validar(){
    var formulario = document.getElementById("formularioRegistro");
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var correo = document.getElementById('correo').value;
    var usuario = document.getElementById('usuario').value;
    var pass = document.getElementById('pass').value;
    var telefono = document.getElementById('telefono').value;
    
    //*************************** nombre
    if (nombre.length == 0 ){
        alert("Debe ingresar Nombre");
        return false
    }else if(nombre.length > 30){
        alert("Ingresar máximo 30 caractéres.");
        return false
    }//*************************** apellidos
    else  if (apellidos.length == 0 ){
        alert("Debe ingresar Apellidos");
        return false
    }else  if (apellidos.length > 80 ){
        alert("Ingresar máximo 80 caractéres.");
        return false
    }//*************************** correo
    else  if (correo.length == 0 ){
        alert("Debe ingresar Correo");
        return false
    }else  if (correo.length > 100 ){
        alert("Ingresar máximo 80 caractéres.");
        return false
    }else  if (validarCorreo(correo) == false){
        alert("Correo no válido2.");
        return false
    }//*************************** usuario
    else  if (usuario.length == 0 ){
        alert("Debe ingresar Usuario");
        return false
    }else  if (usuario.length > 20 ){
        alert("Ingresar máximo 20 caractéres.");
        return false
    }//*************************** pass
    else  if (pass.length == 0 ){
        alert("Debe ingresar Contraseña");
        return false
    }else  if (pass.length > 15 ){
        alert("Ingresar máximo 15 caractéres.");
        return false
    }//*************************** telefono
    else  if (telefono.length == 0){
        alert("Debe ingresar Teléfono");
        return false
    }else  if (telefono.length > 15){
        alert("Ingresar máximo 15 caractéres.");
        return false
    }//*************************** 
    else{
        alert("Bienvenido " + nombre + " " + apellidos);
        formulario.submit();
        return true;
    }
}




function validarCorreo(esteCorreo){
    
    var arrayEsteCorreo = esteCorreo.split("");

    var contieneArroba = arrayEsteCorreo.some(function(letra){
        return letra == '@'
    });
    if (contieneArroba == false){
        return false;
    }
   
    var arrobaIndex = arrayEsteCorreo.findIndex(function(letra){
        return letra == '@'
    });

    var restoCorreo = esteCorreo.substring(arrobaIndex + 1, esteCorreo.length-1);
    var arrayRestoCorreo = restoCorreo.split("");

    var contieneArroba2 = arrayRestoCorreo.some(function(letra){
        return letra == '@'
    });
    if (contieneArroba2){
        alert(arrayRestoCorreo);
        return false;
    }else{
        var contienePuntoPostArroba = arrayRestoCorreo.some(function(letra){
            return letra == '.'
        });
        if (contienePuntoPostArroba == false){
            return false;
        }
    }
}





