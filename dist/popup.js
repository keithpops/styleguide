'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var createClass = _reactAddons2['default'].createClass;
var Type = _reactAddons2['default'].PropTypes;
var Children = _reactAddons2['default'].Children;
var cloneWithProps = _reactAddons2['default'].addons.cloneWithProps;
exports['default'] = createClass({
  displayName: 'Popup',

  propTypes: {
    width: Type.oneOf([200, 300, 400])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      width: 300
    };
  },

  getInitialState: function getInitialState() {
    return {
      open: false,
      posX: 'right',
      posY: 'top'
    };
  },

  _showPop: function _showPop() {
    var _state = this.state;
    var posX = _state.posX;
    var posY = _state.posY;

    var baseNode = this.refs.child0.getDOMNode().getBoundingClientRect();
    var baseWidth = baseNode.width;
    var posXLen = baseWidth / 2 + 5;

    var popStyle = {
      width: this.props.width + 'px'
    };
    popStyle[posX] = '-' + posXLen + 'px';
    popStyle[posY] = '140%';

    var triStyle = {};
    triStyle[posX] = '30px';
    triStyle[posY] = '-10px';

    return _reactAddons2['default'].createElement(
      'div',
      { className: 'bg-grey-90 bc-grey-90 p3 rounded-3 absolute', style: popStyle },
      this._children['.1'],
      _reactAddons2['default'].createElement('span', { className: 'triangle-' + posY + ' absolute', style: triStyle })
    );
  },

  _togglePop: function _togglePop(e) {
    var open = this.state.open;

    if (open) {
      this.setState({ open: false });
    } else {
      var node = this.refs.popContainer.getDOMNode().getBoundingClientRect();
      var nodeBottom = node.bottom;
      var nodeRight = node.right;
      var windowHeight = window.innerHeight;
      var windowWidth = window.innerWidth;
      var posX = nodeRight + this.props.width > windowWidth ? 'right' : 'left';
      var posY = nodeBottom + this.props.width > windowHeight ? 'bottom' : 'top';

      this.setState({
        open: true,
        posX: posX,
        posY: posY
      });
    }
  },

  close: function close() {
    this.setState({ open: false });
  },

  render: function render() {
    var index = 0;
    var children = Children.map(this.props.children, function (child) {
      return cloneWithProps(child, {
        ref: 'child' + index++
      });
    });

    this._children = children;

    return _reactAddons2['default'].createElement(
      'div',
      { className: 'relative', ref: 'popContainer' },
      _reactAddons2['default'].createElement(
        'div',
        { onClick: this._togglePop },
        this._children['.0']
      ),
      this.state.open ? this._showPop() : void 0
    );
  }
});
module.exports = exports['default'];