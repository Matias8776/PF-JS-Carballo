let carrito = []

const contenedorProductos = document.getElementById('contenedor')

contenedorProductos.addEventListener('click', (e) => {
    if (e.target.classList.contains('alCarrito')) {
        validar(e.target.id)
    }
})

const validar = (id) => {
    const repetido = carrito.some(producto => producto.id == id)

    if (!repetido) {
        const producto = productos.find(producto => producto.id == id)
        carrito.push(producto)
        pintarProducto(producto)
    } else {
        const existe = carrito.find(producto => producto.id == id)
        const cantidad = document.getElementById(`cantidad${existe.id}`)
        existe.cantidad++
        cantidad.innerText = `Cantidad: ${existe.cantidad}`
        actualizarCarrito(carrito)
    }
}

const pintarProducto = (producto) => {
    const contenedor = document.getElementById('contenedorCarrito')
    const div = document.createElement('div')
    div.classList.add('enCarrito')
    div.innerHTML = `
        <p>${producto.nombre}</p>
        <p>Precio: $${producto.precio}</p>
        <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
        <input type="image" src="../assets/img/eliminar.png" class="eliminar" value="${producto.id}"/>
    `
    contenedor.appendChild(div)
    actualizarCarrito(carrito)
}

const actualizarCarrito = (carrito) => {
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const compraTotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
    pintarTotales(cantidadTotal, compraTotal)
    guardarCarrito(carrito)
}

const pintarTotales = (cantidadTotal, compraTotal) => {
    const contador = document.querySelector('.contador')
    const total = document.querySelector('.total')

    contador.innerText = cantidadTotal
    total.innerText = compraTotal
}

const eliminar = (id) => {
    const index = carrito.findIndex(producto => producto.id == id)
    console.log(index);
    carrito.splice(index, 1)
    pintarCarrito(carrito)
    actualizarCarrito(carrito)
}

const pintarCarrito = (carrito) => {
    const contenedor = document.getElementById('contenedorCarrito')

    contenedor.innerHTML = ''

    carrito.forEach(producto => {
        const div = document.createElement('div')
        div.classList.add('enCarrito')
        div.innerHTML = `
            <p>${producto.nombre}</p>
            <p>Precio: $${producto.precio}</p>
            <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
            <input type="image" src="../assets/img/eliminar.png" class="eliminar" value="${producto.id}"/>
        `
        contenedor.appendChild(div)
    });
}

const guardarCarrito = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const obtenerCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem('carrito'))
    return carrito
}

if (localStorage.getItem('carrito')) {
    carrito = obtenerCarrito()
    pintarCarrito(carrito)
    actualizarCarrito(carrito)
}

