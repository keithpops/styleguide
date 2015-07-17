import React from 'react';

const {
  findDOMNode,
  Component,
} = React;

class OutsideClick extends Component {

  constructor(props) {
    super(props);
    this._handleDocumentClick = this._handleDocumentClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this._handleDocumentClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this._handleDocumentClick);
  }

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

  render() {
    return this.props.children;
  }
}

OutsideClick.propTypes = {
  onClick: React.PropTypes.func.isRequired,
};

export default OutsideClick;
