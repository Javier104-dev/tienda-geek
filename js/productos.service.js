//CRUP   - Metodos HTPP //estos metodos tenemos para hacer generar estas acciones
//Create - POST
//Read   - GET
//Update - PUT/PATCH
//Delete - DELETE
//toma GET con solo fetch

/* una forma de hacerlo
const listaProductos = () =>{
    return fetch("http://localhost:3000/producto").then(respuesta =>{
        return respuesta.json(); //toma GET con solo fetch
    });
};
*/
const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json()); //forma resumida


const crearProducto = (imagen, categoria, nombre, precio, descripcion) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen, categoria, nombre, precio, descripcion, id: uuid.v4()})
    })
};

export const productosServices = {
    listaProductos,
    crearProducto,
};


