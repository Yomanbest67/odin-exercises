import caesarCipher from "./caesarCipher.js";

test('Does whatever this is', () => {
    expect(caesarCipher('amicule', 3)).toBe('dplfxoh');
});

test('Works with uppercase.', () => {
    expect(caesarCipher('Baiatule', 3)).toBe('Edldwxoh');
});

test('Works with punctuation', () => {
    expect(caesarCipher('Baiatule??', 3)).toBe('Edldwxoh??');
});

test('Works with W, X, Y, Z', () => {
    expect(caesarCipher('Wxyzetted', 3)).toBe('Zabchwwhg');
});

test('Works with higher shift', () => {
    expect(caesarCipher('Wxyzetted', 4)).toBe('Abcdixxih');
});

test('Works with everything', () => {
    expect(caesarCipher('Wxyzetted? WaHoO.', 5)).toBe('Bcdejyyji? BfMtT.');
});