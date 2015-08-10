import React from 'react';

const {
  createClass,
} = React;

export default createClass({

  displayName: "Slider",

  render() {

    return <div className="flex">
      <div className="flex-auto bg-grey-5 rounded-1" style={{height: '10px'}}></div>
      <div className="circle bc-blue-secondary bg-blue bw-3 b" style={{height: '8px', width: '8px'}}></div>
    </div>;
  }
});
