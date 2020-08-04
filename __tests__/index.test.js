import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src';

/* eslint-disable no-underscore-dangle */
const __filename = fileURLToPath(import.meta.url);
/* eslint-disable no-underscore-dangle */
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const getFileData = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('plain', () => {
  const file1 = getFileData('file1.json');
  const file2 = getFileData('file2.json');
  const expectedResult = getFileData('expectedResult.txt');

  expect(genDiff(file1, file2)).toBe(expectedResult);
});
