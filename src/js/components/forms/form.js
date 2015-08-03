import React from 'react';
import getFormData from 'get-form-data';

const {
  createClass,
  PropTypes,
} = React;

const getElementData = getFormData.getNamedFormElementData;


const Form = createClass({

  propTypes: {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    trim: PropTypes.bool,
    trimOnSubmit: PropTypes.bool
  },

  getDefaultProps() {
    return {
      trim: false,
      trimOnSubmit: false
    }
  },

  _onChange(e) {
    var {form, name} = e.target;
    var data = getElementData(form, name, {trim: this.props.trim});
    var change = {};
    change[name] = data;
    this.props.onChange(e, name, data, change);
  },

  _onSubmit(e) {
    var data = getFormData(e.target, {trim: this.props.trimOnSubmit || this.props.trim});
    this.props.onSubmit(e, data);
  },

  render() {

    return <div>Test!</div>;
  }
});


export default Form;
