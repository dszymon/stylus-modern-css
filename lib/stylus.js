/*!
 * Stylus
 * Copyright (c) Automattic <developer.wordpress.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var Renderer = require('./renderer')
  , nodes = require('./nodes')
  , utils = require('./utils');

/**
 * Export render as the module.
 */

exports = module.exports = render;

/**
 * Library version.
 */

exports.version = require('../package').version;

/**
 * Expose nodes.
 */

exports.nodes = nodes;

/**
 * Expose BIFs.
 */

exports.functions = require('./functions');

/**
 * Expose utils.
 */

exports.utils = require('./utils');

/**
 * Expose middleware.
 */

exports.middleware = require('./middleware');

/**
 * Expose constructors.
 */

exports.Visitor = require('./visitor');
exports.Parser = require('./parser');
exports.Evaluator = require('./visitor/evaluator');
exports.Normalizer = require('./visitor/normalizer');
exports.Compiler = require('./visitor/compiler');

/**
 * Convert the given `css` to `stylus` source.
 *
 * @param {String} css
 * @return {String}
 * @api public
 */

exports.convertCSS = require('./convert/css');

/**
 * Render the given `str` with `options` and callback `fn(err, css)`.
 *
 * @param {String} str
 * @param {Object|Function} options
 * @param {Function} fn
 * @api public
 */

exports.render = function(str, options, fn){
  if ('function' == typeof options) fn = options, options = {};
  return new Renderer(str, options).render(fn);
};

/**
 * Return a new `Renderer` for the given `str` and `options`.
 *
 * @param {String} str
 * @param {Object} options
 * @return {Renderer}
 * @api public
 */

function render(str, options) {
  return new Renderer(str, options);
}

/**
 * Expose optional functions.
 */

