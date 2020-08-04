import fs from 'fs';
import path from 'path';

const getRelativeFilePath = (filename) => path.resolve(process.cwd(), filename);

export const getFileData = (filename) => fs.readFileSync(getRelativeFilePath(filename), 'utf-8');

export const compareStrings = (a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};
