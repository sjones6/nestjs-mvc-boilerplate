const watchMode = process.argv.includes('--watch')

module.exports = {
  diff: true,
  exit: watchMode,
  extension: ['ts'],
  package: './package.json',
  reporter: 'spec',
  slow: 75,
  timeout: watchMode ? 0 : 2000,
  require: [
    'ts-node/register',
    'module-alias/register',
    'node_modules/reflect-metadata/Reflect.js'
  ],
  ui: 'bdd',
  'watch-files': ['./src/**/*', './test/**/*'],
  'watch-ignore': ['node_modules', '.git', './dist', './data', './github', './vscode']
};