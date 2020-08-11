import statusTypes from './statusTypes.js';

const formatForPrint = (array) => array.reduce((acc, {
  key, value, newValue, status,
}) => {
  let resultString = '';
  if (status === statusTypes.CHANGED) {
    resultString = `- ${key}: ${value}\n+ ${key}: ${newValue}\n`;
  }
  if (status === statusTypes.ADDED) {
    resultString = `+ ${key}: ${value}\n`;
  }
  if (status === statusTypes.REMOVED) {
    resultString = `- ${key}: ${value}\n`;
  }
  if (status === statusTypes.UNCHANGED) {
    resultString = `  ${key}: ${value}\n`;
  }
  return acc + resultString;
}, '');

export default (array) => `{\n${formatForPrint(array)}}`;
