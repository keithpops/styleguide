'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dayPicker = require('./day-picker');

var _dayPicker2 = _interopRequireDefault(_dayPicker);

var _monthPicker = require('./month-picker');

var _monthPicker2 = _interopRequireDefault(_monthPicker);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Type = _react2['default'].PropTypes;

exports['default'] = _react2['default'].createClass({

  displayName: "DatePicker",

  propTypes: {
    date: Type.object.isRequired,
    maxDate: Type.object,
    minDate: Type.object,
    onChangeDate: Type.func.isRequired,
    show: Type.bool,
    zIndex: Type.number
  },

  getInitialState: function getInitialState() {
    return {
      visibleMonth: this.props.date.month(),
      visibleYear: this.props.date.year()
    };
  },

  changeMonth: function changeMonth(month, year) {
    this.setState({
      visibleMonth: month,
      visibleYear: year
    });
  },

  changeDate: function changeDate(date) {
    this.props.onChangeDate(date);
  },

  style: function style() {
    return {
      visibility: this.props.show ? 'visible' : 'hidden',
      zIndex: this.props.zIndex
    };
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: 'datepicker bg-grey-90 rounded-3 p2 no-select absolute', style: this.style() },
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_monthPicker2['default'], { maxDate: this.props.maxDate,
          minDate: this.props.minDate,
          onChangeMonth: this.changeMonth,
          visibleMonth: this.state.visibleMonth,
          visibleYear: this.state.visibleYear }),
        _react2['default'].createElement(_dayPicker2['default'], { date: this.props.date,
          maxDate: this.props.maxDate,
          minDate: this.props.minDate,
          onChangeDate: this.changeDate,
          visibleMonth: this.state.visibleMonth,
          visibleYear: this.state.visibleYear })
      )
    );
  }
});
module.exports = exports['default'];