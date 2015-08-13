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

  render() {

    return <p>{this.props.children}</p>;
  }

});


export default Paragraph;
