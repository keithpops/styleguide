import React from 'react';

const Type = React.PropTypes;

export default React.createClass({
  displayName: "SimpleSelect",

  propTypes: {
    extraClasses: Type.arrayOf(Type.string),
    disabled: Type.bool,
    fieldColor: Type.oneOf(['light', 'dark']),
    label: Type.string,
    multiple: Type.bool,
    name: Type.string.isRequired,
    options: Type.object,
    promptText: Type.string,
    readOnly: Type.bool
  },

  getDefaultProps() {
    return {
      disabled: false,
      fieldColor: 'light',
      inactive: false,
      multiple: false,
      name: '',
      readOnly: false
    }
  },

  label() {
    if(this.props.label) {
      return <label className="px2 mb1">{this.props.label}</label>;
    }
  },

  options() {
    var options = this.props.options;
    if(this.props.promptText) {
      options.unshift({'value':'','label':this.props.promptText});
    }
    return options;
  },

  iconClasses() {
    var classes = ['icon', 'icon-arrow-down', 'absolute', 'right', 'mxn3'];
    this.props.disabled ? classes.push('grey-25') : classes.push('blue');
    return classes.join(' ');
  },

  fieldClasses() {
    var classes = [];
    classes.push('select-'+this.props.fieldColor);
    return classes.join(' ');
  },

  classes() {
    var classes = ['simple-select'];
    if(this.props.disabled) {
      classes.push('disabled');
    }
    classes.push(this.props.extraClasses);
    return classes.join(' ');
  },

  render() {
    return  <div className={this.classes()}>
        {this.label()}
        <div className="relative">
          <select
            className={this.fieldClasses()}
            multiple={this.props.multiple}
            name={this.props.name}
            disabled={this.props.disabled || this.props.inactive || this.props.readOnly}
          >
            {this.options().map(function(option){
              return <option value={option.value}>{option.label}</option>;
            })}
          </select>
          <span className={this.iconClasses()}></span>

        </div>
      </div>
  }
});
