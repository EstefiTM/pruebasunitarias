

const sum = require('../utils/suma');

test('sumar 1 mas 2', () => {

    expect(sum(1,2)).toBe(3);

})

test('sumar 1 mas 0', () => {

    expect(sum(1,0)).toBe(1);

})


test('sumar 1 mas -4', () => {

    expect(sum(1,-4)).toBe(-3);

})


test('sumar 8 mas 4', () => {

    expect(sum(8,4)).toBe(12);

})
