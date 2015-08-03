import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "TextField",

  propTypes: {
    disabled: Type.bool,
    extraClasses: Type.arrayOf(Type.string),
    fieldColor: Type.oneOf(['light', 'dark']),
    label: Type.string,
    name: Type.string.isRequired,
    placeholder: Type.string
  },

  getDefaultProps() {
    return {
      disabled: false,
      fieldColor: 'light',
      inactive: false,
      name: '',
      readOnly: false
    }
  },

  label() {
    if(this.props.label) {
      return <label htmlFor={this.props.id} className="px2 mb1">{this.props.label}</label>;
    }
  },

  fieldClasses() {
    var classes = [];
    classes.push('field-'+this.props.fieldColor);
    return classes.join(' ');
  },

  classes() {
    var classes = ['text-field'];
    if(this.props.disabled) {
      classes.push('disabled');
    }
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  render() {
    return  <div className={this.classes()}>
        {this.label()}
        <input
          className={this.fieldClasses()}
          disabled={this.props.disabled}
          name={this.props.name}
          type="text"
          placeholder={this.props.placeholder}
          readOnly={this.props.inactive || this.props.readOnly}
        ></input>
      </div>
  }
});
