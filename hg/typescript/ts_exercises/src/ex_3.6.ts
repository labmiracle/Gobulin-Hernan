/*
Aquí hemos inicializado dos variables con tipos de funciones. Posteriormente les asignamos funciones.

1 Arreglar los errores
*/

let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

multiply = function (val1: number, val2: number): number {
    return val1 * val2;
};

capitalize = function (val: string): string {
    return val.charAt(0).toUpperCase() + val.slice(1);
};

console.log("[Ejercicio 3.6]", capitalize(`habil ${multiply(5, 10)}`));
