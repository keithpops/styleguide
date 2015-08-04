import React from 'react';
import getFormData from 'get-form-data';
import assign from 'react/lib/Object.assign';

import 'node-fetch';

import FormStore from './stores/form-store';
import FormActions from './actions/form-actions';

const {
  createClass,
  PropTypes,
} = React;

const getElementData = getFormData.getNamedFormElementData;

const throttleTimer = {};


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

  getInitialState() {
    return FormStore.getState();
  },


  componentDidMount() {
    FormStore.listen(this.onChange);
  },


  componentWillUnmount() {
    FormStore.unlisten(this.onChange);
  },


  onChange(state) {
    this.setState(state);
  },

  throttle(name, change) {

    if (typeof throttleTimer[name] !== "undefined") {
      clearTimeout(throttleTimer[name]);
    }

    throttleTimer[name] = setTimeout( () => {
      console.log(change);

      fetch('http://httpbin.org/post', { method: 'POST', body: JSON.stringify(change) })
        .then(function(res) {
          return res.json();
        }).then(function(json) {
          console.log(json);
        });
    }, 5000);

  },

  _onChange(e) {
    var {form, name} = e.target;
    var data = getElementData(form, name, {trim: this.props.trim});
    var change = {};
    change[name] = data;
    this.throttle(name, change);


    // this.props.onChange(e, name, data, change);
  },

  _onSubmit(e) {
    var data = getFormData(e.target, {trim: this.props.trimOnSubmit || this.props.trim});
    // this.props.onSubmit(e, data);
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
