import React, { Component } from 'react';
import { prefixLink } from 'gatsby-helpers';
import Particles from 'react-particles-js';

import Fullscreen from 'components/fullscreen';
import Meta from 'components/meta';
import { Link } from 'react-router';

import styles from './styles.module.css';
import { particlesConfig } from 'data/particles.json';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Meta />
        <section className={styles.intro} firstItem>
          <h1>
              Charlie Davis
          </h1>
          <h2>
            <Link className={styles.link} to={prefixLink('/work/')}>Web Application Developer</Link>
          </h2>
          <Particles
            className={styles.particles}
            params={particlesConfig}
          />
        </section>
      </div>
    );
  }
}
