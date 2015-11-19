'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var Type = _react2['default'].PropTypes;

exports['default'] = _react2['default'].createClass({
  displayName: "SimpleSelect",

  propTypes: {
    disabled: Type.bool,
    fieldColor: Type.oneOf(['light', 'dark']),
    hasError: Type.bool,
    includeBlank: Type.bool,
    name: Type.string,
    onChange: Type.func,
    options: Type.oneOfType([Type.object, Type.array]).isRequired,
    placeholder: Type.string,
    value: Type.oneOfType([Type.string, Type.number])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      fieldColor: 'light',
      hasError: false,
      onChange: function onChange() {}
    };
  },

  getInitialState: function getInitialState() {
    return {
      show_options: false,
      value: this.props.value || null
    };
  },

  componentDidMount: function componentDidMount() {
    document.addEventListener('click', this.onDocumentClick);
  },

  componentWillUnmount: function componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick);
  },

  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    if (this.state.value != prevState.value) this.props.onChange();
  },

  arrowClasses: function arrowClasses() {
    var classes = ['h6', 'ml1', 'relative'];
    classes.push(this.props.disabled ? 'grey-50' : 'blue-70');
    classes.push(this.state.show_options ? 'icon-arrow-up' : 'icon-arrow-down');
    return classes.join(' ');
  },

  onClickOption: function onClickOption(option) {
    this.setState({
      value: option,
      show_options: false
    });
  },

  onClickOptionEmpty: function onClickOptionEmpty() {
    this.setState({
      value: null,
      show_options: false
    });
  },

  onDocumentClick: function onDocumentClick(e) {
    if (!this.getDOMNode().contains(e.target)) {
      this.setState({ show_options: false });
    }
  },

  onClickValue: function onClickValue() {
    if (!this.props.disabled) this.setState({ show_options: !this.state.show_options });
  },

  optionsArray: function optionsArray() {
    var options = this.props.options;
    return typeof options === 'object' && Array.isArray(options) ? options : false;
  },

  optionsClasses: function optionsClasses() {
    var classes = ['absolute', 'bb', 'bl', 'br', 'bw-1', 'left-0', 'right-0', 'rounded-bottom-2'];
    classes.push(this.state.show_options ? 'bc-grey-50' : 'bc-grey-25');
    return classes.join(' ');
  },

  optionsObject: function optionsObject() {
    var options = this.props.options;
    return typeof options === 'object' && !Array.isArray(options) ? options : false;
  },

  renderOptions: function renderOptions() {
    if (!this.props.disabled) {
      var optionClasses = 'bg-white nowrap option pointer py1 px3';

      var emptyOption = _react2['default'].createElement(
        'div',
        { className: optionClasses + " grey-50", onClick: this.onClickOptionEmpty },
        this.props.placeholder ? this.props.placeholder : "--"
      );

      if (this.optionsObject()) {
        var options = this.renderOptionsFromObject(optionClasses);
      } else {
        var options = this.renderOptionsFromArray(optionClasses);
      }

      if (this.state.show_options) {
        return _react2['default'].createElement(
          'div',
          { className: this.optionsClasses(), style: { zIndex: 1000 } },
          this.props.includeBlank ? emptyOption : false,
          options
        );
      }
    } else {
      return false;
    }
  },

  renderOptionsFromArray: function renderOptionsFromArray(classes) {
    var _this = this;

    return this.props.options.map(function (option, index) {
      return _react2['default'].createElement(
        'div',
        { className: classes + ' grey-75',
          key: index,
          onClick: _this.onClickOption.bind(_this, option) },
        option
      );
    });
  },

  renderOptionsFromObject: function renderOptionsFromObject(classes) {
    var _this2 = this;

    return Object.keys(this.props.options).map(function (key, index) {
      return _react2['default'].createElement(
        'div',
        { className: classes + ' grey-75',
          key: index,
          onClick: _this2.onClickOption.bind(_this2, key) },
        _this2.props.options[key]
      );
    });
  },

  renderValue: function renderValue() {
    var value = this.optionsArray() ? this.state.value : this.props.options[this.state.value];
    var arrowStyle = { top: 1, right: 3, fontSize: '12px', height: '19px' };

    return _react2['default'].createElement(
      'div',
      { className: this.valueClasses(), onClick: this.onClickValue },
      _react2['default'].createElement(
        'div',
        { className: 'nowrap mr1' },
        value ? value : this.props.placeholder
      ),
      _react2['default'].createElement('div', { className: this.arrowClasses(), style: arrowStyle })
    );
  },

  valueBorderClass: function valueBorderClass() {
    if (this.props.hasError) {
      return 'bc-orange bc-orange-hover';
    } else if (this.props.disabled) {
      if (this.props.fieldColor == 'dark') {
        return 'bc-grey-10';
      } else {
        return 'bc-grey-10';
      }
    } else if (this.state.show_options) {
      return 'bc-grey-50';
    } else {
      return this.props.fieldColor == 'light' ? 'bc-grey-25' : 'bc-white';
    }
  },

  valueClasses: function valueClasses() {
    var classes = ['simple-select', 'b', 'bw-1', 'flex', 'flex-justify', 'p1', 'grey-75'];
    classes.push(this.valueBorderClass());
    classes.push(this.state.show_options ? 'rounded-top-2' : "rounded-2");
    if (this.props.disabled) {
      classes.push('disabled');
      classes.push(this.props.fieldColor == 'light' ? 'grey-10 bg-grey-10' : 'grey-50 bg-grey-15');
    } else {
      classes.push('pointer bg-white');
    }
    return classes.join(' ');
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: 'relative simple-select' },
      _react2['default'].createElement('input', { type: 'hidden',
        name: this.props.name,
        value: this.state.value,
        disabled: this.props.disabled }),
      this.renderValue(),
      this.renderOptions()
    );
  }
});
module.exports = exports['default'];