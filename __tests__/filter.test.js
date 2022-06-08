/* eslint-disable import/no-unresolved */
import { priceFilterRange, priceFilterMinPrice } from '../filter.js';

const courses = [
  { name: 'Courses in England', prices: [0, 100] },
  { name: 'Courses in Germany', prices: [500, null] },
  { name: 'Courses in Italy', prices: [100, 200] },
  { name: 'Courses in Russia', prices: [null, 400] },
  { name: 'Courses in China', prices: [50, 250] },
  { name: 'Courses in USA', prices: [200, null] },
  { name: 'Courses in Kazakhstan', prices: [56, 324] },
  { name: 'Courses in France', prices: [null, null] },
];

const result1 = [
  { name: 'Courses in England', prices: [0, 100] },
  { name: 'Courses in Italy', prices: [100, 200] },
  { name: 'Courses in Russia', prices: [null, 400] },
  { name: 'Courses in China', prices: [50, 250] },
  { name: 'Courses in USA', prices: [200, null] },
  { name: 'Courses in Kazakhstan', prices: [56, 324] },
  { name: 'Courses in France', prices: [null, null] },
];

const result2 = [
  { name: 'Courses in England', prices: [0, 100] },
  { name: 'Courses in Italy', prices: [100, 200] },
  { name: 'Courses in Russia', prices: [null, 400] },
  { name: 'Courses in China', prices: [50, 250] },
  { name: 'Courses in USA', prices: [200, null] },
  { name: 'Courses in Kazakhstan', prices: [56, 324] },
  { name: 'Courses in France', prices: [null, null] },
];

const result3 = [
  { name: 'Courses in England', prices: [0, 100] },
  { name: 'Courses in Germany', prices: [500, null] },
  { name: 'Courses in Italy', prices: [100, 200] },
  { name: 'Courses in Russia', prices: [null, 400] },
  { name: 'Courses in China', prices: [50, 250] },
  { name: 'Courses in USA', prices: [200, null] },
  { name: 'Courses in Kazakhstan', prices: [56, 324] },
  { name: 'Courses in France', prices: [null, null] },
];

const result4 = [
  { name: 'Courses in England', prices: [0, 100] },
  { name: 'Courses in Russia', prices: [null, 400] },
  { name: 'Courses in France', prices: [null, null] },
  { name: 'Courses in China', prices: [50, 250] },
  { name: 'Courses in Kazakhstan', prices: [56, 324] },
  { name: 'Courses in Italy', prices: [100, 200] },
  { name: 'Courses in USA', prices: [200, null] },
  { name: 'Courses in Germany', prices: [500, null] },
];

test('RequiredRange1', () => {
  const requiredRange1 = [null, 200];
  const result = priceFilterRange(requiredRange1, courses);
  expect(result).toEqual(result1);
});

test('RequiredRange2', () => {
  const requiredRange2 = [100, 350];
  const result = priceFilterRange(requiredRange2, courses);
  expect(result).toEqual(result2);
});

test('RequiredRange3', () => {
  const requiredRange3 = [200, null];
  const result = priceFilterRange(requiredRange3, courses);
  expect(result).toEqual(result3);
});

test('Test function priceFilterMinPrice', () => {
  const result = priceFilterMinPrice(courses);
  expect(result).toEqual(result4);
});
