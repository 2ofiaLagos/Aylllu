var planSelect = document.getElementById("plan");
var duracionSelect = document.getElementById("duracion");
var estudiantesInput = document.getElementById("estudiantes");
var resultadoDiv = document.getElementById("resultado");

function actualizarCotizacion() {
    var plan = planSelect.value; // plan -> estudiante, pro
    var precioBase;

    if (plan == "estudiante") {
        precioBase = 50;
    } else if (plan == "pro") {
        precioBase = 200;
    } else if (plan == "recontraPro") {
        precioBase = 400;
    }

    var duracion = parseInt(duracionSelect.value);
    var estudiantes = parseInt(estudiantesInput.value);

    var descuento = 0;

    if (duracion == 1) {
        descuento = 0.10;
    } else if (duracion == 4) {
        descuento = 0.20;
    } else if (duracion == 10){
        descuento = 0.30;}

    var precioConDescuento = precioBase - (precioBase * descuento); 
    

    var totalConDescuento = precioConDescuento * estudiantes * duracion;
    var totalSinDescuento = precioBase * estudiantes * duracion;
    var ahorro = totalSinDescuento - totalConDescuento;

    resultadoDiv.innerHTML = `
        <p>Precio mensual: S/${precioBase.toFixed(2)}</p>
        <p>Descuento: ${descuento * 100}%</p>
        <p>Precio con descuento: S/${precioConDescuento.toFixed(2)}</p>
        <p>Estudiantes: ${estudiantes}</p>
        <p>Duración: ${duracion} meses</p>
        <br>
        <p><strong>TOTAL: S/${totalConDescuento.toFixed(2)}</strong></p>
        <p>Ahorro: S/${ahorro.toFixed(2)}</p>
    `;
}

planSelect.addEventListener("change", function () {
    actualizarCotizacion();
});

duracionSelect.addEventListener("change", function () {
    actualizarCotizacion();
});

estudiantesInput.addEventListener("input", function () {
    actualizarCotizacion();
});

actualizarCotizacion();
