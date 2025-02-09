const texto = `Prazer, me chamo Lucas 👋`;
const VelEscrita = 100;
let i = 0;

function escrever() {
    if (i <= texto.length) {
        document.getElementById("texto").innerHTML = texto.substring(0, i);
        i++;
        setTimeout(escrever, VelEscrita);
    }
    else{
        piscarCursor()
    }
}

function piscarCursor() {
    setInterval(() => {
        mostrarCursor = !mostrarCursor;
        document.getElementById("texto").innerHTML = texto + (mostrarCursor ? "_" : "");
    }, 500);
}

escrever();
