export function add(numbers) {
  if (!numbers) {
    return 0;
  }
  const numbersArray = numbers.split(',');
  return numbersArray.reduce((sum, num) => sum + parseInt(num), 0);
}