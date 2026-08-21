const productoImagen = document.getElementById("productoImagen");
const productoCategoria = document.getElementById("productoCategoria");
const productoNombre = document.getElementById("productoNombre");
const productoPrecio = document.getElementById("productoPrecio");
const productoDescripcion = document.getElementById("productoDescripcion");

const disminuirCantidad = document.getElementById("disminuirCantidad");
const aumentarCantidad = document.getElementById("aumentarCantidad");
const cantidadProducto = document.getElementById("cantidadProducto");

const agregarCarrito = document.getElementById("agregarCarrito");
const agregarFavorito = document.getElementById("agregarFavorito");


let productoActual = null;
let cantidad = 1;

const parametros = new URLSearchParams(window.location.search);
const productoId = parametros.get("id");

async function cargarProducto() {
    try {
        const respuesta = await fetch("../data/productos.json");
        const productos = await respuesta.json();
        productoActual = productos.find(
            producto => producto.id === productoId
        );
        if (!productoActual) {
            console.error("Producto no encontrado.");
            return;
        }
        mostrarProducto(productoActual);
    } catch (error) {
        console.error(
            "Error al cargar el producto:",
            error
        );
    }
}

function mostrarProducto(producto) {
    productoImagen.src = producto.imagen;
    productoImagen.alt = producto.nombre;
    productoCategoria.textContent =
        producto.categoria;
    productoNombre.textContent =
        producto.nombre;
    productoPrecio.textContent =
        `$${producto.precio.toLocaleString("es-MX")} MXN`;
    productoDescripcion.textContent =
        producto.descripcion;
}

aumentarCantidad.addEventListener(
    "click",
    () => {
        cantidad++;
        cantidadProducto.textContent =
            cantidad;
    }
);


disminuirCantidad.addEventListener(
    "click",
    () => {
        if (cantidad > 1) {
            cantidad--;
            cantidadProducto.textContent =
                cantidad;
        }
    }
);


agregarCarrito.addEventListener(
    "click",
    () => {
        if (!productoActual) return;
        console.log(
            "Producto agregado:",
            productoActual.nombre,
            "Cantidad:",
            cantidad
        );
    }
);

agregarFavorito.addEventListener(
    "click",
    () => {
        agregarFavorito.classList.toggle(
            "activo"
        );
    }
);

cargarProducto();