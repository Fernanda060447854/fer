document.getElementById("form-seguimiento").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    let numeroPedido = document.getElementById("numero-pedido").value;
    let estadoPedido = document.getElementById("estado-pedido");
    let resultado = document.getElementById("resultado-seguimiento");

    // Simulación de estado de pedido
    let estados = ["En preparación 🍰", "Enviado 🚚", "Entregado ✅"];
    let estadoActual = estados[Math.floor(Math.random() * estados.length)];

    // Mostrar el estado del pedido
    estadoPedido.textContent = `📦 Pedido ${numeroPedido}: ${estadoActual}`;
    resultado.classList.remove("oculto");
});
