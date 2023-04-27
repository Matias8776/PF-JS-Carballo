const modal = document.querySelector('.modal');
const abrirModal = document.getElementById('carrito')
const cerrarModal = document.getElementById('cerrarModal')
const modalCarrito = document.querySelector('.modalCarrito')
const confirmarCompra = document.querySelector('.confirmar')

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

confirmarCompra.addEventListener('click', () => {
    if (carrito.length === 0) {
        Toastify ({
            text: 'Ingrese productos en el carrito primero',
            duration: 2000,
            gravity: 'bottom',
            position: 'center',
            style: {
                background: 'rgba(11, 72, 92, 0.9)',
                border: '1px solid lightblue',
                'border-radius': '5px'
            }
        }).showToast()
    } else {
        carrito = []
        pintarCarrito(carrito)
        actualizarCarrito(carrito)
        localStorage.clear()
        modal.classList.toggle('activarModal')
        Swal.fire({
            icon: 'success',
            title: 'Felicidades!',
            text: 'Su compra ha sido realizada con exíto',
            showClass: {
                popup: 'animate__animated animate__backInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__backOutUp'
            }
        })
    }
})