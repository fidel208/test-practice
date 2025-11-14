import { calculator } from "./script.js";

test("adds two numbers correctly", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("subtracts two numbers correctly", () => {
    expect(calculator.subtract(5, 2)).toBe(3);
});
test("multiplies two numbers correctly", () => {
    expect(calculator.multiply(5, 2)).toBe(10);
});
test("divides two numbers correctly", () => {
    expect(calculator.divide(10, 2)).toBe(5);
});