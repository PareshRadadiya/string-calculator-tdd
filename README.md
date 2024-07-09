# String Calculator TDD

This project is a simple string calculator implemented using Test-Driven Development (TDD) principles. The calculator can handle numbers separated by commas or newlines and also supports custom delimiters. Additionally, it throws an exception for negative numbers.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)

## Installation
To set up the project, first clone the repository and then install the dependencies:
```bash
git clone <repository-url>
cd string-calculator-tdd
npm install
```

## Usage
To use the calculator, you can import the add function from `index.js`:
```javascript
import { add } from './index';

console.log(add("1,2,3")); // Output: 6
console.log(add("//;\n1;2")); // Output: 3
```

## Tests
This project uses Jest for testing. To run the tests, use the following command:
```bash
npm test
```

## License
This project is licensed under the ISC License.