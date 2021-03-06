import React, { Component } from 'react';

import ContentPage from 'components/content-page';
import Contact from 'components/contact';
import Meta from 'components/meta';
import Wrapper from 'components/wrapper';

export default class _Contact extends Component {
  render() {
    return (
      <ContentPage>
        <Meta title="Contact" description="If you have an upcoming project you'd like to talk about or are looking to collaborate and build something special, say hello and send an email." />
        <Wrapper>
          <Contact />
        </Wrapper>
      </ContentPage>
    );
  }
}
