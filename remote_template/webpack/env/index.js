const path = require('path');
require('dotenv').config();

const IS_DEV = process.env.NODE_ENV !== 'production';
const SRC_DIR = path.join(__dirname, '../../', 'src');
const DIST_DIR = path.join(__dirname, '../../', 'dist');
const PORT = 5003

module.exports = {
  IS_DEV,
  SRC_DIR,
  DIST_DIR,
  PORT
};
