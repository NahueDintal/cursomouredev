// Funciones y alcance

// Simple

function saludo() {
  console.log(' Hola qlea! ');
};

saludo();

// Con retorno

function devuelveSaludo() {
  return saludo();
};

console.log(devuelveSaludo());

// Con argumento

function nombre(nombre){
  console.log( `hola qlea de ${nombre}`);
};

nombre(' javier');

//Con argumentos

function nombresaludo(saludo, nombre) {
  console.log( ` ${saludo} ${nombre}` );
};

nombre('magolla');

function nombrealudo(saludo = 'hola', nombre = 'javascript') {
  console.log( ` ${saludo} ${nombre}` );
};

nombrealudo();









