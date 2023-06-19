import caesarCypher from './caesarCypher';

test('Caesar cyphers simple version by 2', () => {
  expect(caesarCypher('two fish sit in a tank', 2)).toMatch(/vyq hkuj ukv kp c vcpm/);
});

test('Caesar cyphers with punctuation version by 24', () => {
  expect(caesarCypher('One says to the other, "how do you drive this thing?"', 24))
    .toBe('Mlc qywq rm rfc mrfcp, "fmu bm wms bpgtc rfgq rfgle?"');
});


