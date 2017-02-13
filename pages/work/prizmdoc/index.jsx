import React, { Component } from 'react';
import { projects } from 'data/projects.json';

import Carousel from 'components/carousel';
import Iphone from 'components/iphone';
import Macbook from 'components/macbook';
import OutboundLink from 'components/outbound-link';
import Wrapper from 'components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from 'components/project';

import coverImage from 'components/project/img/logo-prizm-doc.png';

const images = [
  {
    src: require('./img/usage1.gif'),
    description: 'Chadstone dining',
  },
  {
    src: require('./img/usage2.gif'),
    description: 'Chadstone home',
  },
  {
    src: require('./img/usage4.gif'),
    description: 'Chadstone services',
  },
  {
    src: require('./img/store.jpg'),
    description: 'Chadstone store',
  },
  {
    src: require('./img/whats-on.jpg'),
    description: 'Chadstone what\'s on',
  },
];


const mobileImages = [
  {
    src: require('./img/usage1.gif'),
    description: 'Chadstone about us mobile',
  },
  {
    src: require('./img/usage2.gif'),
    description: 'Chadstone article mobile',
  },
  {
    src: require('./img/mobile-directions.jpg'),
    description: 'Chadstone directions mobile',
  },
  {
    src: require('./img/mobile-shopping.jpg'),
    description: 'Chadstone shopping mobile',
  },
  {
    src: require('./img/mobile-store.jpg'),
    description: 'Chadstone store mobile',
  },
];


export default class PrizmDoc extends Component {
  render() {
    const project = projects.find(_project => _project.slug === 'prizmdoc');

    const image = (
      <img src={coverImage} alt="Cover" />
    );

    const iphone = (
      <Iphone>
        <Carousel images={mobileImages} />
      </Iphone>
    );

    return (
      <ProjectPage project={project}>
        <ProjectIntro project={project} media={image} />
        <ProjectDescription media={iphone}>
          <h3>Project</h3>
          <p>Soon to be unveiling the mall’s new shopping, dining &amp; entertainment precincts, Chadstone was keen to revisit their online presence and website in line with the new development. <OutboundLink to="http://inlight.com.au">Inlight</OutboundLink> was tasked with building a new website that offered information on stores, entertainment, events and an intuitive mapping solution.</p>

          <h3>Role</h3>
          <p>I was part of a full-stack development team that helped write features for the front-end viewer as well as REST APIs for the extenstive PrizmDoc Services Backend.</p>
        </ProjectDescription>
        <Wrapper>
          <Macbook>
            <Carousel images={images} />
          </Macbook>
        </Wrapper>
      </ProjectPage>
    );
  }
}
