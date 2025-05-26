document.addEventListener("DOMContentLoaded", function () {
    let notificacion = document.getElementById("notificacion-promocion");
    let botonCerrar = document.getElementById("cerrar-notificacion");
    let mensajePromo = document.querySelector("#notificacion-promocion p");

    let promociones = [
        "🎉 ¡Oferta especial! 20% de descuento en cupcakes. <a href='cupcakes.html'>Ver más</a>",
        "🍪 ¡Combo de galletas! 3x2 en galletas de chispas. <a href='galletas.html'>Aprovecha</a>",
        "🎂 ¡Pasteles con envío gratis! <a href='pasteles.html'>Haz tu pedido</a>"
    ];

    let promoAleatoria = promociones[Math.floor(Math.random() * promociones.length)];
    mensajePromo.innerHTML = promoAleatoria;

    if (!localStorage.getItem("promoCerrada")) {
        notificacion.classList.remove("oculto");
    }

    botonCerrar.addEventListener("click", function () {
        notificacion.classList.add("oculto");
        localStorage.setItem("promoCerrada", "true");
    });
});
