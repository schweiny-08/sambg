import yargs from 'yargs';

//   .command('init', 'Initialize config', undefined, () => { console.log('HIT INIT')})
const argsDef = yargs(process.argv.slice(2))
  .command(
    'ddbTable',
    'Create a DynamoDB table',
    (yargs) =>
      yargs.option('name', {
        alias: 'n',
        type: 'string',
        desc: 'Enter a name for your DynamoDB table: ',
      }),
    (argv) => {
      console.log('DB NAME: ' + argv.name || 'NO NAME');
    }
  )
  .help().argv;

export default argsDef;
