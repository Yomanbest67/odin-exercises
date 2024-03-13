import calculator from "./calculator.js";

test('Does Addition', () => {
    expect(new calculator().add(1, 2)).toBe(3);
});

test('Does Subtraction', () => {
    expect(new calculator().subtract(2, 1)).toBe(1);
});

test('Does Multiplication', () => {
    expect(new calculator().multiply(1, 2)).toBe(2);
});

test('Does Division', () => {
    expect(new calculator().divide(4, 2)).toBe(2);
});
