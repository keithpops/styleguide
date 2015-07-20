// import ready form components

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fieldsCheckbox = require('./fields/checkbox');

var _fieldsCheckbox2 = _interopRequireDefault(_fieldsCheckbox);

var _fieldsDate = require('./fields/date');

var _fieldsDate2 = _interopRequireDefault(_fieldsDate);

var _fieldsNumber = require('./fields/number');

var _fieldsNumber2 = _interopRequireDefault(_fieldsNumber);

var _fieldsRadio = require('./fields/radio');

var _fieldsRadio2 = _interopRequireDefault(_fieldsRadio);

var _fieldsSimpleSelect = require('./fields/simple-select');

var _fieldsSimpleSelect2 = _interopRequireDefault(_fieldsSimpleSelect);

var _fieldsText = require('./fields/text');

var _fieldsText2 = _interopRequireDefault(_fieldsText);

var _fieldsTextarea = require('./fields/textarea');

var _fieldsTextarea2 = _interopRequireDefault(_fieldsTextarea);

exports['default'] = {
  Checkbox: _fieldsCheckbox2['default'],
  Date: _fieldsDate2['default'],
  Number: _fieldsNumber2['default'],
  Radio: _fieldsRadio2['default'],
  SimpleSelect: _fieldsSimpleSelect2['default'],
  Text: _fieldsText2['default'],
  Textarea: _fieldsTextarea2['default']
};
module.exports = exports['default'];