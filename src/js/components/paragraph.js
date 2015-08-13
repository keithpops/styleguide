import React from 'react';

React.createClass

const {
  createClass,
} = React;


const Paragraph = createClass({

  render() {

    return <p>{this.props.children}</p>;
  }

});


export default Paragraph;
