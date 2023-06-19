const reverseString = (input) => {
  const string = input.toString();
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversed = reversed + string[i];
  }
  return reversed;
}

export default reverseString;
