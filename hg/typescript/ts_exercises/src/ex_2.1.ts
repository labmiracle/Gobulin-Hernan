/*
Dado el siguiente codigo:
Simplemente inspeccione los tipos posibles moviéndose sobre el ’texto’ para ver cómo
cambia el tipo inferido si se pueden hacer suposiciones de forma segura sobre los tipos
posibles dentro de la ruta del código dado.
*/

function doStuff(value: any): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase().split("").join(" "));
    } else if (typeof value === "number") {
        console.log(value.toPrecision(5));
    }

    value; // coloque el cursor sobre `valor` aqui
}
doStuff(2);
doStuff(22);
doStuff(222);
doStuff("hello");
doStuff(true);
doStuff({});

console.log("[Ejercicio 4.1]");
