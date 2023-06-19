import analyseArray from './analyseArray';

test('Analyse array of numbers', () => {
  const testArray = [1, 5, -3, 123, 222.5, 1];
  expect(analyseArray(testArray)).toEqual(
    expect.objectContaining({
      min: -3,
      max: 222.5,
      length: 6,
    }));
  // check average separately so can use toBeCloseTo
  expect(analyseArray(testArray).average).toBeCloseTo(58.25);
});

test('Analyse mixed array', () => {
  const testArray = [1, 'tripwire', 5, -9, true, 123, 222.5, 4000, 1];
  expect(analyseArray(testArray)).toEqual({
      min: -9,
      max: 4000,
      average: 620.5,
      length: 9,
  });
});

test('Analyse non-number array', () => {
  const testArray = ['string', 'another string'];
  expect(analyseArray(testArray)).toEqual({
      min: null,
      max: null,
      average: null,
      length: 2,
  });
});
 
