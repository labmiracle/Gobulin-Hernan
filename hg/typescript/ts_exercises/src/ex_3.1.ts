/*
Dado el siguiente codigo:
1 Agregue tipos explícitos a los parámetros y el tipo de retorno
2 Solucione cualquier error resultante de tipos inválidos
*/

function add(x: number, y: number): number {
    return x + y;
}

function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
}

const someSum: number = sumArray([3, 6, 9]);

console.log("[Ejercicio 3.1]", `3 + 6 + 9 === ${someSum}`);

/*
Anotaciones:

Se agregaron:
- Los tipos number a los parámetros x e y de la función add
- El tipo number[] al parámetro numbers de la función sumArray
- El tipo number al resultado de la función sumArray y se asignó este tipo a la constante someSum.

Se corrigió el array en la línea 15 (línea 9 del apunte) para que contenga números en vez de strings.
*/
