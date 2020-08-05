import fs from 'fs';
import path from 'path';

const getRelativeFilePath = (filename) => path.resolve(process.cwd(), filename);

export const getFileData = (filename) => fs.readFileSync(getRelativeFilePath(filename), 'utf-8');

export const getFileFormat = (filename) => path.extname(filename).slice(1);
