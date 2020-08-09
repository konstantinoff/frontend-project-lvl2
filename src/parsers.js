import yaml from 'js-yaml';
import ini from 'ini';

const parsersMap = {
  json: JSON.parse,
  yaml: yaml.safeLoad,
  ini: ini.parse,
};

export default (file, ext) => parsersMap[ext](file);
