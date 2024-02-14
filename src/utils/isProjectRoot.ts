import path from 'path';
import fs from 'fs';

export function isProjectRoot() {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    return fs.existsSync(packageJsonPath) && fs.statSync(packageJsonPath).isFile();
}