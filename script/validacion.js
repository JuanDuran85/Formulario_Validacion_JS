window.onload = function() 
{
    let formulario = document.getElementById("formulario");
    let submit = document.getElementById("enviar");
    submit.addEventListener("click", function(event)
    {
        event.preventDefault();
        valCampo(name);
    });
    let name = 
    {
        dom: document.getElementById("nombre"),
        maxLength: 30,
        regex: /[A-Za-z\u00C0-\u00ff\s]+/,
        element: 'nombre'
    }
    let valCampo = function(objeto)
    {
        console.log(objeto)
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

