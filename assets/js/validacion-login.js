const inputs = document.querySelectorAll(".login_input");


inputs.forEach( (input) => {
    input.addEventListener("blur", (input) =>{
        validacionesLogin(input.target);
    })
})

const validacionesLogin = (input) => {
    const tipoData = input.dataset.tipo;

    if(input.validity.valid){
        input.classList.remove("input-error");
        input.parentElement.querySelector(".mensaje-error").innerHTML = "";
        
    }else{
        input.classList.add("input-error");
        input.parentElement.querySelector(".mensaje-error").innerHTML =
        mostrarMensajeDeError(tipoData, input);
    }
}

const tipoDeErrores = ["valueMissing", "patternMismatch"];

const tipoDeMensaje = {
    correo: {
        valueMissing: "Por favor escribe tu correo",
        patternMismatch: "El correo debe tener un formato valido ejemplo@correo.com",
    },
    contraseña: {
        valueMissing: "Por favor ingresa tu contraseña",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    },
};

const mostrarMensajeDeError = (datas, input) => {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]){
            mensaje = tipoDeMensaje[datas][error];
        }
    });
    return mensaje;
};
