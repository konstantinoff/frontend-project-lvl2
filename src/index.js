import { getFileData } from './utils.js';
import parsers from './parsers.js';
import getdiff from './getdiff.js';

const genDiff = (file1, file2) => {
  const parsedFile1 = parsers(file1, getFileData);
  const parsedFile2 = parsers(file2, getFileData);

  return getdiff(parsedFile1, parsedFile2);
};

export default genDiff;
