import _isEqual from 'lodash/isEqual.js';
import { compareStrings } from './utils.js';

const genDiff = (file1, file2) => {
  const ObjectFile1 = JSON.parse(file1);
  const ObjectFile2 = JSON.parse(file2);

  const resultArray = [];

  Object.keys(ObjectFile1).forEach((key) => {
    if (!_isEqual(ObjectFile1[key], ObjectFile2[key])) {
      resultArray.push(['-', key, ObjectFile1[key]]);
    } else {
      resultArray.push([key, ObjectFile2[key]]);
    }
  });

  Object.keys(ObjectFile2).forEach((key) => {
    if (!_isEqual(ObjectFile2[key], ObjectFile1[key])) {
      resultArray.push(['+', key, ObjectFile2[key]]);
    }
  });

  const result = resultArray.sort((a, b) => compareStrings(a[1], b[1])).map((item) => {
    if (item.includes('+') || item.includes('-')) {
      return `${item[0]} ${item[1]}: ${item[2]}`;
    }
    return `  ${item.join('')}`;
  }).join('\n');

  return `{\n${result}\n}`;
};

export default genDiff;
