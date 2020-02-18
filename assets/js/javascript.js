function validando ()
{
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;

    if (nombre === "" || apellido === "" || telefono === "" || dia === "" || mes === ""|| ano === ""){
        alert("todos los campos son obligatorios");
        return false;
    }

    else if (nombre.length > 10){
        alert("nombre demasiado largo");
        return false;
    }

    else if (apellido.length > 20){
        alert("apellido demasiado largo");
        return false;
    }

    else if (telefono.length > 9){
        alert ("el telefono debe ser de 9 digitos");
        return false;
    }

    else if (isNaN(telefono)){
        alert("telefono debe ser solo digitos");
        return false;
    }

    else if (isNaN(dia)){
        alert("fecha en digitos porfavor");
        return false;
    }
    else if (dia.length > 2 ){
        alert("dia muy largo");
        return false;
    }
    else if (isNaN(mes)){
        alert("fecha en digitos porfavor");
        return false;
    }

    else if (mes.length > 2){
        alert("mes muy largo");
        return false;
    }

    else if (isNaN(ano)){
        alert("fecha en digitos porfavor");
        return false;
    }
    else if (ano.length > 4){
        alert("year muy largo");
        return false;
    }

    else(Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 2500
      }))


}