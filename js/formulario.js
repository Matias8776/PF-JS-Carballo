const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(e) {
        e.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_3p4ldzj';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviado';
                Swal.fire({
                    icon: 'success',
                    title: 'Felicidades!',
                    text: 'Su mensaje ha sido enviado con exíto',
                    showClass: {
                        popup: 'animate__animated animate__backInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__backOutUp'
                    }
                })
            }, (err) => {
                btn.value = 'Enviar';
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: JSON.stringify(err),
                    showClass: {
                        popup: 'animate__animated animate__backInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__backOutUp'
                    }
                })
            });
});