//FORMULARIO PARA SOLICITAR LA CANTIDAD DE PRODUCTOS A INGRESAR

let formCantProductos = document.createElement("form");
formCantProductos.style.padding = "10px";
formCantProductos.style.margin = "10px";

formCantProductos.innerHTML = `
Indique la cantidad de productos a ingresar:
<input id="cantProductos" placeholder = "Ingrese un numero" type="number"></input>
<button type='submit'>Aceptar</button>
`;

document.body.appendChild(formCantProductos);

formCantProductos.onsubmit = function(event){
    event.preventDefault();
    const input = document.getElementById("cantProductos").value;
    document.body.removeChild(formCantProductos);
    for(let index = 0; index < input; index++){
        ejecutarFormulario();
    }
}



// *******************************************************
// CLASSES
// *******************************************************
class Producto {
    constructor(products){
        this.nombre = products.nombre;
        this.precio = products.precio;
        this.cantidad = products.cantidad;
    }
}


// *******************************************************
// FUNCTIONS
// *******************************************************
function ejecutarFormulario() {
    let formProductosInput = document.createElement("form");
    formProductosInput.style.padding = "10px";
    formProductosInput.style.margin = "10px";
    formProductosInput.innerHTML = `
    <input placeholder = "Ingrese el nombre del producto" type="text"></input>
    <input placeholder = "Ingrese el precio del producto" type="number"></input>
    <input placeholder = "Ingrese las unidades a comprar" type="number"></input>
    <button type='submit'>Agregar</button>
    `;
    document.body.appendChild(formProductosInput);

    const productos = [];

    formProductosInput.onsubmit = function(event){
        event.preventDefault();
        const inputs = event.target.children;
        productos.push(new Producto({ nombre: inputs[0].value, precio: inputs[1].value, cantidad: inputs[2].value }));
        crearProducto(productos);
        document.body.removeChild(formProductosInput);
    }
}


function crearProducto(productos) {
    let div = document.createElement('div');
    div.style.border = "2px solid red";
    div.style.margin = "5px";
    div.style.padding = "10px";
    for(producto of productos){
        div.innerHTML = `
            <p>Producto: ${producto.nombre}</p>
            <p>Precio: $${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>
        `;
    }
    document.body.appendChild(div);
}