module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'features/steps/**/*.ts',
      'hooks/**/*.ts'
    ],
    format: ['progress']
  }
};