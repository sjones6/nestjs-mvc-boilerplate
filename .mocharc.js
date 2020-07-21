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
    'node_modules/reflect-metadata/Reflect.js'
  ],
  ui: 'bdd',
  'watch-files': ['src/**/*.ts', 'src/**/*.js'],
  'watch-ignore': ['node_modules']
};