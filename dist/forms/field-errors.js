'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var createClass = _react2['default'].createClass;
var Type = _react2['default'].PropTypes;
exports['default'] = createClass({
  displayName: 'fieldErrors',

  propTypes: {
    errors: Type.array,
    extraClasses: Type.array
  },

  classes: function classes() {
    var classes = ['py1', 'px2', 'clearfix'];
    return classes.concat(this.props.extraClasses).join(' ');
  },

  list: function list() {
    return this.props.errors.map(function (errorMsg) {
      return _react2['default'].createElement(
        'div',
        { className: 'orange small semibold' },
        _react2['default'].createElement(_icon2['default'], { name: 'alert', extraClasses: ['mr1'], size: 12, top: 1 }),
        errorMsg
      );
    });
  },

  render: function render() {
    if (this.props.errors.length > 0) {
      return _react2['default'].createElement(
        'div',
        { className: this.classes() },
        this.list()
      );
    } else {
      return null;
    }
  }
});
module.exports = exports['default'];