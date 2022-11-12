import { productosServices } from "../productos.service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () =>{ //async
    const url = new URL(window.location);
    const id = url.searchParams.get("id");//con get buscamos en searchParams y obtenemos el id

    if (id === null){
        console.log("crear pagian error")
    }
    
    const imagen = document.querySelector("[data-imagen]");
    const categoria = document.querySelector("[data-categoria]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

    try{
        const producto = await productosServices.verDatosProducto(id);
        if((producto.categoria && producto.nombre) && (producto.precio && producto.descripcion)){

            imagen.value = producto.imagen;
            categoria.value = producto.categoria;
            nombre.value = producto.nombre;
            precio.value = producto.precio;//forma mas reciente de esperar respuestas de promesas
            descripcion.value = producto.descripcion;
        }else{
            throw new Error();
        }
    }catch (error) {
        alert("Hubo un error"); //en caso de error
        /*window.location.href = "pagina de error"*///tambien podemos redireccionar a otra pagina
    }
};

/*
    productosServices.detallesProducto(id).then((perfil) =>{
        categoria.value = perfil.categoria;
        nombre.value = perfil.nombre;
        precio.value = perfil.precio;
        descripcion.value = perfil.descripcion;
    });
*/

obtenerInformacion();

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");//con get buscamos en searchParams y obtenemos el id

    const imagen = document.querySelector("[data-imagen]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    productosServices.actualizarProducto(imagen, categoria, nombre, precio, descripcion, id).then(()=>{
        window.location.href = "./todos-los-productos.html";
    })
});