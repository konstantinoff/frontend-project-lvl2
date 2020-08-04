#!/usr/bin/env node
import program from 'commander';
import genDiff from './index.js';
import { getFileData } from './utils.js';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((file1Path, file2Path) => {
    console.log(genDiff(getFileData(file1Path), getFileData(file2Path)));
  });

program.parse(process.argv);
