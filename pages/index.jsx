import React, { Component } from 'react';
import { prefixLink } from 'gatsby-helpers';
import Particles from 'react-particles-js';

import Fullscreen from 'components/fullscreen';
import Meta from 'components/meta';
import Wrapper from 'components/wrapper';
import { Link } from 'react-router';

import styles from './styles.module.css';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Fullscreen className={styles.intro} firstItem>
          <Wrapper>
            <Particles
              className={styles.particles}
              params={{
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: '#000',
                      blur: 5,
                    },
                  },
                },
              }}
            />
            <h1>
              Hi. I’m Charlie.
              <br />
              <br />
              I’m a web developer.
              <br />
              <br />
              Check out my <Link className={styles.link} to={prefixLink('/work/')}>work</Link>.
            </h1>
          </Wrapper>
        </Fullscreen>
      </div>
    );
  }
}
