const analyseArray = (array) => {
  let min = array[0];
  let max = array[0];
  const length = array.length;
  // for getting an average of just the numbers
  let numberLength = 0;
  let sum = 0;
  array.forEach((item) => {
    if (typeof item === 'number') {
      if (item < min) {
        min = item;
      }
      if (item > max) {
        max = item;
      }
      sum += item;
      numberLength += 1;
    }
  });
  // average is let so that can reassign to null if no numbers
  let average = sum / numberLength;
  // return null if no number in the whole array
  if (typeof min !== 'number') {
    min = null;
    max = null;
    average = null;
  }

  return { 
    average, 
    min, 
    max, 
    length, 
  };
}

export default analyseArray;
