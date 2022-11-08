//CRUP   - Metodos HTPP //estos metodos tenemos para hacer generar estas acciones
//Create - POST
//Read   - GET
//Update - PUT/PATCH
//Delete - DELETE

const listaProductos = () =>{
    return fetch("http://localhost:3000/producto").then(respuesta =>{
        return respuesta.json(); //toma GET con solo fetch
    });
};

export const productosServices = {
    listaProductos,
};