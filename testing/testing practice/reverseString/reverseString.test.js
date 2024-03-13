import reverseString from "./reverseString.js";

test('Reverses String.', () => {
    expect(reverseString('aragaki')).toBe('ikagara');
});

test('Reverses String.', () => {
    expect(reverseString('toryiama')).toBe('amaiyrot');
});

test('Works with multiple words', () => {
    expect(reverseString('This string shath be reversed.')).toBe('.desrever eb htahs gnirts sihT');
});