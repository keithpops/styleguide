'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Type = _react2['default'].PropTypes;

exports['default'] = _react2['default'].createClass({
  displayName: "SimpleSelect",

  propTypes: {
    extraClasses: Type.arrayOf(Type.string),
    disabled: Type.bool,
    fieldColor: Type.oneOf(['light', 'dark']),
    label: Type.string,
    multiple: Type.bool,
    options: Type.object,
    promptText: Type.string,
    readOnly: Type.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      fieldColor: 'light',
      inactive: false,
      multiple: false,
      readOnly: false
    };
  },

  label: function label() {
    if (this.props.label) {
      return _react2['default'].createElement(
        'label',
        { className: 'px2 mb1' },
        this.props.label
      );
    }
  },

  options: function options() {
    var options = this.props.options;
    if (this.props.promptText) {
      options.unshift({ 'value': '', 'label': this.props.promptText });
    }
    return options;
  },

  iconClasses: function iconClasses() {
    var classes = ['icon', 'icon-arrow-down', 'absolute', 'right', 'mxn3'];
    this.props.disabled ? classes.push('grey-25') : classes.push('blue-70');
    return classes.join(' ');
  },

  fieldClasses: function fieldClasses() {
    var classes = [];
    classes.push('select-' + this.props.fieldColor);
    return classes.join(' ');
  },

  classes: function classes() {
    var classes = ['simple-select'];
    if (this.props.disabled) {
      classes.push('disabled');
    }
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: this.classes() },
      this.label(),
      _react2['default'].createElement(
        'div',
        { className: 'relative' },
        _react2['default'].createElement(
          'select',
          {
            className: this.fieldClasses(),
            multiple: this.props.multiple,
            disabled: this.props.disabled || this.props.inactive || this.props.readOnly
          },
          this.options().map(function (option) {
            return _react2['default'].createElement(
              'option',
              { value: option.value },
              option.label
            );
          })
        ),
        _react2['default'].createElement('span', { className: this.iconClasses() })
      )
    );
  }
});
module.exports = exports['default'];