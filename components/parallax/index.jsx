import React, { Component, PropTypes } from 'react';

function calculateTranslation(value) {
  return (window.scrollY / value > 0) ? (window.scrollY / value) : 0;
}

export default class Parallax extends Component {

  static propTypes = {
    backgroundSpeedDivision: PropTypes.number,
    contentSpeedDivision: PropTypes.number,
    backgroundStyle: PropTypes.object,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = {
      backgroundSpeedDivision: props.backgroundSpeedDivision || 4,
      contentSpeedDivision: props.contentSpeedDivision || 3,
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
    const backgroundTranslationValue = calculateTranslation(this.state.backgroundSpeedDivision);
    const backgroundTranslateStyle = `translate3d(0px,${backgroundTranslationValue}px, 0px)`;
    const contentTranslationValue = calculateTranslation(this.state.contentSpeedDivision);
    const contentTranslationStyle = `translate3d(0px,${contentTranslationValue}px, 0px)`;

    if (this.background) {
      this.background.style.transform = backgroundTranslateStyle;
    }

    if (this.content) {
      this.content.style.transform = contentTranslationStyle;
    }
  }

  render() {
    return (
      <div>
        <div ref={div => { this.background = div; }}>
          <div ref={div => { this.content = div; }}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}


