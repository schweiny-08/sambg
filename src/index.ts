#! /usr/bin/env node

import chalk from 'chalk';
import { initConfig } from './initConfig';
import { isProjectRoot } from './utils/isProjectRoot';
import argsDef from './argsDefinition';

// const subCommand = process.argv[2];
console.log('HERE')

argsDef;

// if (!isProjectRoot()) {
//   console.log(chalk.yellow('Please go to the root of your node project!'));
//   process.exit(1);
// }
// console.log('ok')

// switch (args._[0]) {
//   case 'init':
//     initConfig(process.argv[3]);
//     break;
//   case 'ddbTable':
//     console.log(args.name)
//     break;
//   default:
//     console.log('sambg <command>\n\nUsage:\n');
//     console.log(
//       chalk.grey('sambg'),
//       '\tInitialize sambg in your project with sambg.config.json'
//     );
//     break;
// }
