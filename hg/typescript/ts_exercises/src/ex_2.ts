/* 
1. Vamos a implementar el juego de Code Breaker. El juego comienza generando un número
al azar de cuatro dígitos. Cada dígito puede tener un valor entre 0 y 6.
2. El usuario ingresa un número intentando adivina el número secreto
3. Si alguno de los números concuerda en la posición original, se muestra una X
4. Si alguno de los números no concuerda con la posición original, pero esta en el número
secreto en otra posición, muestra un -
5. El orden en que se muestran es el siguiente: XX- (primero las X y luego los -)*/

function generateSecretNumber(): string {
    let secretNumber = "";
    for (let i = 0; i < 4; i++) {
        const digit = Math.floor(Math.random() * 7).toString();
        secretNumber += digit;
    }
    return secretNumber;
}

function compareNumbers(secretNumber: string, guess: string): string {
    let hint = "";
    for (let i = 0; i < secretNumber.length; i++) {
        if (secretNumber[i] === guess[i]) {
            hint += "X";
        } else if (secretNumber.includes(guess[i])) {
            hint += "-";
        }
    }
    return hint;
}

function playCodeBreaker(): void {
    console.log("Welcome to the ultimate Code Breaker!");
    const secretNumber = generateSecretNumber();
    let attempts = 0;

    while (true) {
        const guess = prompt("Enter a four digit number between 0 and 6: ");
        attempts++;

        if (!guess || guess.length !== 4) {
            console.log("Enter a four digit number!");
            continue;
        }

        const hint = compareNumbers(secretNumber, guess);
        console.log("Your choice is: ", guess);
        console.log("Hint:", hint);

        if (hint === "XXXX") {
            console.log("Your choice is: ", guess);
            console.log(`BUM! You've discovered the secret number in ${attempts} attempts!`);
            break;
        }

        if (attempts >= 5) {
            console.log("You have exceeded the maximum number of attempts.");
            console.log("Your choice is: ", guess);
            console.log("The secret number is:", secretNumber);
            break;
        }
    }
}

playCodeBreaker();
