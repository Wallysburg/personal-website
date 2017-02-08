import React, { Component, PropTypes } from 'react';

import Icon from 'components/icon';
import OutboundLink from 'components/outbound-link';

import styles from './styles.module.css';

export default class Contact extends Component {
  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    return (
      <div className={styles.contact}>
        <h1>{this.props.title || 'I like messages.'}</h1>
        <p className={styles.email}>
          Say hello and send an email:<br />
          <a href="mailto:Charlie.Davis1324@gmail.com?subject=Hello%20Charlie!" className={styles.link}>Charlie.Davis1324@gmail.com</a>
        </p>
        <div className={styles.lineBreak} />
        <ul className={styles.social}>
          <li>
            <OutboundLink to="https://github.com/wallysburg/">
              <Icon name="github" />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink to="https://www.linkedin.com/in/charlie-davis-a803b067">
              <Icon name="linkedin" />
            </OutboundLink>
          </li>
        </ul>
      </div>
    );
  }
}
