/*
Use un protector de tipo para completar el cuerpo de la función ‘padLeft‘
*/
function padLeft(value: string, padding: number | string): string {
    if (typeof padding === "number") {
        return `${Array(padding + 1).join(" ")}${value}`;
    } else if (typeof padding === "string") {
        return padding + value;
    } else {
        throw new Error("The padding parameter must be a number or a string..");
    }
}

console.log(
    "[Ejercicio 4.2]",
    `
  ${padLeft("", 0)}
  ${padLeft("", "")}
  ${padLeft("", "")}
  ${padLeft("", "")}
  ${padLeft("", "")}
  `
);
