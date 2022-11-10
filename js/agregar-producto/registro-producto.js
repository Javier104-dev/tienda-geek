import { productosServices } from "../productos.service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit",(evento) => {
    evento.preventDefault();

    const imagen = document.querySelector("[data-imagen]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    
    productosServices.crearProducto(imagen, categoria, nombre, precio, descripcion).then(() => {
        window.location.href = "./todos-los-productos.html";
    }).catch(error => console.log(error))
});



//document.getElementById('submit').files.item(0).getAsDataURL();