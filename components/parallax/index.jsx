import React, { Component, PropTypes } from 'react';

export default class Parallax extends Component {

  static propTypes = {
    speedDivision: PropTypes.number,
    backgroundStyle: PropTypes.object,
    children: PropTypes.node,
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

    this.background.setAttribute('style', 'width: 100%; top: 0; bottom: 0; background-size: cover ;background-position: 50% 0; background-repeat: no-repeat;');

    Object.keys(this.state.backgroundStyle).forEach((key) => {
      this.background.style[key] = this.state.backgroundStyle[key];
    });

    this.content.style.position = 'absolute';
    this.content.style.left = 0;
    this.content.style.right = 0;
  }

  componenetWillUnmount() {
    window.removeEventListener('scroll', this.calcTranslation);
  }

  calcTranslation() {
    const translationValue = (window.scrollY / this.state.speedDivision > 0) ? (window.scrollY / this.state.speedDivision) : 0;
    const translateStyle = `translate3d(0px,${translationValue}px, 0px)`;
    if (this.background) {
      this.background.style.transform = translateStyle;
    }
  }

  render() {
    return (
      <div ref={div => { this.root = div; }} >
        <div ref={div => { this.background = div; }} />
        <div ref={div => { this.content = div; }} />
      </div>
    );
  }
}
