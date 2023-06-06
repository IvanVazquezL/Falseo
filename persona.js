const { 
    random,
    arregloSinValorActual
} = require('./utils');
const { 
    nombres,
    nombresHombre,
    nombresMujer,
    apellidos
} = require('./personaConstants');

class Persona {
    constructor() {}

    nombre(sexo = 'hombre', numero = 1) {
        const arregloNombres = sexo === 'hombre' ? nombresHombre : nombresMujer;
        return this.valorSimpleOCompuesto(arregloNombres, numero);
    }

    valorSimpleOCompuesto(arreglo, numero) {
        let valor = random(arreglo);

        if (numero === 2) {
            valor += ' ' + random(arregloSinValorActual(arreglo, valor));
        }

        return valor;
    }

    apellido(numero = 1) {        
        return this.valorSimpleOCompuesto(apellidos, numero);
    }

    nombreCompleto(sexo = 'hombre', numeroNombre = '1', numeroApellidos = '1') {
        return this.nombre(sexo, numeroNombre) + ' ' + this.apellido(numeroApellidos);
    }
}

module.exports = Persona;