import React from 'react';

React.createClass

const {
  createClass,
  PropTypes,
} = React;


const Paragraph = createClass({

  displayName: "Paragraph",

  propTypes: {
    align: PropTypes.oneOf([null, 'right', 'center']),
    size: PropTypes.oneOf([null, 'small']),
  },

  renderChildren() {

    let {
      children,
      size,
    } = this.props;

    if (size) {

      return <small>{children}</small>;

    } else {
      return children;
    }

  },

  render() {

    return <p>{this.props.children}</p>;
  }

});


export default Paragraph;
