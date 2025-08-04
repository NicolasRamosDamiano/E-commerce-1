// Funcionalidad básica para botones "Agregar al carrito" y "Shop Now"

document.addEventListener('DOMContentLoaded', function() {
    const cartBtns = document.querySelectorAll('.icono');
    cartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Producto agregado al carrito (funcionalidad por implementar)');
        });
    });

    const shopNowBtn = document.getElementById('shopNowBtn');
    if(comprarboton) {
        shopNowBtn.addEventListener('click', () => {
            document.querySelector('.destacado').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
