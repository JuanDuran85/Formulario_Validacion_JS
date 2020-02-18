function validate() {    
            var names = document.getElementById("names").value;
            var secondnames = document.getElementById("secondnames").value;
            var day = document.getElementById("dia").value;         
            var month = document.getElementById("mes").value;
            var year = document.getElementById("ano").value;
            var valorfecha = new Date(day, month, year);  
            // var sex = document.getElementById("sexo").value;
            // var old = document.getElementById("mayor").value;
            var email = document.getElementById("email").value;
            var phone= document.getElementById("phone").value;
            var username = document.getElementById("username").value;
            var pass = document.getElementById("password").value;    
            
            valid_email = /\w+@\w+\.+[a-z]/;  // declaramos una expresion regular para validar el campo correo electrónico

         

            if (names==="" || secondnames==="" || email==="" || username ==="" || pass==="" ||  phone==="" ) {
                alert("Rellene todos los campos solicitados.");   
                return false;            
            }
            else if (names.length>30) {
                alert("Los nombres deben tener un máximo de 30 caracteres");
                return false;
            }
            else if (secondnames.length>80) {
                alert("Los apellidos deben tener un máximo de 80 caracteres");
                return false;
            }
            else if(isNaN(valorfecha)) {
                alert("Fecha no válida");
                return false;
            }
            else if(!document.querySelector('input[name="sexo"]:checked')) { 
                alert('Error, rellene el campo sexo');    
                return false;            
                }
            else if (email>100) {
                alert("El email debe tener un máximo de 100 caracteres");
                return false;
            }
            else if (!valid_email.test(email)){
                alert("El email no es válido");
                return false;
            }
            else if (username>20) {
                alert("El usuario debe tener un máximo de 20 caracteres")
                return false;
            }
            else if (pass<8 && pass>12) {
                alert("La contraseña debe contener entre 8 y 12 caracteres");
                return false;
            }
            var gretting ="Bienvenido " + secondnames + ", "+names+" Usuario: " +username + " Contraseña: " +pass ;

            alert(gretting);
        }
   

