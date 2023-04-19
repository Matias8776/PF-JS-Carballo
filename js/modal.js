const modal = document.querySelector('.modal');
const abrirModal = document.getElementById('carrito')
const cerrarModal = document.getElementById('cerrarModal')
const modalCarrito = document.querySelector('.modalCarrito')

abrirModal.addEventListener('click', () => {
    modal.classList.toggle('activarModal')
})

cerrarModal.addEventListener('click', () => {
    modal.classList.toggle('activarModal')
})

modal.addEventListener('click', () => {
    cerrarModal.click()
})

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation()

    if (e.target.classList.contains('eliminar')) {
        eliminar(e.target.value)
    }
})