#! /usr/bin/env node

import { mkdirSync} from 'fs';
import * as path from 'path';
import { initPrompt } from './initProject';

// function generateSamRepo(projectName: string): void {
//     const projectPath = path.join(process.cwd(), projectName);

//     mkdirSync(projectName);
//     process.chdir(projectName);
// }

// const projectName = process.argv[2];
// if (projectName) generateSamRepo(projectName);
// else console.error('Please provide a project name.')

initPrompt();
