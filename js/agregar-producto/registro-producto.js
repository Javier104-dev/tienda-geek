import { productosServices } from "../productos.service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit",(evento) => {
    evento.preventDefault();
    //document.getElementById("file-id").files[0].name; 
    //document.querySelector("[data-imagen]").value;
    // obtener nombre const imagen = document.querySelector("[data-imagen]").files[0].name;
    const imagen = document.querySelector("[data-imagen]").value; //concatenamos el nombre
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    
    productosServices.crearProducto(imagen, categoria, nombre, precio, descripcion).then(() => {
        window.location.href = "./todos-los-productos.html";
    }).catch(error => console.log(error))
});



//document.getElementById('submit').files.item(0).getAsDataURL();