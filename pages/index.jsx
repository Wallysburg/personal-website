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
              Charlie Davis
            </h1>
              <br />
              <br />
            <h2>
              <Link className={styles.link} to={prefixLink('/work/')}>Web Application Developer</Link>
            </h2>
          </Wrapper>
        </Fullscreen>
      </div>
    );
  }
}
