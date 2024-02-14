import path from 'path'
import fs from 'fs'
import chalk from 'chalk';

export function initConfig(templatePath?: string) {
    const config = {
        templatePath: templatePath || './template.yaml'
    };
    // TODO: Add lambda root file path

    const configPath = path.join(process.cwd(), 'sambg.config.json');
    fs.writeFileSync(configPath, JSON.stringify(config, null, 4));
    console.log(chalk.greenBright('Config file created'));
}