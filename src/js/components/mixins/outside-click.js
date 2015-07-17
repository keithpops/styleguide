import React from 'react';

const {
  PropTypes : Type
} = React;

export default {

  componentDidMount() {
    window.addEventListener('click', this._handleDocumentClick);
  },

  componentWillUnmount() {
    window.removeEventListener('click', this._handleDocumentClick);
  },

  _handleDocumentClick(e) {
    const target = e.target;
    const component = this.getDOMNode();

    if ( component === target || component.contains(target) ) {
      return true;
    } else {
      if (this.handleOutsideClick) {
        this.handleOutsideClick(e);
      } else {
        throw new Error("handleOutsideClick is not a defined method in this component.");
      }
    }
  }
}
