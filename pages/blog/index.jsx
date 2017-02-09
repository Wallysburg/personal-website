import React from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import moment from 'moment';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import access from 'safe-access';

import ContentPage from 'components/content-page';
import Wrapper from 'components/wrapper';

function verifyPageIsBlogPostMarkdown(page) {
  return (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post')
}

class Blog extends React.Component {

  render() {
    const pageLinks = [];
        // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.date')).reverse();

    sortedPages.forEach((page) => {
      if (verifyPageIsBlogPostMarkdown(page)) {
        const title = access(page, 'data.title') || page.path;
        const description = access(page, 'data.description');
        const datePublished = access(page, 'data.date');
        const category = access(page, 'data.category');

        pageLinks.push(
          <div className="blog-post">
            <time dateTime={moment(datePublished).format('MMMM D, YYYY')}>
              { moment(datePublished).format('MMMM YYYY') }
            </time>
            <span style={{ padding: '5px' }} />
            <span className="blog-category">{ category }</span>
            <h2>
              <Link style={{ borderBottom: 'none' }} to={prefixLink(page.path)} > { title } </Link>
            </h2>
            <p dangerouslySetInnerHTML={{ __html: description }} />
            <Link className="readmore" to={prefixLink(page.path)}> Read</Link>
          </div>
        );
      }
    });

    return (
      <ContentPage>
        <Wrapper>
          <Helmet title={'Blog'} />
          <div className="content">
            <div className="main">
              <div className="main-inner">
                { pageLinks }
              </div>
            </div>
          </div>
        </Wrapper>
      </ContentPage>
    );
  }
}

Blog.propTypes = {
  route: React.PropTypes.object,
};

export default Blog;

