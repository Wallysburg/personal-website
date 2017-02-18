import React, { Component } from 'react';
import { prefixLink } from 'gatsby-helpers';
import { ParallaxBackground, ParallaxContainer, ParallaxLayer } from 'components/react-parallax-utilities';


import ContentPage from 'components/content-page';
import Meta from 'components/meta';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';

import { Link } from 'react-router';

import styles from './styles.module.css';

export default class About extends Component {
  render() {
    return (
      <page>
                <ParallaxContainer>

        <ContentPage>
          <Meta title="About" />

          <Wrapper className={styles.pageSection}>
            <ParallaxLayer>

            <h2>About Me</h2>
          </ParallaxLayer>

            <section className={styles.aboutContainer}>
              <div className={styles.aboutText}>
                <p>I’m a web/node/javascript developer currently situated in Tampa, Florida.</p>
                <p> I'll put some shit here about myself eventually</p>
                <p>I currently work at <OutboundLink to="http://accusoft.com/"> Accusoft </OutboundLink> where I am a developer on our <OutboundLink to="https://www.accusoft.com/products/prizmdoc/overview/"> PrizmDoc </OutboundLink>  product Line. If you'd like to get in touch, <Link to={prefixLink('/contact/')}>shoot me a message</Link>.</p>
              </div>
            </section>

          </Wrapper>


        </ContentPage>
            </ParallaxContainer>

        <ContentPage className={styles.page}>
          <Meta title="About" />
            <Wrapper className={styles.pageSection}>
                        <ParallaxBackground>

              <section className={styles.technicalSkills}>
                <h2>Skills</h2>
                <section className={styles.aboutContainer}>
                  <div className={styles.skillItem}>
                    <img src="img/developer.png" className={styles.icon} />
                    <span className={styles.name}>Development</span>
                    <span className={styles.details}>I build very cool web and mobile applications, using the best of the cutting edge technologies available out there.</span>
                  </div>
                  <div className={styles.skillItem}>
                    <img src="img/developer.png" className={styles.icon} />
                    <span className={styles.name}>Scrum Master</span>
                    <span className={styles.details}>I build very cool web and mobile applications, using the best of the cutting edge technologies available out there.</span>
                  </div>
                  <div className={styles.skillItem}>
                    <img src="img/developer.png" className={styles.icon} />
                    <span className={styles.name}>Agile</span>
                    <span className={styles.details}>I build very cool web and mobile applications, using the best of the cutting edge technologies available out there.</span>
                  </div>
                </section>
              </section>
                        </ParallaxBackground>

            </Wrapper>

        </ContentPage>
        <ContentPage className={styles.page}>
          <Meta title="About" />
          <Wrapper className={styles.pageSection}>
            <section className={styles.technicalSkills}>
              <h2>Skills</h2>
              <section className={styles.aboutContainer}>
                <div className={styles.skillItem}>
                  <img src="img/developer.png" className={styles.icon} />
                  <span className={styles.name}>Development</span>
                  <span className={styles.details}>I build very cool web and mobile applications, using the best of the cutting edge technologies available out there.</span>
                </div>
                <div className={styles.skillItem}>
                  <img src="img/developer.png" className={styles.icon} />
                  <span className={styles.name}>Scrum Master</span>
                  <span className={styles.details}>I build very cool web and mobile applications, using the best of the cutting edge technologies available out there.</span>
                </div>
                <div className={styles.skillItem}>
                  <img src="img/developer.png" className={styles.icon} />
                  <span className={styles.name}>Agile</span>
                  <span className={styles.details}>I build very cool web and mobile applications, using the best of the cutting edge technologies available out there.</span>
                </div>
              </section>
            </section>
          </Wrapper>
        </ContentPage>
      </page>
    );
  }
}
