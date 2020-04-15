window.addEventListener("load", function(){

    let formulario = document.querySelector("form.login");

    console.log(formulario);

    
  

    
    let errors = [];
    
    formulario.addEventListener("submit", function(e) {
        
        

        




        let campoMail = document.querySelector("input.email");
        if (campoMail.value == ""){
           
            errors.push("Se necesita una direccion de mail");
            e.preventDefault();
        }


        let campoPassword = document.querySelector("input.password");

        if(campoPassword.value.length <8) {
            errors.push("La contraseña tiene que tener 8 caracteres");
            e.preventDefault();
            
        } 


        

       // console.log(ulErrores);
        
        if(errors.length >0){

            let ulErrores = document.getElementById("errores");

            for (let i = 0; i < errors.length; i++) {
                
                ulErrores.innerHTML +=  "<li>" + errors[i] + "</li>";
            }
            
        }
            
     //   console.log(errors);



    })
    
    

} 

















)