const campos = document.querySelectorAll("[required]")
console.log(campos)

function customValidation(event){
    const campos = event.target

    if(campos.validity)
    function VerificarErro(){
        let foundError = false;


        for(error of campos.validity){
            
            if(error != "customError" && field.validity[error]){
                field.validity[error]
                foundError = true
            }
        }

        return foundError;
    }
    const error = VerificarErro()
    console.log("Error Exists: ", error)

    if(error){
        campos.setCustomValidity("Campo Obrigatório")
    }else{
        campos.setCustomValidity("")
    }
    campos.setCustomValidity("Campo Obrigatório")
}

for(campos of campos){
    campos.addEventListener("invalid", customValidation)
}




