import _extends from "@babel/runtime-corejs3/helpers/esm/extends";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime-corejs3/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';
import { bsClass, prefix, splitBsProps } from './utils/bootstrapUtils';
import { DEVICE_SIZES } from './utils/StyleConfig';
var propTypes = {
  componentClass: elementType,

  /**
   * The number of columns you wish to span
   *
   * for Extra small devices Phones (<768px)
   *
   * class-prefix `col-xs-`
   */
  xs: PropTypes.number,

  /**
   * The number of columns you wish to span
   *
   * for Small devices Tablets (≥768px)
   *
   * class-prefix `col-sm-`
   */
  sm: PropTypes.number,

  /**
   * The number of columns you wish to span
   *
   * for Medium devices Desktops (≥992px)
   *
   * class-prefix `col-md-`
   */
  md: PropTypes.number,

  /**
   * The number of columns you wish to span
   *
   * for Large devices Desktops (≥1200px)
   *
   * class-prefix `col-lg-`
   */
  lg: PropTypes.number,

  /**
   * Hide column
   *
   * on Extra small devices Phones
   *
   * adds class `hidden-xs`
   */
  xsHidden: PropTypes.bool,

  /**
   * Hide column
   *
   * on Small devices Tablets
   *
   * adds class `hidden-sm`
   */
  smHidden: PropTypes.bool,

  /**
   * Hide column
   *
   * on Medium devices Desktops
   *
   * adds class `hidden-md`
   */
  mdHidden: PropTypes.bool,

  /**
   * Hide column
   *
   * on Large devices Desktops
   *
   * adds class `hidden-lg`
   */
  lgHidden: PropTypes.bool,

  /**
   * Move columns to the right
   *
   * for Extra small devices Phones
   *
   * class-prefix `col-xs-offset-`
   */
  xsOffset: PropTypes.number,

  /**
   * Move columns to the right
   *
   * for Small devices Tablets
   *
   * class-prefix `col-sm-offset-`
   */
  smOffset: PropTypes.number,

  /**
   * Move columns to the right
   *
   * for Medium devices Desktops
   *
   * class-prefix `col-md-offset-`
   */
  mdOffset: PropTypes.number,

  /**
   * Move columns to the right
   *
   * for Large devices Desktops
   *
   * class-prefix `col-lg-offset-`
   */
  lgOffset: PropTypes.number,

  /**
   * Change the order of grid columns to the right
   *
   * for Extra small devices Phones
   *
   * class-prefix `col-xs-push-`
   */
  xsPush: PropTypes.number,

  /**
   * Change the order of grid columns to the right
   *
   * for Small devices Tablets
   *
   * class-prefix `col-sm-push-`
   */
  smPush: PropTypes.number,

  /**
   * Change the order of grid columns to the right
   *
   * for Medium devices Desktops
   *
   * class-prefix `col-md-push-`
   */
  mdPush: PropTypes.number,

  /**
   * Change the order of grid columns to the right
   *
   * for Large devices Desktops
   *
   * class-prefix `col-lg-push-`
   */
  lgPush: PropTypes.number,

  /**
   * Change the order of grid columns to the left
   *
   * for Extra small devices Phones
   *
   * class-prefix `col-xs-pull-`
   */
  xsPull: PropTypes.number,

  /**
   * Change the order of grid columns to the left
   *
   * for Small devices Tablets
   *
   * class-prefix `col-sm-pull-`
   */
  smPull: PropTypes.number,

  /**
   * Change the order of grid columns to the left
   *
   * for Medium devices Desktops
   *
   * class-prefix `col-md-pull-`
   */
  mdPull: PropTypes.number,

  /**
   * Change the order of grid columns to the left
   *
   * for Large devices Desktops
   *
   * class-prefix `col-lg-pull-`
   */
  lgPull: PropTypes.number
};
var defaultProps = {
  componentClass: 'div'
};

var Col = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Col, _React$Component);

  function Col() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Col.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["componentClass", "className"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = [];

    _forEachInstanceProperty(DEVICE_SIZES).call(DEVICE_SIZES, function (size) {
      function popProp(propSuffix, modifier) {
        var propName = "" + size + propSuffix;
        var propValue = elementProps[propName];

        if (propValue != null) {
          classes.push(prefix(bsProps, "" + size + modifier + "-" + propValue));
        }

        delete elementProps[propName];
      }

      popProp('', '');
      popProp('Offset', '-offset');
      popProp('Push', '-push');
      popProp('Pull', '-pull');
      var hiddenPropName = size + "Hidden";

      if (elementProps[hiddenPropName]) {
        classes.push("hidden-" + size);
      }

      delete elementProps[hiddenPropName];
    });

    return /*#__PURE__*/React.createElement(Component, _extends({}, elementProps, {
      className: classNames(className, classes)
    }));
  };

  return Col;
}(React.Component);

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;
export default bsClass('col', Col);