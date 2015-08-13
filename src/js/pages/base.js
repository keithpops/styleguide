import React from 'react';
import Styleguide from '../styleguide';
import Colors from './colors';
import Typography from './base/typography';
import P from '../components/paragraph';

let D = React.DOM;

export default React.createClass({
  displayName: "BasePage",

  render() {
    return (
      <Styleguide title="Base Styles">
        <div title="Text Components" description="React Text Components!">
          <P>This is a paragraph</P>
          <P size="small">This is a small paragraph</P>
          <P align="center">This is a center-aligned paragraph</P>
          <P align="right">This is a right-aligned paragraph</P>
          <P size="small" align="center">This is a small, center-aligned paragraph</P>
          <P size="small" align="right">This is a small, right-aligned paragraph</P>
        </div>

        <div title="Typography" description="Typographical settings">
          <Typography />       
        </div>

        <div title="Colors" description="Namely's Colors">
          <Colors />  
        </div>
      </Styleguide>
    );
  }
});
