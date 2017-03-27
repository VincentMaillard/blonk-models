//import path from 'path';

const env = process.env.NODE_ENV || 'development';
var imp = './'+env;
console.log(imp);
const config = require(imp); // eslint-disable-line import/no-dynamic-require
console.log(config);

// const defaults = {
// 	root: path.join(__dirname, '/..')
// };

module.exports = config;
