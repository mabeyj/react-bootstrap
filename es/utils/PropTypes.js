import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _someInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/some";
import _everyInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/every";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import PropTypes from 'prop-types';
import createChainableTypeChecker from 'prop-types-extra/lib/utils/createChainableTypeChecker';
import ValidComponentChildren from './ValidComponentChildren';
var idPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
export function generatedId(name) {
  return function (props) {
    var error = null;

    if (!props.generateChildId) {
      var _context;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      error = idPropType.apply(void 0, _concatInstanceProperty(_context = [props]).call(_context, args));

      if (!error && !props.id) {
        error = new Error("In order to properly initialize the " + name + " in a way that is accessible to assistive technologies " + ("(such as screen readers) an `id` or a `generateChildId` prop to " + name + " is required"));
      }
    }

    return error;
  };
}
export function requiredRoles() {
  for (var _len2 = arguments.length, roles = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    roles[_key2] = arguments[_key2];
  }

  return createChainableTypeChecker(function (props, propName, component) {
    var missing;

    _everyInstanceProperty(roles).call(roles, function (role) {
      if (!_someInstanceProperty(ValidComponentChildren).call(ValidComponentChildren, props.children, function (child) {
        return child.props.bsRole === role;
      })) {
        missing = role;
        return false;
      }

      return true;
    });

    if (missing) {
      return new Error("(children) " + component + " - Missing a required child with bsRole: " + (missing + ". " + component + " must have at least one child of each of ") + ("the following bsRoles: " + roles.join(', ')));
    }

    return null;
  });
}
export function exclusiveRoles() {
  for (var _len3 = arguments.length, roles = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    roles[_key3] = arguments[_key3];
  }

  return createChainableTypeChecker(function (props, propName, component) {
    var duplicate;

    _everyInstanceProperty(roles).call(roles, function (role) {
      var childrenWithRole = _filterInstanceProperty(ValidComponentChildren).call(ValidComponentChildren, props.children, function (child) {
        return child.props.bsRole === role;
      });

      if (childrenWithRole.length > 1) {
        duplicate = role;
        return false;
      }

      return true;
    });

    if (duplicate) {
      return new Error("(children) " + component + " - Duplicate children detected of bsRole: " + (duplicate + ". Only one child each allowed with the following ") + ("bsRoles: " + roles.join(', ')));
    }

    return null;
  });
}