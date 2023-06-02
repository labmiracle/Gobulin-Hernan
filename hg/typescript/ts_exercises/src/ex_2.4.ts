/*
Dado el siguiente codigo:

1 Las aves y los peces ponen huevos. Sólo los pájaros vuelan. Sólo los peces nadan. Definir dos tipos nuevos: ‘BirdLike‘ y ‘FishLike‘ 
basados en estos rasgos
2 Crea un alias de tipo para ‘Bird OR Fish‘ llamado ‘Animal‘
3 Implementar ‘instanceof‘ en ‘interrogateAnimal‘ para permitir a los peces nadar y a los pájaros volar
4 Agregue cualquier anotación de tipo faltante, siendo lo más explícito posible
*/

interface EggLayer {
    layEggs(): void;
}

interface Flyer {
    fly(height: number): void;
}

interface Swimmer {
    swim(depth: number): void;
}

type BirdLike = EggLayer & Flyer;
type FishLike = EggLayer & Swimmer;

type Animal = Bird | Fish;

class Bird implements BirdLike {
    constructor(public species: string) {}

    layEggs(): void {
        console.log("Poniendo huevos de aves.");
    }

    fly(height: number): void {
        console.log(`Volando a la altura de ${height} metros.`);
    }
}

class Fish implements FishLike {
    constructor(public species: string) {}

    layEggs(): void {
        console.log("Poniendo huevos de pescado.");
    }

    swim(depth: number): void {
        console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
}

function getRandomAnimal(): Animal {
    const animals: Animal[] = [new Bird("puffin"), new Bird("kittiwake"), new Fish("sea robin"), new Fish("leafy seadragon")];

    return animals[Math.floor(Math.random() * animals.length)];
}

function interrogateAnimal(animal: Animal = getRandomAnimal()): string {
    if ("swim" in animal) {
        animal.swim(10); // se llama solo si es un pez
    }

    if ("fly" in animal) {
        animal.fly(10); // se llama solo si es un pájaro
    }

    return animal.species;
}

console.log("[Ejercicio 4.4]", `Tenemos un ${interrogateAnimal()} en nuestras manos!`);

/*
Anotaciones de cambios realizados:
- Se crearon los alias de tipo "BirdLike y FishLike" que tienen en conún los rasgos correspondientes de pajaros y peces
- Se creó un alias de tipo Animal que representa tanto a "Bird" como a "Fish"
- Se utilizó el operador "instanceof" para verificar si el animal es pez o pájaro y así poder llamar al método respectivo (swim o fly).
- Se agregaron anotaciones para las variables animal y el valor de retorno de la función "interrogateAnimal"
*/
