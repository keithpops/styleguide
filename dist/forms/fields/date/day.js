"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Type = _react2["default"].PropTypes;

exports["default"] = _react2["default"].createClass({

  displayName: "Day",

  propTypes: {
    onChangeDate: Type.func.isRequired,
    date: Type.object.isRequired,
    disabled: Type.bool,
    selected: Type.bool,
    week: Type.number.isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      highlighted: false,
      selected: false
    };
  },

  classes: function classes() {
    var classes = ["absolute", "day", "day-in-week-" + this.props.date.weekday(), "week-" + this.props.week];

    if (this.props.selected) classes.push('bc-blue-50 bg-grey-95 bw-1 b white');else if (this.props.disabled) classes.push('disabled grey-75 cursor-n');else classes.push('grey-25');

    return classes.join(' ');
  },

  handleClick: function handleClick(e) {
    e.preventDefault();
    if (!this.props.disabled) this.props.onChangeDate(this.props.date);
  },

  render: function render() {
    return _react2["default"].createElement(
      "div",
      { className: this.classes() },
      _react2["default"].createElement(
        "div",
        { className: "semibold center c-fade h4",
          href: "#",
          onClick: this.handleClick },
        this.props.date.date()
      )
    );
  }
});
module.exports = exports["default"];