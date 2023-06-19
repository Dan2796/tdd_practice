const shiftChar = (character, shiftNumber) => {
  const charNum = character.charCodeAt(0);
  // just return the character if it's out of the main character ranges:
  if (charNum < 65) {
    return character;
  }
  if (charNum > 90 && charNum < 97) {
    return character;
  }
  if (charNum > 122) {
    return character;
  }
  // otherwise shift:
  let shifted = charNum + shiftNumber;
  // and check whether it needs to be looped:
  if (charNum >= 65 && charNum <= 90) {
    if (shifted > 90) {
      shifted = shifted - 26;
    }
  }
  if (charNum >= 97 && charNum <= 122) {
    if (shifted > 122) {
      shifted = shifted - 26;
    }
  }
  return String.fromCharCode(shifted);
}

const caesarCypher = (input, shiftNumber) => {
  const array = input.toString().split('');

  return array.map((character) => shiftChar(character, shiftNumber)).join('');
}

export default caesarCypher;
