import capitalise from './capitalise';

test('capitalises dog', () => {
  expect(capitalise('dog')).toMatch(/Dog/);
});

test('capitalises BiG', () => {
  expect(capitalise('BiG')).toMatch(/BiG/);
});

test('capitalises empty string', () => {
  expect(capitalise('')).toBe('');
});

