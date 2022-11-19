const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener("click",()=>{
    const $input = document.querySelector("[data-input-busqueda]").value;
    const urlPagina = window.location; 
    const inputParametro = new URLSearchParams(urlPagina.search);; //tambien se puede usar el $input
    
    urlPagina.href = `?id=${$input}`;

    var price = inputParametro.get('id');
    //con get buscamos en searchParams y obtenemos el id
    console.log(price)
    //urlPagina.href = `?${$input}`; //agregamos el input a la direccion
    
})
