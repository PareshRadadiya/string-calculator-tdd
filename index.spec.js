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
