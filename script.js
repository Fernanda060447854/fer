document.addEventListener("DOMContentLoaded", function () {
    let notificacion = document.getElementById("notificacion-envio");

    // Simula que el pedido ha sido enviado (puedes conectar con una base de datos más adelante)
    let pedidoEnviado = true; 

    if (pedidoEnviado) {
        notificacion.classList.remove("oculto");
    }
});
