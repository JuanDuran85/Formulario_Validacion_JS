window.onload = function() 
{
    let formulario = document.getElementById("formulario");
    let submit = document.getElementById("enviar");
    submit.addEventListener("click", function(event)
    {
        event.preventDefault();

        date.dateFormat = new Date
        (
            document.getElementById("ano").value,
            document.getElementById("mes").value - 1,
            document.getElementById("dia").value
        );
        
        valCampo(name);
        valCampo(phone);
        valDate(date);
        valGender(gender);
        valAdulthood(adulthood);
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

    let gender = 
    {
        male: document.getElementById("masculino"),
        female: document.getElementById("femenino"),
        other: document.getElementById("otro"),
    }

    let adulthood = document.getElementById("mayor");

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

    let valGender = function(gender)
    {
        switch (true)
        {
            case gender.male.checked:
                console.log("Elegiste género masculino");
                break;
            case gender.female.checked:
                console.log("Elegiste género femenino");
                break;
            case gender.other.checked:
                console.log("Elegiste otro género");
                break;
            default:
                console.log("No elegiste género");
        }
    }
   
   let valAdulthood = function(checkbox)
   {
       if(checkbox.checked)
       {
           console.log("Uy pero que adulto eres :D");
       }
       else
       {
           console.log("anoperokepony");
       }
   }

}

