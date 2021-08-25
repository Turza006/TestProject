const shell = require('shelljs');
shell.exec('babel api --out-dir dist --copy-files');
console.log('\n');
