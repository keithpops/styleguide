import React from 'react';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "FieldCheckbox",

  propTypes: {
    disabled: Type.bool,
    extraClasses: Type.arrayOf(Type.string),
    label: Type.string.isRequired,
    placeholder: Type.string,
    readOnly: Type.bool,
    checked: Type.bool
  },

  getDefaultProps() {
    return {
      checked: false,
      disabled: false,
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
          <input checked={this.state.isChecked}
                 disabled={this.props.disabled}
                 onChange={this.onChange}
                 readOnly={this.props.readOnly}
                 type="checkbox" />
          <span className="label-right">{this.props.label}</span>
        </label>
      </div>
  }
});
