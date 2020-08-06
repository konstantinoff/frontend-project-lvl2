import _isEqual from 'lodash/isEqual.js';

const compareStrings = (a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};

export default (file1, file2) => {
  const resultArray = [];

  Object.keys(file1).forEach((key) => {
    if (!_isEqual(file1[key], file2[key])) {
      resultArray.push(['-', key, file1[key]]);
    } else {
      resultArray.push([key, file2[key]]);
    }
  });

  Object.keys(file2).forEach((key) => {
    if (!_isEqual(file2[key], file1[key])) {
      resultArray.push(['+', key, file2[key]]);
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
