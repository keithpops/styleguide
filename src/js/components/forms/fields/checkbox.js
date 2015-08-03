import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "Checkbox",

  propTypes: {
    disabled: Type.bool,
    extraClasses: Type.arrayOf(Type.string),
    fieldColor: Type.oneOf(['light', 'dark']),
    label: Type.string.isRequired,
    name: Type.string.isRequired,
    placeholder: Type.string,
    readOnly: Type.bool,
    checked: Type.bool
  },

  getDefaultProps() {
    return {
      name: '',
      checked: false,
      disabled: false,
      fieldColor: 'light',
      readonly: false
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
    var classes = ['checkbox-field'];
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
    return <div className={this.classes()}>
        <label>
          <input
            checked={this.state.isChecked}
            className={this.fieldClasses()}
            disabled={this.props.disabled}
            name={this.props.name}
            onChange={this.onChange}
            readOnly={this.props.readOnly}
            type="checkbox"
          >
          </input>
          <span className="label-right">{this.props.label}</span>
        </label>
      </div>
  }
});
