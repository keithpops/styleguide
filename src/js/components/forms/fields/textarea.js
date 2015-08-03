import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "TextArea",

  propTypes: {
    disabled: Type.bool,
    extraClasses: Type.arrayOf(Type.string),
    fieldColor: Type.oneOf(['light', 'dark']),
    label: Type.string,
    name: Type.string.isRequired,
    placeholder: Type.string,
    readOnly: Type.bool,
    expandable: Type.bool
  },

  getDefaultProps() {
    return {
      fieldColor: 'light',
      readOnly: false,
      expandable: false,
      name: ''
    }
  },

  label() {
    if(this.props.label) {
      return <label htmlFor={this.props.id} className="px2 mb1">{this.props.label}</label>;
    }
  },

  expand(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  },

  fieldClasses() {
    var classes = [];
    classes.push('field-' + this.props.fieldColor);
    return classes.join(' ');

  },

  classes() {
    var classes = ['textarea'];
    if(this.props.readOnly) {
      classes.push('read-only');
    }
    if(this.props.disabled) {
      classes.push('disabled');
    }
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  render() {
    return  <div className={this.classes()}>
        {this.label()}
        <br/>
        <textarea
          className={this.fieldClasses()}
          disabled={this.props.disabled}
          name={this.props.name}
          readOnly={this.props.readOnly}
          placeholder={this.props.placeholder}
          onChange={this.props.expandable ? this.expand : null}
        />
      </div>
  }
});
