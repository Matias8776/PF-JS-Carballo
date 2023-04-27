const pintarProductos = async () => {
    const contenedor = document.getElementById("contenedor");
    const productos = await getProducts()
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('cards');
        div.innerHTML += `<div class="card">
                            <div>
                                <h2 class="titulo">${producto.nombre}</h2>
                            </div>
                            <div>
                                <img src="${producto.imagen}" class="img">
                            </div>
                            <div>
                                <h3 class="descripcion" >${producto.descripcion}</h3>
                            </div>
                            <br>
                            <div class="precio">$${producto.precio}</div>
                            <br>
                            <div class="cajaCarrito">
                            <button id=${producto.id} class="alCarrito">Agregar al carrito</button>
                            <br>
                        </div>
                        `
        contenedor.appendChild(div);
    });
};
