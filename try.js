const Falseo = require('./falseo');

const falseo = new Falseo()
console.log(falseo.persona.nombre('mujer', 2));
console.log(falseo.persona.apellido(2));
console.log(falseo.persona.nombreCompleto('mujer', 2, 2));