import { decimalToBinary, decimalToBase } from "./ToBinaryToBase";
import { Stack } from "./StackMethods";

// Uso de las funciones
const stack = new Stack();

console.log("Decimal to Binary:");
decimalToBinary(10, stack);
decimalToBinary(15, stack);
decimalToBinary(25, stack);
decimalToBinary(31, stack);
decimalToBinary(36, stack);

console.log("Decimal to Base (Base 2):");
decimalToBase(10, 2, stack);
decimalToBase(15, 2, stack);
decimalToBase(25, 2, stack);
decimalToBase(31, 2, stack);
decimalToBase(36, 2, stack);

console.log("Decimal to Base (Base 16):");
decimalToBase(10, 16, stack);
decimalToBase(15, 16, stack);
decimalToBase(25, 16, stack);
decimalToBase(31, 16, stack);
decimalToBase(36, 16, stack);
