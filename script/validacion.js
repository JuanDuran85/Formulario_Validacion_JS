window.onload = function() 
{
    let formulario = document.getElementById("formulario");
    let submit = document.getElementById("enviar");
    submit.addEventListener("click", function(event)
    {
        date.dateFormat = new Date
        (
            document.getElementById("ano").value,
            document.getElementById("mes").value - 1,
            document.getElementById("dia").value
        );
        event.preventDefault();
        valCampo(name);
        valCampo(phone);
        valDate(date);
    });
    let name = 
    {
        dom: document.getElementById("nombre"),
        maxLength: 30,
        regex: /[A-Za-z\u00C0-\u00ff\s]+/,
        element: 'nombre'
    }
    let phone = 
    {
        dom: document.getElementById("telefono"),
        maxLength: 15,
        regex: /[\d\s]+/,
        element: 'telefono'
    }
    let date = 
    {
        day: document.getElementById("dia"),
        month: document.getElementById("mes"),
        year: document.getElementById("ano"),
        maxLength: 7,
        regex: /[\d\s]+/,
        element: 'fecha de nacimiento' 
    }

    let valCampo = function(objeto)
    {
        if(objeto.dom.value == "")
        {
            console.log("el "+objeto.element+" está vacio");
        }
        else if(!objeto.regex.test(objeto.dom.value))
        {
            console.log("el "+objeto.element+" esta mal escrito");
        }
        else if(objeto.dom.value.length > objeto.maxLength)
        {
            console.log("el "+objeto.element+" supera los "+objeto.maxLength+" caracteres.");
        }
    }

    let valDate = function(date)
    {
        if(date.day.value == "" || date.month.value == "" || date.year.value == "")
        {
            console.log("la "+date.element+" está vacia");
        }
        else if ((date.dateFormat.getUTCMonth() != date.month.value - 1) || (
            date.dateFormat.getUTCDate() != date.day.value) || (
            date.dateFormat.getUTCFullYear() != date.year.value))
        {
            console.log("la "+date.element+" no existe");
        }

    }

   
   

}

