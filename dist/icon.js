'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Type = _react2['default'].PropTypes;

exports['default'] = _react2['default'].createClass({
  displayName: "Icon",

  propTypes: {
    name: Type.string.isRequired,
    extraClasses: Type.arrayOf(Type.string),
    size: Type.number,
    top: Type.number
  },

  getDefaultProps: function getDefaultProps() {
    return {
      extraClasses: []
    };
  },

  classes: function classes() {
    var classes = ['icon-' + this.props.name, 'relative'];
    return classes.concat(this.props.extraClasses).join(' ');
  },

  style: function style() {
    return {
      fontSize: this.props.size,
      top: this.props.top
    };
  },

  render: function render() {
    var name = this.props.name;

    return _react2['default'].createElement('i', { className: this.classes(), onClick: this.props.onClick, style: this.style() });
  }
});
module.exports = exports['default'];