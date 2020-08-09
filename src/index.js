import { getFileData, getFileExtension } from './utils.js';
import parsers from './parsers.js';
import getDiff from './getdiff.js';

const genDiff = (file1, file2) => {
  const file1Data = getFileData(file1);
  const file2Data = getFileData(file2);
  const ext1 = getFileExtension(file1);
  const ext2 = getFileExtension(file2);
  const parsedFile1 = parsers(file1Data, ext1);
  const parsedFile2 = parsers(file2Data, ext2);
  return getDiff(parsedFile1, parsedFile2);
};

export default genDiff;
