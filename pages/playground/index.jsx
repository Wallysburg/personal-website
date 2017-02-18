import React, { Component } from 'react';
import ParallaxBackground from 'components/parallax-background';

import styles from './styles.module.css';

export default class Work extends Component {

  render() {
    const background = {
      backgroundImage: 'url(http://wallpapercave.com/wp/PWPdLDZ.jpg)',
      height: '200px',
    };

    return (
      <div>
        <div />
        <ParallaxBackground backgroundStyle={background}>
          <ParallaxBackground>
            Hey
            <div>
            In Developmenet
            </div>
          </ParallaxBackground>
          <div />
        </ParallaxBackground>
      </div>
    );
  }
}
