import { productosServices } from "../productos.service.js";

const contenedorSimilares = document.querySelector(".categorias__produtos");

const div = (imagen, nombre, precio, id) =>{

    const crearDiv = document.createElement("div");
    crearDiv.classList.add("categorias__produto");

    const contenidoDiv = 
    `
    <img class="foto__producto" src="${imagen}" alt="taza star-war">
    <span class="categorias_producto__nombre">${nombre}</span>
    <span class="categorias_producto__precio">$ ${precio}</span>
    <span><a class="categorias_producto__ver" href="ver-producto.html?id=${id}">Ver Producto</a></span>
    `
    crearDiv.innerHTML = contenidoDiv;
    return crearDiv;
};

const exponerProducto = async () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id === null){
        console.log("crear pagian error")
    };

    try{
        const producto = await productosServices.verProducto(id);
        const divColor = producto.id
        const categoria = producto.categoria;

        if(categoria){
            productosServices.listaProductos().then((productos)=>{
                productos.forEach((producto) => {
                    if(producto.categoria === categoria && producto.id != divColor){ //aqui digo que no incluya al id del producto
                        const nuevoDiv = div(producto.imagen, producto.nombre, producto.precio, producto.id)
                        contenedorSimilares.appendChild(nuevoDiv)

                    }else if(producto.id === divColor){ //aqui agrego el div del producto a mostrar y le agrego un orde -1 para que este primero, tambien puedo ocultarlo
                        const nuevoDiv = div(producto.imagen, producto.nombre, producto.precio, producto.id)
                        nuevoDiv.style.order ="-1"
                        // nuevoDiv.style.display ="none"
                        contenedorSimilares.appendChild(nuevoDiv)
                    }
                });
            });
        }else{
            throw new Error();
        }
    }catch(error) {alert("Ocurrio un error")};
};

exponerProducto()

// productosServices.listaProductos().then((productos)=>{


//     productos.forEach((producto) => {
//         if(producto.categoria === "consola"){
//             const nuevoDiv = div(producto.imagen, producto.nombre, producto.precio, producto.id)
//             contenedorSimilares.appendChild(nuevoDiv)
//         }
//     });
// });

