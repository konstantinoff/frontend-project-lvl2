import _has from 'lodash/has.js';
import _uniq from 'lodash/uniq.js';
import _sortBy from 'lodash/sortBy.js';
import statusTypes from './statusTypes.js';

export default (file1, file2) => {
  const file1Keys = Object.keys(file1);
  const file2Keys = Object.keys(file2);
  const sameUniqKeys = _uniq([...file1Keys, ...file2Keys]);

  const result = sameUniqKeys.map((key) => {
    if (_has(file1, key) && !_has(file2, key)) {
      return {
        key,
        value: file1[key],
        status: statusTypes.REMOVED,
      };
    }
    if (!_has(file1, key) && _has(file2, key)) {
      return {
        key,
        value: file2[key],
        status: statusTypes.ADDED,
      };
    }
    if (file1[key] !== file2[key]) {
      return {
        key,
        value: file1[key],
        newValue: file2[key],
        status: statusTypes.CHANGED,
      };
    }
    return {
      key,
      value: file1[key],
      status: statusTypes.UNCHANGED,
    };
  });

  return _sortBy(result, ['key']);
};
