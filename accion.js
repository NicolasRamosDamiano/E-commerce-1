document.addEventListener('DOMContentLoaded', function() {
    const cartBtns = document.querySelectorAll('.icono');
    cartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Producto agregado al carrito (funcionalidad por implementar)');
        });
    });

    const comprarboton = document.getElementById('comprarboton');
    if (comprarboton) {
        comprarboton.addEventListener('click', () => {
            document.querySelector('.destacado').scrollIntoView({ behavior: 'smooth' });
        });
    }
});