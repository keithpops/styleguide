'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var weekAbbvs = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

var Type = _react2['default'].PropTypes;

exports['default'] = _react2['default'].createClass({

  displayName: "MonthPicker",

  propTypes: {
    maxDate: Type.object,
    minDate: Type.object,
    onChangeMonth: Type.func.isRequired,
    visibleMonth: Type.number.isRequired,
    visibleYear: Type.number.isRequired
  },

  goToNextMonth: function goToNextMonth(e) {
    e.preventDefault();
    if (this.props.visibleMonth == 11) {
      this.props.onChangeMonth(0, this.props.visibleYear + 1);
    } else {
      this.props.onChangeMonth(this.props.visibleMonth + 1, this.props.visibleYear);
    }
  },

  goToPrevMonth: function goToPrevMonth(e) {
    e.preventDefault();
    if (this.props.visibleMonth == 0) {
      this.props.onChangeMonth(11, this.props.visibleYear - 1);
    } else {
      this.props.onChangeMonth(this.props.visibleMonth - 1, this.props.visibleYear);
    }
  },

  showNext: function showNext() {
    var endOfThisMonth = (0, _moment2['default'])({
      year: this.props.visibleYear,
      month: this.props.visibleMonth
    }).endOf('month');

    if (!!this.props.maxDate) {
      return this.props.maxDate.isAfter(endOfThisMonth);
    } else {
      return true;
    }
  },

  showPrev: function showPrev() {
    var startOfThisMonth = (0, _moment2['default'])({
      year: this.props.visibleYear,
      month: this.props.visibleMonth
    });

    if (!!this.props.minDate) {
      return this.props.minDate.isBefore(startOfThisMonth);
    } else {
      return true;
    }
  },

  nextIcon: function nextIcon() {
    if (this.showNext()) {
      return _react2['default'].createElement('div', { className: 'icon-chevron-right absolute top-0 blue-50',
        onClick: this.goToNextMonth });
    } else {
      return '';
    }
  },

  prevIcon: function prevIcon() {
    if (this.showPrev()) {
      return _react2['default'].createElement('div', { className: 'icon-chevron-left absolute top-0 blue-50',
        onClick: this.goToPrevMonth });
    } else {
      return '';
    }
  },

  weekLabels: function weekLabels() {
    return [0, 1, 2, 3, 4, 5, 6].map(function (i) {
      return _react2['default'].createElement(
        'span',
        { className: "grey-50 inline-block center h6 day-in-week-" + i.toString(),
          key: "week-label-" + i.toString() },
        weekAbbvs[i]
      );
    });
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: 'monthpicker relative fill' },
      this.prevIcon(),
      _react2['default'].createElement(
        'div',
        { className: 'center white semibold' },
        months[this.props.visibleMonth] + " " + this.props.visibleYear
      ),
      this.nextIcon(),
      _react2['default'].createElement(
        'div',
        { className: 'mt1 mb1 week-labels relative' },
        this.weekLabels()
      )
    );
  }
});
module.exports = exports['default'];