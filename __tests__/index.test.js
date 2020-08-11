import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import getDiff from '../src/getdiff.js';
import parse from '../src/parsers.js';
import formatForPrint from '../src/formatForPrint.js';

/* eslint-disable no-underscore-dangle */
const __filename = fileURLToPath(import.meta.url);
/* eslint-disable no-underscore-dangle */
const __dirname = path.dirname(__filename);

const getFixturePath = (filename, format) => path.join(__dirname, '..', '__fixtures__', format, `${filename}.${format}`);

const getFileData = (filename, format) => fs.readFileSync(getFixturePath(filename, format), 'utf-8');

describe('test plain files', () => {
  test.each(['json', 'yaml', 'ini'])('%s file test', (extension) => {
    const file1Data = getFileData('beforeFlat', extension);
    const file2Data = getFileData('afterFlat', extension);
    const parsedFile1 = parse(file1Data, extension);
    const parsedFile2 = parse(file2Data, extension);
    const expectedResult = getFileData('expectedResultFlat', 'txt');
    expect(formatForPrint(getDiff(parsedFile1, parsedFile2))).toBe(expectedResult);
  });
});
