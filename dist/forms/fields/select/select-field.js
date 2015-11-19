'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fieldErrors = require('../../field-errors');

var _fieldErrors2 = _interopRequireDefault(_fieldErrors);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _simpleSelect = require('./simple-select');

var _simpleSelect2 = _interopRequireDefault(_simpleSelect);

var Type = _react2['default'].PropTypes;

exports['default'] = _react2['default'].createClass({

  displayName: "SelectField",

  propTypes: {
    disabled: Type.bool,
    errors: Type.array,
    extraClasses: Type.array,
    fieldColor: Type.oneOf(['light', 'dark']),
    includeBlank: Type.oneOfType([Type.bool, Type.string]),
    label: Type.string,
    name: Type.string,
    onChange: Type.func,
    options: Type.oneOfType([Type.object, Type.array]).isRequired,
    placeholder: Type.string,
    value: Type.oneOfType([Type.object, Type.string, Type.number])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      errors: [],
      fieldColor: 'light',
      onChange: function onChange() {},
      value: null
    };
  },

  getInitialState: function getInitialState() {
    return {
      disabled: this.props.disabled || false,
      errors: this.props.errors || []
    };
  },

  containerClasses: function containerClasses() {
    var classes = ['relative'];
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  handleChange: function handleChange(e) {
    this.props.onChange();
    this.resetErrors();
  },

  label: function label() {
    if (this.props.label) {
      return _react2['default'].createElement(
        'label',
        { className: 'px2 mb1 relative' },
        this.props.label
      );
    }
  },

  resetErrors: function resetErrors() {
    this.setState({ errors: [] });
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      this.label(),
      _react2['default'].createElement(_simpleSelect2['default'], { disabled: this.props.disabled,
        fieldColor: this.props.fieldColor,
        hasError: this.state.errors.length > 0,
        includeBlank: this.props.includeBlank,
        name: this.props.name,
        onChange: this.handleChange,
        options: this.props.options,
        placeholder: this.props.placeholder,
        value: this.props.value }),
      _react2['default'].createElement(_fieldErrors2['default'], { errors: this.state.errors })
    );
  }
});
module.exports = exports['default'];