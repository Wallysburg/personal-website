import React, { Component, PropTypes } from 'react';

export default class ParallaxContainer extends Component {


  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(React.Children.toArray(this.props.children));

    console.log(this.props.children);
    const parallaxContainterStyle = {
      perspective: '1px',
      height: '100%',
      width: '100%',
      'overflowX': 'hidden',
      'overflowY': 'auto',
    };

    return (
      <div style={parallaxContainterStyle}>
        { this.props.children }
      </div>
    );
  }
}


