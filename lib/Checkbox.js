"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _warning = _interopRequireDefault(require("warning"));

var _bootstrapUtils = require("./utils/bootstrapUtils");

/* eslint-disable jsx-a11y/label-has-for */
var propTypes = {
  inline: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  title: _propTypes["default"].string,

  /**
   * Only valid if `inline` is not set.
   */
  validationState: _propTypes["default"].oneOf(['success', 'warning', 'error', null]),

  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <Checkbox inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: _propTypes["default"].func
};
var defaultProps = {
  inline: false,
  disabled: false,
  title: ''
};

var Checkbox = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(Checkbox, _React$Component);

  function Checkbox() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Checkbox.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        inline = _this$props.inline,
        disabled = _this$props.disabled,
        validationState = _this$props.validationState,
        inputRef = _this$props.inputRef,
        className = _this$props.className,
        style = _this$props.style,
        title = _this$props.title,
        children = _this$props.children,
        props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, ["inline", "disabled", "validationState", "inputRef", "className", "style", "title", "children"]);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var input = /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({}, elementProps, {
      ref: inputRef,
      type: "checkbox",
      disabled: disabled
    }));

    if (inline) {
      var _classes2;

      var _classes = (_classes2 = {}, _classes2[(0, _bootstrapUtils.prefix)(bsProps, 'inline')] = true, _classes2.disabled = disabled, _classes2); // Use a warning here instead of in propTypes to get better-looking
      // generated documentation.


      process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!validationState, '`validationState` is ignored on `<Checkbox inline>`. To display ' + 'validation state on an inline checkbox, set `validationState` on a ' + 'parent `<FormGroup>` or other element instead.') : void 0;
      return /*#__PURE__*/_react["default"].createElement("label", {
        className: (0, _classnames["default"])(className, _classes),
        style: style,
        title: title
      }, input, children);
    }

    var classes = (0, _extends2["default"])({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
      disabled: disabled
    });

    if (validationState) {
      classes["has-" + validationState] = true;
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames["default"])(className, classes),
      style: style
    }, /*#__PURE__*/_react["default"].createElement("label", {
      title: title
    }, input, children));
  };

  return Checkbox;
}(_react["default"].Component);

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

var _default = (0, _bootstrapUtils.bsClass)('checkbox', Checkbox);

exports["default"] = _default;
module.exports = exports["default"];