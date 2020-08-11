#!/usr/bin/env node
import program from 'commander';
import genDiff from '../src/index.js';
import formatForPrint from '../src/formatForPrint.js';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((file1Path, file2Path) => {
    console.log(formatForPrint(genDiff(file1Path, file2Path)));
  });

program.parse(process.argv);
