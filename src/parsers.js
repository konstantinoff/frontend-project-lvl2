import yaml from 'js-yaml';
import ini from 'ini';
import compose from 'lodash/fp/compose.js';
import { getFileExtension } from './utils.js';

const parsersMap = {
  json: JSON.parse,
  yaml: yaml.safeLoad,
  ini: ini.parse,
};

export default (file, getFileDataFn) => compose(
  parsersMap[getFileExtension(file)],
  getFileDataFn,
)(file);
