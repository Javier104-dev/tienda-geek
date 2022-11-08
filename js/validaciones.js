const camposInput = document.querySelectorAll(".campo-validar");


camposInput.forEach( (input) => {
    input.addEventListener("blur", (input) =>{
        validaciones(input.target);
    })
})

const validaciones = (input) => {
    const tipoData = input.dataset.tipo;

    if(input.validity.valid){
        input.classList.remove("error");
        input.parentElement.querySelector(".contacto__mensaje__error").innerHTML = "";
        
    }else{
        input.classList.add("error");
        input.parentElement.querySelector(".contacto__mensaje__error").innerHTML =
        mensajeErrores(tipoData, input);
    }
}

const tipoErrores = ["valueMissing", "patternMismatch"];

const mensajeDeError = {
    nombre: {
        valueMissing: "*Por favor escribe tu nombre",
        patternMismatch: "*Tu nombre debe tener menos de 40 caracteres",
    },
    mensaje: {
        valueMissing: "*Debes escribir un mensaje",
    }
}

const mensajeErrores = (tipoData, input) => {
    let mensaje = "";
    tipoErrores.forEach( (error) => {
        if(input.validity[error]){
            mensaje = mensajeDeError[tipoData][error]
        }
    } );
    return mensaje;
}