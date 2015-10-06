import React from 'react';

import ActionBar from './bars/action-bar';

import ViewStore from './stores/view-store';
import ViewActions from './actions/view-actions';

import VelocityTransitionGroup from 'velocity-react/velocity-transition-group';

const {
  createClass,
  createElement,
  render,
} = React;


var View = createClass({

  displayName: "View",

  getInitialState() {
    return ViewStore.getState();
  },


  componentDidMount() {
    ViewStore.listen(this.onChange);
  },


  componentWillUnmount() {
    ViewActions.scrollWatch(false);
    ViewStore.unlisten(this.onChange);
  },


  onChange(state) {
    this.setState(state);
  },


  actionBar() {
    const {
      action,
    } = this.state.bars;

    if (action.use === true && action.visible === true) {
      return <ActionBar key="action-bar" {...action} />
    } else {
      return null
    }
  },


  render() {
    return (
      <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
        {this.actionBar()}
      </VelocityTransitionGroup>
    );
  }

});


module.exports = View;
