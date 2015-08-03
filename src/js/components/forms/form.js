import React from 'react';
import getFormData from 'get-form-data';
import assign from 'react/lib/Object.assign';


const {
  createClass,
  PropTypes,
} = React;

const getElementData = getFormData.getNamedFormElementData;


const Form = createClass({

  displayName: "Form",

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
    var props = assign({}, this.props, {
      onChange: this.props.onChange && this._onChange,
      onSubmit: this.props.onSubmit && this._onSubmit
    });

    return <form {...props}>{this.props.children}</form>;
  }


});


export default Form;
