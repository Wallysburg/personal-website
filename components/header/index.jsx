import React, { Component } from 'react';
import { prefixLink } from 'gatsby-helpers';

import Headroom from 'react-headroom';
import Logo from 'components/Logo';
import Wrapper from 'components/wrapper';

import { IndexLink, Link } from 'react-router';

import styles from './styles.module.css';

export default class Header extends Component {
  render() {
    return (
      <Headroom wrapperStyle={{ position: 'fixed' }}>
      <div className={styles.header}>
        <Wrapper>
          <div className={styles.navMenu}>
            <h1 className={styles.title}>
              <Link to={prefixLink('/about/')}>About</Link>
            </h1>
            <h1 className={styles.title}>
              <Link to={prefixLink('/work/')}>Work</Link>
            </h1>
            <h1 className={styles.title}>
              <Link to={prefixLink('/blog/')}>Blog</Link>
            </h1>
            <h1 className={styles.title}>
              <Link to={prefixLink('/music/')}>Music </Link>
            </h1>
          </div>
          <div className={styles.icon}>
            <IndexLink to={prefixLink('/')}>
              <Logo height={40} width={40} />
            </IndexLink>
          </div>
        </Wrapper>
      </div>
      </Headroom>

    );
  }
}

