/* eslint-disable */

import React from 'react';

import * as Animated from 'animated/lib/targets/react-dom';


export const AnimatedWrapper = WrappedComponent => class Wrapper
  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: new Animated.Value(0),
    };
  }
  componentWillMount() {
    Animated.spring(this.state.animate, { toValue: 1, duration: 500 }).start();
  }
  componentWillUnmount() {
    Animated.spring(this.state.animate, { toValue: 0, duration: 500 }).start();
  }
  render() {
    const style = {
      opacity: Animated.template`${this.state.animate}`,
      transform: Animated.template`
    translate3d(0,${this.state.animate.interpolate({
    inputRange: [0, 1],
    outputRange: ['12px', '0px'],
  })},0)
   `,
    };
    return (
      <Animated.div style={style} className="animated-page-wrapper">
        <WrappedComponent {...this.props} />
      </Animated.div>
    );
  }
};

export function truncate(word, n, useWordBoundary){
    if (word.length <= n) { return word; }
    var subString = word.substr(0, n-3);
    return (useWordBoundary
       ? subString.substr(0, subString.lastIndexOf(' '))
       : subString) + "...";
}
