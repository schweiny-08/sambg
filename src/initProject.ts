import * as readline from 'readline';

export function initPrompt() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Do you want a custom message? (y/n)\n', (answer: string) => {
    // rl.close();

    if (answer.trim().toLowerCase() === 'y') {
      rl.question('Enter your custom message: ', (customMessage: string) => {
        rl.close();
        console.log(customMessage);
      });
    } else if (answer.trim().toLowerCase() === 'n') {
      rl.close();
      console.log('Hello World!');
    } else {
      rl.write('input not recognized');
      rl.close();
    }
  });
}
