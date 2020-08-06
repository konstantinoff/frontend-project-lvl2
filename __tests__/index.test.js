import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src';

/* eslint-disable no-underscore-dangle */
const __filename = fileURLToPath(import.meta.url);
/* eslint-disable no-underscore-dangle */
const __dirname = path.dirname(__filename);

const getFixturePath = (filename, format) => path.join(__dirname, '..', '__fixtures__', format, `${filename}.${format}`);

const getFileData = (filename, format) => fs.readFileSync(getFixturePath(filename, format), 'utf-8');

describe('test plain files', () => {
  test.each(['json', 'yaml', 'ini'])('%s file test', (extension) => {
    const file1 = getFixturePath('file1', extension);
    const file2 = getFixturePath('file2', extension);
    const expectedResult = getFileData('expectedResult', 'txt');
    expect(genDiff(file1, file2)).toBe(expectedResult);
  });
});
