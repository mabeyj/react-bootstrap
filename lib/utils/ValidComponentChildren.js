"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _react = _interopRequireDefault(require("react"));

// TODO: This module should be ElementChildren, and should use named exports.

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid components".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @return {object} Object containing the ordered map of results.
 */
function map(children, func, context) {
  var _context;

  var index = 0;
  return (0, _map["default"])(_context = _react["default"].Children).call(_context, children, function (child) {
    if (! /*#__PURE__*/_react["default"].isValidElement(child)) {
      return child;
    }

    return func.call(context, child, index++);
  });
}
/**
 * Iterates through children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for context.
 */


function forEach(children, func, context) {
  var _context2;

  var index = 0;
  (0, _forEach["default"])(_context2 = _react["default"].Children).call(_context2, children, function (child) {
    if (! /*#__PURE__*/_react["default"].isValidElement(child)) {
      return;
    }

    func.call(context, child, index++);
  });
}
/**
 * Count the number of "valid components" in the Children container.
 *
 * @param {?*} children Children tree container.
 * @returns {number}
 */


function count(children) {
  var _context3;

  var result = 0;
  (0, _forEach["default"])(_context3 = _react["default"].Children).call(_context3, children, function (child) {
    if (! /*#__PURE__*/_react["default"].isValidElement(child)) {
      return;
    }

    ++result;
  });
  return result;
}
/**
 * Finds children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @returns {array} of children that meet the func return statement
 */


function filter(children, func, context) {
  var _context4;

  var index = 0;
  var result = [];
  (0, _forEach["default"])(_context4 = _react["default"].Children).call(_context4, children, function (child) {
    if (! /*#__PURE__*/_react["default"].isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result.push(child);
    }
  });
  return result;
}

function find(children, func, context) {
  var _context5;

  var index = 0;
  var result;
  (0, _forEach["default"])(_context5 = _react["default"].Children).call(_context5, children, function (child) {
    if (result) {
      return;
    }

    if (! /*#__PURE__*/_react["default"].isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result = child;
    }
  });
  return result;
}

function every(children, func, context) {
  var _context6;

  var index = 0;
  var result = true;
  (0, _forEach["default"])(_context6 = _react["default"].Children).call(_context6, children, function (child) {
    if (!result) {
      return;
    }

    if (! /*#__PURE__*/_react["default"].isValidElement(child)) {
      return;
    }

    if (!func.call(context, child, index++)) {
      result = false;
    }
  });
  return result;
}

function some(children, func, context) {
  var _context7;

  var index = 0;
  var result = false;
  (0, _forEach["default"])(_context7 = _react["default"].Children).call(_context7, children, function (child) {
    if (result) {
      return;
    }

    if (! /*#__PURE__*/_react["default"].isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result = true;
    }
  });
  return result;
}

function toArray(children) {
  var _context8;

  var result = [];
  (0, _forEach["default"])(_context8 = _react["default"].Children).call(_context8, children, function (child) {
    if (! /*#__PURE__*/_react["default"].isValidElement(child)) {
      return;
    }

    result.push(child);
  });
  return result;
}

var _default = {
  map: map,
  forEach: forEach,
  count: count,
  find: find,
  filter: filter,
  every: every,
  some: some,
  toArray: toArray
};
exports["default"] = _default;
module.exports = exports["default"];