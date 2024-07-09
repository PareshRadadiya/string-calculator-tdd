import { add } from './index';

test('empty string returns 0', () => {
  expect(add('')).toBe(0);
});

test('single number returns the number', () => {
  expect(add('1')).toBe(1);
});

test('two numbers returns the sum', () => {
  expect(add('1,2')).toBe(3);
});

test('newline or comma delimiter returns the sum', () => {
  expect(add('1\n2,3')).toBe(6);
});

test('custom delimiter returns the sum', () => {
  expect(add('//;\n1;2')).toBe(3);
});

test('negative number throws exception', () => {
  expect(() => add('-1,2')).toThrow('negative numbers not allowed: -1');
});

test('multiple negative numbers throw exception with all negatives', () => {
  expect(() => add('-1,-2,3')).toThrow('negative numbers not allowed: -1,-2');
});
