const path = require('path');

module.exports = {
  entry: [
    './js/backend.js',
    './js/data.js',
    './js/form.js',
    './js/stat.js',
    './js/validation.js',
    './js/popap.js',
    './js/dialog.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
};
