import React from 'react';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "FieldNumber",

  propTypes: {
    disabled: Type.bool,
    extraClasses: Type.arrayOf(Type.string),
    label: Type.string,
    readOnly: Type.bool,
    units: Type.string
  },

  getDefaultProps() {
    return {
      readOnly: false,
      inactive: false
    }
  },

  label() {
    if(this.props.label) {
      return <label className="px2 mb1">{this.props.label}</label>;
    }
  },

  units(){
    if(this.props.units) {
      return <span className={this.unitsClasses()}>{this.props.units}</span>
    }
  },

  unitsClasses() {
    var classes = ['units'];
    classes.push('grey-50');
    return classes.join(' ');
  },

  classes() {
    var classes = ['number-field'];
    if(this.props.disabled) {
      classes.push('disabled');
    }
    classes.push(this.props.extraClasses)
    return classes.join(' ');
  },

  render() {
    return  <div className={this.classes()}>
        {this.label()}
        <br/>
        <input disabled={this.props.disabled}
               type="number"
               readOnly={this.props.readOnly}/>
        <span className='icon-arrow-double relative'></span>
        {this.units()}
      </div>
  }
});
