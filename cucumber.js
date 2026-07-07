// {
//   "default": {
//     "requireModule": ['s-node/register'],
//     "require": [
//       'features/steps/**/*.ts',
//       'hooks/**/*.ts'
//     ],
//     "format": ['progress']
//   }
// };

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