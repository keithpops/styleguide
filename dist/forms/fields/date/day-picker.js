'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _day = require('./day');

var _day2 = _interopRequireDefault(_day);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Type = _react2['default'].PropTypes;

exports['default'] = _react2['default'].createClass({

  displayName: "DayPicker",

  propTypes: {
    date: Type.object.isRequired,
    maxDate: Type.object,
    minDate: Type.object,
    onChangeDate: Type.func.isRequired,
    visibleMonth: Type.number.isRequired,
    visibleYear: Type.number.isRequired
  },

  arrayByBoundary: function arrayByBoundary(start, end) {
    var out = [];
    for (var i = start; i <= end; i++) {
      out.push(i);
    }
    return out;
  },

  classes: function classes() {
    var classes = ['daypicker', 'relative'];
    if (this.weeksInMonth() > 5) classes.push('extra-week');
    return classes.join(' ');
  },

  mappedMonth: function mappedMonth() {
    var daysArray = this.arrayByBoundary(1, this.startOfVisibleMonth().endOf('month').date()),
        reactObj = this;

    return daysArray.map(function (dayOfMonth) {

      var thisDate = (0, _moment2['default'])({ year: reactObj.props.visibleYear,
        month: reactObj.props.visibleMonth,
        date: dayOfMonth });

      var disabled = !!reactObj.props.minDate && thisDate.isBefore(reactObj.props.minDate) || !!reactObj.props.maxDate && thisDate.isAfter(reactObj.props.maxDate),
          selected = false,
          weekNumber = Math.ceil((dayOfMonth + reactObj.startOfVisibleMonth().weekday()) / 7);

      if (reactObj.props.date.month() == reactObj.props.visibleMonth && reactObj.props.date.year() == reactObj.props.visibleYear) {
        selected = dayOfMonth == reactObj.props.date.date();
      }

      return _react2['default'].createElement(_day2['default'], { date: thisDate,
        disabled: disabled,
        key: 'day-mo-' + dayOfMonth,
        onChangeDate: reactObj.changeDate,
        selected: selected,
        week: weekNumber });
    });
  },

  changeDate: function changeDate(date) {
    this.props.onChangeDate(date);
  },

  startOfVisibleMonth: function startOfVisibleMonth() {
    return (0, _moment2['default'])({ year: this.props.visibleYear, month: this.props.visibleMonth });
  },

  weeksInMonth: function weeksInMonth() {
    return Math.ceil((this.startOfVisibleMonth().weekday() + this.startOfVisibleMonth().endOf('month').date()) / 7);
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: this.classes() },
      _react2['default'].createElement(
        'div',
        null,
        this.mappedMonth()
      ),
      _react2['default'].createElement('div', { className: 'clearfix' })
    );
  }
});
module.exports = exports['default'];