import { getFileData } from './utils.js';
import parsers from './parsers.js';
import getdiff from './getdiff';

const genDiff = (file1, file2) => {
  const parsedFile1 = parsers(file1)(getFileData(file1));
  const parsedFile2 = parsers(file2)(getFileData(file2));

  return getdiff(parsedFile1, parsedFile2);
};

export default genDiff;
