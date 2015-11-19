'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Type = _react2['default'].PropTypes;

exports['default'] = _react2['default'].createClass({

  displayName: "Modal",

  propTypes: {
    zIndex: Type.number,
    contentColumns: Type.number,
    contentHeight: Type.number,
    contentMinHeight: Type.number,
    disableClickBackground: Type.bool,
    closeModal: Type.func,
    isOpen: Type.bool
  },

  getInitialState: function getInitialState() {
    return {
      isOpen: this.props.isOpen || false
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      zIndex: 1000,
      contentColumns: 9,
      disableClickBackground: false
    };
  },

  clickBackground: function clickBackground() {
    if (!this.props.disableClickBackground) {
      this.props.closeModal();
    }
  },

  clickContent: function clickContent(e) {
    // keeps the content click from bubbling up to outside click
    e.stopPropagation();
  },

  modalBackgroundClasses: function modalBackgroundClasses() {
    var classes = ['anim-fade', 'ease-out', 'modal-background', 'top-0', 'bottom-0', 'left-0', 'right-0', 'fixed', 'flex', 'flex-center'];

    return classes.join(' ');
  },

  modalContentClasses: function modalContentClasses() {
    var classes = ['modal-content', 'mx-auto', 'bg-white', 'relative', 'float-none', 'rounded-3', 'overflow-hidden'];

    classes.push('col-' + this.props.contentColumns);

    return classes.join(' ');
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { ref: 'modal', style: { zIndex: this.props.zIndex }, className: this.modalBackgroundClasses(), onClick: this.clickBackground },
      _react2['default'].createElement(
        'div',
        { className: 'container fill' },
        _react2['default'].createElement(
          'div',
          { onClick: this.clickContent, className: this.modalContentClasses(), style: { height: this.props.contentHeight, minHeight: this.props.contentMinHeight } },
          this.props.children
        )
      )
    );
  }

});
module.exports = exports['default'];