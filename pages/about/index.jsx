import React, { Component } from 'react';
import { prefixLink } from 'gatsby-helpers';

import ContentPage from 'components/content-page';
import Meta from 'components/meta';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';
import { Link } from 'react-router';

import styles from './styles.module.css';

export default class About extends Component {
  render() {
    return (
      <ContentPage>
        <Meta title="About" />
        <Wrapper>
          <div className={styles.intro}>
            <h2>About Me</h2>
            <p>I’m a web/node/javascript developer currently situated in Tampa, Florida.</p>
            <p> I'll put some shit here about myself eventually</p>
            <p>I currently work at <OutboundLink to="http://accusoft.com/"> Accusoft </OutboundLink> where I am a developer on our <OutboundLink to="https://www.accusoft.com/products/prizmdoc/overview/"> PrizmDoc </OutboundLink>  product Line. If you'd like to get in touch, <Link to={prefixLink('/contact/')}>shoot me a message</Link>.</p>
          </div>

          <div className={styles.intro2}>
            <h2>Technical skills</h2>
            <br />
            <h4>Presentation</h4>
            <p>Bootstrap, Css, Html, Less, Postcss, Sass, CSS Modules</p>
            <h4>Javascript</h4>
            <p>Gulp, jQuery, Pug, React, Webpack, Browserify <p> ES6 (or whatever the latest is) </p></p>

            <h4>Server</h4>
            <p>Express, Mongo, Node, SQL</p>

            <h4>Other</h4>
            <p>Git, Perforce, TeamCity</p>
          </div>
        </Wrapper>
      </ContentPage>
    );
  }
}
