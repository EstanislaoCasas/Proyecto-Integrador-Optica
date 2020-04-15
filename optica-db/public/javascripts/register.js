
  function fileValidation(){
    var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        alert('Solo se permite archivos .jpeg/.jpg/.png/.gif ');
        fileInput.value = '';
        return false;
    }
}


window.addEventListener("load", function(){

    let formulario = document.querySelector("form.registro");

    console.log(formulario);

    
  

    
    let errors = [];
    
    formulario.addEventListener("submit", function(e) {
        
        

        let campoNombre = document.querySelector("input.firstname");
        console.log(campoNombre.value);
        if (campoNombre.value == ""){
           
            errors.push("El nombre no puede estar vacio");
            e.preventDefault();
        }else if(campoNombre.value.length <2) {
            errors.push("El nombre tiene que tener minimo  2 letras");
            e.preventDefault();
            
        }



        let campoApellido = document.querySelector("input.lastname");


        if (campoApellido.value == ""){
           
            errors.push("El Apellido no puede estar vacio");
            e.preventDefault();
        }else if(campoApellido.value.length <2) {
            errors.push("El apellido tiene que tener minimo 2 letras");
            e.preventDefault();
            
        } 

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