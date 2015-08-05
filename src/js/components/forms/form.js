import React from 'react';
import assign from 'react/lib/Object.assign';

import 'node-fetch';

import FormStore from './stores/form-store';
import FormActions from './actions/form-actions';

const {
  createClass,
  PropTypes,
} = React;

const throttleTimer = {};


const Form = createClass({

  displayName: "Form",

  propTypes: {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    trim: PropTypes.bool,
    trimOnSubmit: PropTypes.bool,
    endpoint: PropTypes.string,
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


  componentWillMount() {
    if (this.props.endpoint) {
      FormActions.setEndpoint(this.props.endpoint)
    }
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

  _onSubmit(e) {
    var data = getFormData(e.target, {trim: this.props.trimOnSubmit || this.props.trim});
    // this.props.onSubmit(e, data);
  },

  render() {
    var props = assign({}, this.props, {
      onChange: this.props.onChange && FormActions.change,
      onSubmit: this.props.onSubmit && this._onSubmit
    });

    return <form {...props}>{this.props.children}</form>;
  }


});


export default Form;
