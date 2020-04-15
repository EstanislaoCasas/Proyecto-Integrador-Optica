window.addEventListener("load", function(){

    let formulario = document.querySelector("form.addp");

    console.log(formulario);

    
  

    
    let errors = [];
    
    formulario.addEventListener("submit", function(e) {
        
        

        let campoNombre = document.querySelector("input.name");
        console.log(campoNombre.value);
        if (campoNombre.value == ""){
           
            errors.push("El nombre del producto no puede estar vacio");
            e.preventDefault();
        }else if(campoNombre.value.length <5) {
            errors.push("El nombre del producto tiene que tener minimo  5 caracteres");
            e.preventDefault();
            
        }



        let campoDescripcion = document.querySelector("input.description");


        if (campoDescripcion.value == ""){
           
            errors.push("La descripcion no puede estar vacia");
            e.preventDefault();
        }else if(campoDescripcion.value.length <20) {
            errors.push("La descripcion  tiene que tener minimo 20 caracteres");
            e.preventDefault();
            
        } 

        let campoPortada = document.querySelector("input.img1");
        if (campoPortada.value == ""){
           
            errors.push("Se necesita un link de una imagen para la portada");
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