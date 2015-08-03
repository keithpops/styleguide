import React from 'react';
import getFormData from 'get-form-data';

const {
  createClass,
  PropTypes,
} = React;


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

  render() {

    return <div>Test!</div>;
  }
});


export default Form;
