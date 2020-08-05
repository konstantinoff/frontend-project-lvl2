import yaml from 'js-yaml';
import { getFileFormat } from './utils.js';

const formatsMap = {
  json: JSON.parse,
  yaml: yaml.safeLoad,
  yml: yaml.safeLoad,
};

export default (file) => formatsMap[getFileFormat(file)];
