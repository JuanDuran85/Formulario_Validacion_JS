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
    
    let errorCount = 0;
    let name = {
        dom: document.getElementById("nombre"),
        maxLength: 30,
        regex: /[A-Za-z\u00C0-\u00ff\s]+/,
        errorID: document.getElementById("error-nombre")
    }
    let phone = {
        dom: document.getElementById("telefono"),
        maxLength: 15,
        regex: /[\d\s]+/,
        errorID: document.getElementById("error-telefono")
    }
    let date = {
        day: document.getElementById("dia"),
        month: document.getElementById("mes"),
        year: document.getElementById("ano"),
        errorID: document.getElementById("error-fecha") 
    }

    let gender = {
        male: document.getElementById("masculino"),
        female: document.getElementById("femenino"),
        other: document.getElementById("otro"),
        errorID: document.getElementById("error-genero") 
    }

    let adulthood = {
        dom: document.getElementById("mayor"),
        errorID: document.getElementById("error-checkbox") 
    }
    

    let valCampo = function(objeto)
    {
        let errorDiv = objeto.errorID;
        errorDiv.style.display = "none";
        errorCount = 0;
        if(objeto.dom.value == "")
        {
            //console.log("No puedes dejar el "+objeto.element+" vacío.");
            errorCount++;
            errorDiv.style.display = "block";
        }
        else if(!objeto.regex.test(objeto.dom.value))
        {
            //console.log("el "+objeto.element+" esta mal escrito");
            errorCount++;
            errorDiv.style.display = "block";
        }
        else if(objeto.dom.value.length > objeto.maxLength)
        {
            //console.log("el "+objeto.element+" supera los "+objeto.maxLength+" caracteres.");
            errorCount++;
            errorDiv.style.display = "block";
        }
    }

    let valDate = function(date)
    {
        let errorDiv = date.errorID;
        errorDiv.style.display = "none";
        errorCount = 0;
        if(date.day.value == "" || date.month.value == "" || date.year.value == "")
        {
            //console.log("la "+date.element+" está vacia");
            errorCount++;
            errorDiv.style.display = "block";
        }
        else if ((date.dateFormat.getUTCMonth() != date.month.value - 1) || (
            date.dateFormat.getUTCDate() != date.day.value) || (
            date.dateFormat.getUTCFullYear() != date.year.value))
        {
            //console.log("la "+date.element+" no existe");
            errorCount++;
            errorDiv.style.display = "block";
        }

    }

    let valGender = function(gender)
    {
        let errorDiv = gender.errorID;
        errorDiv.style.display = "none";
        errorCount = 0;
        switch (true)
        {
            case gender.male.checked:
                //console.log("Elegiste género masculino");
                break;
            case gender.female.checked:
                //console.log("Elegiste género femenino");
                break;
            case gender.other.checked:
                //console.log("Elegiste otro género");
                break;
            default:
                errorCount++;
                errorDiv.style.display = "block";
                //console.log("No elegiste género");
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

