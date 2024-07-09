function parseNumbers(numbersString) {
  const regex = new RegExp('[,\n]');
  return numbersString.split(regex).map(num => parseInt(num));
}

export function add(numbers) {
  if (!numbers) {
    return 0;
  }

  const numbersArray = parseNumbers(numbers);
  return numbersArray.reduce((sum, num) => sum + parseInt(num), 0);
}