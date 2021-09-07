const sorter = (numbers: number[]) => {
  if (numbers.length < 3) return;
  const sortedNumbers: number[] = numbers.sort((a, b) => b - a);
  let product = 1;
  for (let i = 0; i < 3; i++) {
    product *= sortedNumbers[i];
  }
  return product;
};

console.log(sorter([1, 10, 2, 6, 5, 3]));
