import React from 'react';
import 'node-fetch';

const {
  Component,
} = React;

class Form extends Component {

  componentWillMount() {

    fetch("http://echo.jsontest.com/key/value/one/two")
    .then( (res) => {
      this.setState(res.json())
    });

  }

  render() {

    return (
      <div>form {this.state}</div>
    );
  }
}

export default Form;
