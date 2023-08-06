import { Stack } from "./StackMethods";

export function decimalToBinary(number: number, stack: Stack) {
    while (number > 0) {
        stack.push(number % 2);
        number = Math.floor(number / 2);
    }

    let binaryString: string = "";
    while (!stack.isEmpty()) {
        binaryString += stack.pop();
    }

    console.log(binaryString);
    return binaryString;
}

export function decimalToBase(number: number, base: number, stack: Stack) {
    if (base < 2 || base > 36) {
        throw new Error("Base must be between 2 and 36.");
    }

    while (number > 0) {
        stack.push(number % base);
        number = Math.floor(number / base);
    }

    let baseString: string = "";
    while (!stack.isEmpty()) {
        const digit = stack.pop() || 0;
        if (digit >= 10) {
            const char = String.fromCharCode(65 + (digit - 10));
            baseString += char;
        } else {
            baseString += digit;
        }
    }

    console.log(baseString);
    return baseString;
}
