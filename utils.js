function random(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function arregloSinValorActual(arreglo, valorActual) {
    return arreglo.filter((valor) => valor !== valorActual)
}

module.exports = {
    random,
    arregloSinValorActual
};