/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
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

// eslint-disable-next-line max-len
const normalizationPrice = (range) => range.map((element, i) => (i === 0 ? (element ?? 0) : (element ?? Infinity)));

// Фильтрация по диапазону цен
export const priceFilterRange = (requiredRange, coursesArr) => {
  const normalizationUserRange = normalizationPrice(requiredRange);
  const [minUserRange, maxUserRange] = normalizationUserRange;
  const result = coursesArr.filter((course) => {
    const courcesPrice = course.prices;
    const normalizationCoursePrice = normalizationPrice(courcesPrice);
    const [minCoursePrice] = normalizationCoursePrice;
    return !(minUserRange < minCoursePrice && maxUserRange < minCoursePrice);
  });
  return result;
};

// Сортировка курсов по цене
export const priceFilterMinPrice = (corses) => corses.sort((a, b) => {
  const [minA] = a.prices;
  const [minB] = b.prices;
  minA ?? 0;
  return minA - minB;
});
