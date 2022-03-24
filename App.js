// Eventos Dom (Document Object Model)
document
.getElementById("producto-formulario") 
.addEventListener("submit", function (evento) {
// evaluar el comportamiento del formulario

evento.preventDefault(); //preventDefault para guardar sin refrescar en la pagina

//Obtener los valores del formulario

const nombre= document.getElementById("nombre").ariaValueMax,
    precio = document.getElementById("precio").ariaValueMax,
    año = document.getElementById("año").values;

// Crear un nuevo objeto "producto"
const producto = new Produc (nombre, precio, año);

//crear un nuevo usuario de interfaz
const ui = new UI();

//Input de validación de usuario
if (nombre === "" || precio === "" || año === ""){
    ui.showMessage("Por favor insertar datos");
}

//Guardar producto 
ui.addProduct(producto);
ui.showMessage("Producto agregado");
ui.resetForm();
});

document.getElementById("producto-lista").addEventListener("click", (e) => {
    const ui = new UI();
    ui.deleteProducto(e.target);
    e.preventDefault();
})

//clase producto

class Producto {
    constructor(nombre, precio, año){
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }
}

// Clase Usuario interfaz

class UI {
    addProducto(producto){
        const productoLista = document.getElementById("producto-lista");
        const elemento = document.createElement("div");
        elemento.innerHTML = `
        <div class="tarjeta texto margen4">
          <div class="tarjeta-body">
            <strong>Producto</strong> : ${producto.nombre} -
            <strong>Precio</strong> : ${producto.precio} -
            <strong>Año</strong> : ${producto.año} -
        <a href="#" class="btn btn-error" name="eliminar">Eliminar</a>
    </div>
</div>
        `;

        productoLista.appendChild(element); // = objeto hijo

        }

         //resetear valores de formulario 
         resetForm(element){
            document.getElementById("formulario-producto").reset();

        }

        deleteProducto(elemento){
            if (elemento.nombre === "eliminar"){
                element.parentElement.parentElement.remove();
                this.showMessage("El producto se a eliminado")
            }
    }

    showMessage(mensaje, cssClass){
        const div = document.createElement("div");
        div.calssName = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(me));

        //Mostrar en el DOM

        const contenido = document.qurySelector(".container");
        const app = document.querySelector("#App");

        //Insertar mensaje en el interfaz usuario

        container.insertBefore(div, app);

        //Remover el mensaje luego de tres segundos

        setTimeout(function (){
            document.querySelector(".alert").remove();
        }, 3000);
        
    }
}