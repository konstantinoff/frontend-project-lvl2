import _isObject from 'lodash/isObject.js';
import statusTypes from './statusTypes.js';

const render = (key, value) => {
  if (!_isObject(value)) {
    return `${key}: ${value}`;
  }

  const resultArray = Object.keys(value).map((key2) => render(key2, value[key2]));

  return ` ${key}: {\n${resultArray.join('\n')}\n}`;
};

const renderMap = {
  [statusTypes.ADDED]: (key, value) => `+ ${render(key, value)}`,
  [statusTypes.REMOVED]: (key, value) => `- ${render(key, value)}`,
  [statusTypes.CHANGED]: (key, oldValue, newValue) => `- ${render(key, oldValue)}\n+ ${render(key, newValue)}`,
  [statusTypes.UNCHANGED]: (key, value) => `  ${render(key, value)}`,
  [statusTypes.NESTED]: (key, value, _, fn) => `${render(key, fn(value))}`,
};

const stylish = (array) => {
  const stringsArray = array.map(({
    key, value, newValue, status,
  }) => renderMap[status](key, value, newValue, stylish));

  return `{\n${stringsArray.join('\n')}\n}`;
};

export default stylish;
