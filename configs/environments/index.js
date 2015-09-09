process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const vendor = require('./dependencies').vendor;
const alias = require('./dependencies').alias;

const resolve = require('path').resolve;
const yargs = require('yargs').argv;
const _slice = [].slice;

const SRC_DIRNAME = 'src';
const DIST_DIRNAME = 'build';
const PROJECT_PATH = resolve(__dirname, '../../');

function inProject() {
  return resolve.apply(resolve, [PROJECT_PATH].concat(_slice.apply(arguments)));
}

// ------------------------------------
// Configuration Definition
// ------------------------------------
module.exports = exports = {

  // environment
  NODE_ENV: process.env.NODE_ENV,
  __DEBUG__: !!yargs.debug,
  __DEV__: process.env.NODE_ENV === 'development',
  __PROD__: process.env.NODE_ENV === 'production',

  // path helpers
  SRC_DIRNAME: SRC_DIRNAME,
  DIST_DIRNAME: DIST_DIRNAME,
  PROJECT_PATH: PROJECT_PATH,
  inProject: inProject,
  inSrc: inProject.bind(undefined, SRC_DIRNAME),
  inDist: inProject.bind(undefined, DIST_DIRNAME),

  // build system
  VENDOR_DEPENDENCIES: vendor,
  ALIAS: alias,

  // server configuration
  WEBPACK_PORT: 3000
  //SERVER_PORT: process.env.PORT || 4000
};
