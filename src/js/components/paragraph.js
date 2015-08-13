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

  alignment(string) {
    if (string === "right") {
      return "right-align"
    } else if (string === "center") {
      return "center"
    }
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
