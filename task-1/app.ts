const sorter = (numbers: number[]) => {
  const sortedNumbers: number[] = numbers.sort((a, b) => b - a);
  let product = 1;
  if (numbers.length < 3) {
    for (let i = 0; i < 3; i++) {
      if (i >= sortedNumbers.length) {
        product *= sortedNumbers[0];
        break;
      }
      product *= sortedNumbers[i];
    }
  } else {
    for (let i = 0; i < 3; i++) {
      product *= sortedNumbers[i];
    }
  }

  return product;
};
