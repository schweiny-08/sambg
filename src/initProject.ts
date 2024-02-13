import { promisify } from 'util';
import * as readline from 'readline';
import { mkdirSync } from 'fs';
import { exec } from 'child_process';
import askQuestion from './utils/ask-question';

const execAsync = promisify(exec);

// async function initGit() {
//   console.log('IN GIT');
//   try {
//     await rl.question(
//       'Do you want to initialise GIT? (y/n)',
//       async (answer: string) => {
//         let isValid = false;
//         do {
//           switch (answer.toLowerCase()) {
//             case 'y':
//               isValid = true;
//               await execAsync('git init');
//               break;
//             case 'n':
//               isValid = true;
//               break;
//             default:
//               console.warn('Unexpected input');
//               break;
//           }
//         } while (!isValid);
//         rl.close();
//       }
//     );
//   } catch (err) {
//     console.error(
//       'Something went wrong while initialising git on your project'
//     );
//     console.error(err);
//   }
// }

export async function initNodeProject() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const projectName = await askQuestion('Enter your project name', rl);

  console.log(projectName);
  // try {
  //   await rl.question('Enter your project name\n', async (projectName: string) => {
  //     const projectNameClean = projectName.replace(/\s/g, '-');

  //     console.log('Creating Node project...');

  //     mkdirSync(projectNameClean);
  //     process.chdir(projectNameClean);

  //     await execAsync('npm init -y');
  //     await execAsync('npm install --save-dev typescript ts-node');
  //     await execAsync('npx tsc --init');

  //     console.log('Node project created successfully!');
  //     rl.close();
  //   });

  //   await rl.question(
  //     'Do you want to initialise GIT? (y/n)',
  //     async (answer: string) => {
  //       let isValid = false;
  //       do {
  //         switch (answer.toLowerCase()) {
  //           case 'y':
  //             isValid = true;
  //             await execAsync('git init');
  //             break;
  //           case 'n':
  //             isValid = true;
  //             break;
  //           default:
  //             console.warn('Unexpected input');
  //             break;
  //         }
  //       } while (!isValid);
  //       rl.close();
  //     }
  //   );
  // } catch (err) {
  //   console.error('Something went wrong while initialising your Node project!');
  //   console.error(err);
  // }
  
  rl.close();
}

export async function initProject() {
  initNodeProject();
  // await initGit();
}
