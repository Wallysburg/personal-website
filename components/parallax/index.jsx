import React, { Component, PropTypes } from 'react';

import Background from './components/background';
import Content from './components/content';

export default class Parallax extends Component {

  static propTypes = {
    speedDivision: PropTypes.number,
    backgroundStyle: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      speedDivision: props.speedDivision || 4,
      backgroundStyle: props.backgroundStyle || '',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.calcTranslation.bind(this), 10);

    this.background.background.setAttribute('style', 'width: 100%; top: 0; bottom: 0; background-size: cover ;background-position: 50% 0; background-repeat: no-repeat;');

    Object.keys(this.state.backgroundStyle).forEach((key) => {
      this.background.background.style[key] = this.state.backgroundStyle[key];
    });
  }

  componenetWillUnmount() {
    window.removeEventListener('scroll', this.calcTranslation);
  }

  calcTranslation() {
    const translationValue = (window.scrollY / this.state.speedDivision > 0) ? (window.scrollY / this.state.speedDivision) : 0;
    const translateStyle = `translate3d(0px,${translationValue}px, 0px)`;
    if (this.background) {
      this.background.background.style.transform = translateStyle;
    }
  }

  render() {
    return (
      <div>
        <Background className={this.props.className} ref={background => { this.background = background; }} />
          {this.props.children}
      </div>
    );
  }
}
