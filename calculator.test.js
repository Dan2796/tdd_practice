import calculator from './calculator';

test('Adds 1 and 3', () => {
  expect(calculator.add(1, 3)).toBe(4)
});

test('Adds 5 and -4', () => {
  expect(calculator.add(5, -4)).toBe(1)
});

test('Subtracts 5 from 10', () => {
  expect(calculator.subtract(10, 5)).toBe(5)
});

test('Subtracts 10 from 5', () => {
  expect(calculator.subtract(5, 10)).toBe(-5)
});

test('Multiplies 3 and 5', () => {
  expect(calculator.multiply(3, 5)).toBe(15)
});

test('Multiplies 12 and 0', () => {
  expect(calculator.multiply(12, 0)).toBe(0)
});

test('Divides 12 by 4', () => {
  expect(calculator.divide(12, 4)).toBe(3)
});

test('Divides 12 by 5', () => {
  expect(calculator.divide(12, 5)).toBeCloseTo(2.4)
});

test('Divides string by 5', () => {
  expect(calculator.divide('string', 5)).toBe(NaN)
});


