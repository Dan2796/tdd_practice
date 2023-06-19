import reverseString from './reverseString';

test('Reverses string test dog', () => {
  expect(reverseString('dog')).toMatch(/god/);
});


test('Reverses string test blimp', () => {
  expect(reverseString('blimp')).toMatch(/pmilb/);
});

test('Reverses string test empty', () => {
  expect(reverseString('')).toBe('');
});

test('Reverses string test number', () => {
  expect(reverseString(13)).toBe('31');
});

