const productosGrid = document.getElementById("productosGrid");

async function cargarProductos() {
    try {
        const respuesta = await fetch("../data/productos.json");
        const productos = await respuesta.json();
        mostrarProductos(productos);
    } catch (error) {
        console.error("Error al cargar los productos:", error);
    }
}


function mostrarProductos(productos) {
    productosGrid.innerHTML = "";
    productos.forEach(producto => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("producto-card");
        tarjeta.innerHTML = `
            <a href="producto.html?id=${producto.id}"
                class="producto-card__link">
                <div class="producto-card__imagen">
                    <img
                        src="${producto.imagen}"
                        alt="${producto.nombre}">
                    <button
                        class="producto-card__favorito"
                        type="button"
                        aria-label="Agregar ${producto.nombre} a favoritos">
                        ♡
                    </button>
                </div>
                <div class="producto-card__info">
                    <p class="producto-card__categoria">
                        ${producto.categoria}
                    </p>
                    <h3 class="producto-card__nombre">
                        ${producto.nombre}
                    </h3>
                    <span class="producto-card__precio">
                        $${producto.precio.toLocaleString("es-MX")} MXN
                    </span>
                </div>
            </a>
        `;
        productosGrid.appendChild(tarjeta);
    });
}


cargarProductos();