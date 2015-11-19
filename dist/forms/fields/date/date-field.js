'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _datePicker = require('./date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _fieldErrors = require('../../field-errors');

var _fieldErrors2 = _interopRequireDefault(_fieldErrors);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Type = _react2['default'].PropTypes;

// Note: The value of date.month() for 1/1/2015 is 0, not 1

var validDateFormats = ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/MM/DD', 'MMM D, YYYY'];

exports['default'] = _react2['default'].createClass({

  displayName: "DateField",

  // The rest of the child components all use Moment objects for dates.
  propTypes: {
    dateFormat: Type.oneOf(validDateFormats).isRequired,
    disabled: Type.bool,
    errors: Type.array,
    fieldColor: Type.oneOf(['light', 'dark']),
    includeMaxMinBounds: Type.bool,
    label: Type.string,
    maxDate: Type.oneOfType([Type.object, Type.string, Type.number]),
    minDate: Type.oneOfType([Type.object, Type.string, Type.number]),
    name: Type.string,
    onChange: Type.func,
    placeholder: Type.string,
    value: Type.oneOfType([Type.object, Type.string, Type.number])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      errors: [],
      fieldColor: 'light',
      includeMaxMinBounds: true,
      onChange: function onChange() {}
    };
  },

  getInitialState: function getInitialState() {
    return {
      value: this.momentDate(this.props.value),
      disabled: this.props.disabled || false,
      errors: this.props.errors || [],
      show: false
    };
  },

  componentDidMount: function componentDidMount() {
    if (!this.isFormatValid()) {
      this.setState({
        disabled: true,
        errors: ['Invalid date format']
      });
    } else {
      if (!this.isDateValid()) {
        this.setState({
          errors: this.state.errors.concat('Invalid date')
        });
      }
    }
  },

  baseZIndex: function baseZIndex() {
    return this.state.show ? 300 : 1;
  },

  boundedMaxDate: function boundedMaxDate() {
    if (!!this.props.maxDate) {
      if (this.props.includeMaxMinBounds) {
        return this.momentDate(this.props.maxDate).add(1, 'day');
      } else {
        return this.momentDate(this.props.maxDate);
      }
    }
  },

  boundedMinDate: function boundedMinDate() {
    if (!!this.props.minDate) {
      if (this.props.includeMaxMinBounds) {
        return this.momentDate(this.props.minDate).subtract(1, 'day');
      } else {
        return this.momentDate(this.props.minDate);
      }
    }
  },

  // Accepts only moments
  changeDate: function changeDate(date) {
    this.setState({ value: date });
    this.resetErrors();
    this.hideDatePicker();
    this.props.onChange(date);
  },

  containerClasses: function containerClasses() {
    var classes = ['date-field', 'relative'];
    if (this.state.disabled) classes.push('disabled');
    if (this.props.label) classes.push('with-label');
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  datePicker: function datePicker() {
    if (this.state.show) {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement('div', { className: 'modal-clear-bg',
          onClick: this.hideDatePicker,
          style: { zIndex: this.baseZIndex() - 2 } }),
        _react2['default'].createElement(_datePicker2['default'], { date: this.state.value || (0, _moment2['default'])(),
          maxDate: this.boundedMaxDate(),
          minDate: this.boundedMinDate(),
          onChangeDate: this.changeDate,
          show: this.state.show,
          zIndex: this.baseZIndex() - 1 })
      );
    }
  },

  hideDatePicker: function hideDatePicker() {
    this.setState({ show: false });
  },

  iconClasses: function iconClasses() {
    var classes = ['icon-calendar', 'ml1', 'absolute'];
    this.state.disabled ? classes.push('grey-25') : classes.push('blue-70');
    return classes.join(' ');
  },

  inputClasses: function inputClasses() {
    var classes = ['relative', 'fit', 'pr4'];
    classes.push('field-' + this.props.fieldColor);
    if (this.state.errors.length > 0) classes.push('bc-orange bw-2');
    return classes.join(' ');
  },

  isDateValid: function isDateValid() {
    if (this.state && this.state.value) {
      return this.state.value.isValid();
    } else if (this.props.value) {
      return this.momentDate(this.props.value).isValid();
    } else {
      return true;
    }
  },

  isFormatValid: function isFormatValid() {
    return validDateFormats.indexOf(this.props.dateFormat) != -1;
  },

  label: function label() {
    if (this.props.label) {
      return _react2['default'].createElement(
        'label',
        { className: 'px2 mb1 relative',
          onClick: this.showDatePicker,
          style: { zIndex: this.baseZIndex() + 2 } },
        this.props.label
      );
    }
  },

  momentDate: function momentDate(date) {
    if (!!date) {
      switch (date.constructor.name) {
        case "Date":
        case "Number":
          return (0, _moment2['default'])(date);
        case "Moment":
          return date;
        case "String":
          return (0, _moment2['default'])(date, this.props.dateFormat);
        default:
          return null;
      }
    } else {
      return null;
    }
  },

  resetErrors: function resetErrors() {
    var errors = [];
    if (!this.isDateValid()) errors.push('Invalid date');
    this.setState({ errors: errors });
  },

  showDatePicker: function showDatePicker() {
    if (!this.state.disabled) this.setState({ show: true });
  },

  value: function value() {
    if (this.state.value) return this.state.value.format(this.props.dateFormat);
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: this.containerClasses() },
      this.label(),
      this.datePicker(),
      _react2['default'].createElement(
        'div',
        { className: 'relative rounded-2 overflow-hidden no-select',
          style: { zIndex: this.baseZIndex() } },
        _react2['default'].createElement('input', { className: this.inputClasses(),
          disabled: this.state.disabled,
          name: this.props.name,
          onFocus: this.showDatePicker,
          readOnly: true,
          type: 'text',
          placeholder: this.props.placeholder,
          value: this.value() }),
        _react2['default'].createElement('span', { className: this.iconClasses(),
          onClick: this.showDatePicker,
          style: { zIndex: this.baseZIndex() + 2 } })
      ),
      _react2['default'].createElement('div', { className: 'clearfix' }),
      _react2['default'].createElement(_fieldErrors2['default'], { errors: this.state.errors })
    );
  }
});
module.exports = exports['default'];