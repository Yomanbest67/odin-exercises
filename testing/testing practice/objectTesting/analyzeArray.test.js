import analyzeArray from "./analyzeArray";


test('Checks Object.', () => {
    expect(analyzeArray([1, 2, 3])).toEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 3
    })
});


test('Checks Another Object.', () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7])).toEqual({
        average: 4,
        min: 1,
        max: 7,
        length: 7
    })
});