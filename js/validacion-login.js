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

const boton = document.querySelector("[data-boton-login]");
const login = document.querySelector("#login__correo");
const contraseñaInput = document.querySelector("#login__contraseña");

const correo = "login1@hotmail.com";
const contraseña = "Login123";

boton.addEventListener("click", (evento) =>{
    evento.preventDefault();
    if(login.value.trim() === "" && contraseñaInput.value.trim() === ""){
        boton.parentElement.querySelector(".mensaje-error-boton").textContent = "Ingresa tu correo y contraseña";

    }else if((login.value === "login1@hotmail.com") && (contraseñaInput.value === "Login123")){
        window.location.href= "./todos-los-productos.html";

    }else{
        boton.parentElement.querySelector(".mensaje-error-boton").textContent = "Correo o contraseña incorrecta"
    }
})