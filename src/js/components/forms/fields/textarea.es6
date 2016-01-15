import React from 'react';

const Type = React.PropTypes;

export default React.createClass({

  displayName: "FieldTextarea",

  propTypes: {
    disabled: Type.bool,
    extraClasses: Type.arrayOf(Type.string),
    label: Type.string,
    placeholder: Type.string,
    readOnly: Type.bool,
    expandable: Type.bool
  },

  getDefaultProps() {
    return {
      readOnly: false,
      expandable: false
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
        <textarea disabled={this.props.disabled}
                  readOnly={this.props.readOnly}
                  placeholder={this.props.placeholder}
                  onChange={this.props.expandable ? this.expand : null} />
      </div>
  }
});
