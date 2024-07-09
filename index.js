function parseNumbers(numbersString) {
  const customDelimiterMatch = numbersString.match(/\/\/(.)\n/);
  let delimiter = ',|\n';

  if (customDelimiterMatch) {
    delimiter = customDelimiterMatch[1];
    numbersString = numbersString.slice(4); // Remove from beginning //;\n
  }

  const regex = new RegExp(`[${delimiter}]`);
  numbersString = numbersString.split(regex);

  return numbersString.map(Number);
}

export function add(numbers) {
  if (!numbers) {
    return 0;
  }

  const numbersArray = parseNumbers(numbers);
  return numbersArray.reduce((sum, num) => sum + parseInt(num), 0);
}
