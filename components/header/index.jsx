import React, { Component } from 'react';
import { prefixLink } from 'gatsby-helpers';

import Logo from 'components/Logo';
import Menu from 'components/menu';
import Wrapper from 'components/wrapper';

import { IndexLink, Link } from 'react-router';

import styles from './styles.module.css';
import 'react-github-button/assets/style.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    // @TODO: Remove this event listener when menu isn't open.
    document.addEventListener('keydown', this.handleKeyPress);
  }

  toggleMenu(isVisible) {
    this.setState({ menuActive: typeof isVisible === 'undefined' ? !this.state.menuActive : isVisible });
  }

  handleKeyPress(event) {
    if (event.keyCode === 27) {
      this.toggleMenu(false);
    }
  }
  render() {
    const { menuActive } = this.state;

    return (
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
              <Logo />
            </IndexLink>
          </div>
        </Wrapper>
        <Menu onNavClick={() => this.toggleMenu(false)} active={menuActive} />
      </div>
    );
  }
}

