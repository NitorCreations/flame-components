const autoprefixer = require('autoprefixer');
const postCssImport = require('postcss-import');
const colorFunction = require('postcss-color-function');
const postCssMixins = require('postcss-mixins');
const postCssVariables = require('postcss-css-variables');
const postCssNested = require('postcss-nested');

module.exports = {
  plugins: [
    postCssImport({ path: __dirname + '/src' }),
    postCssMixins,
    postCssNested,
    postCssVariables,
    colorFunction,
    autoprefixer
  ]
};
