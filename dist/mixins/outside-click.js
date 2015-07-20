'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var findDOMNode = _react2['default'].findDOMNode;
var Component = _react2['default'].Component;

var OutsideClick = (function (_Component) {
  _inherits(OutsideClick, _Component);

  function OutsideClick(props) {
    _classCallCheck(this, OutsideClick);

    _get(Object.getPrototypeOf(OutsideClick.prototype), 'constructor', this).call(this, props);
    this._handleDocumentClick = this._handleDocumentClick.bind(this);
  }

  _createClass(OutsideClick, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('click', this._handleDocumentClick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('click', this._handleDocumentClick);
    }
  }, {
    key: '_handleDocumentClick',
    value: function _handleDocumentClick(e) {
      var target = e.target;
      var component = findDOMNode(this);

      if (component === target || component.contains(target)) {
        return true;
      } else {
        if (this.props.onClick) {
          this.props.onClick(e);
        } else {
          throw new Error('handleOutsideClick is not a defined method in this component.');
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return OutsideClick;
})(Component);

OutsideClick.propTypes = {
  onClick: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = OutsideClick;
module.exports = exports['default'];