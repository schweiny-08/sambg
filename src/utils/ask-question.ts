import * as readline from 'readline';

export default function askQuestion(question: string, rl: readline.Interface): Promise<string> {
    return new Promise((resolve, reject) => {
        rl.question(question + '\n', (answer: string) => {
            resolve(answer);
        });
    });
}