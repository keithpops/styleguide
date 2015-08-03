import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "Radio",

  propTypes: {
    disabled: Type.bool,
    extraClasses: Type.arrayOf(Type.string),
    fieldColor: Type.oneOf(['light', 'dark']),
    label: Type.string,
    name: Type.string.isRequired,
    readOnly: Type.bool,
    checked: Type.bool
  },

  getDefaultProps() {
    return {
      disabled: false,
      fieldColor: 'light',
      readonly: false,
      checked: false,
      name: ''
    }
  },

  getInitialState() {
    return { isChecked: this.props.checked };
  },

  onChange() {
    if(!this.props.readOnly) {
      this.setState({isChecked: !this.state.isChecked})
    }
  },

  fieldClasses() {
    var classes = [];
    classes.push('field-'+this.props.fieldColor);
    return classes.join(' ');
  },

  classes() {
    var classes = ['radio-field'];
    if(this.props.disabled) {
      classes.push('disabled');
    }
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  render() {
    return <div className={this.classes()}>
        <label>
          <input
            disabled={this.props.disabled}
            className={this.fieldClasses()}
            type="radio"
            name={this.props.name}>
          </input>
          <span className="label-right">{this.props.label}</span>
        </label>
      </div>
  }
});
