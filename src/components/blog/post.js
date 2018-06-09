
import React from 'react';
import FadeIn from 'react-fade-in';
import Spinner from 'react-spinkit';
import MetaTags from 'react-meta-tags';
import ReactMarkdown from 'react-markdown';
import { Row, Column } from 'react-foundation/lib';

import { AnimatedWrapper, truncate } from '../common';
import DisqusComments from './disqus-comments';


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: null };
  }

  componentWillMount() {
    const { slug } = this.props.match.params;
    window.fetch(`${window.location.protocol}//beta.ratamero.com/post/${slug}/`)
      .then((data) => {
        data.json().then((jsonData) => {
          this.setState({ post: jsonData });
        });
      });
  }

  render() {
    const { post } = this.state;
    if (post) {
      return (
        <div className="post">
          <MetaTags>
            <title>{post.title} — luciano@ratamero.com</title>
            <meta name="description" content={truncate(post.summary, 160, true)} />
            <meta name="keywords" content={post.tags} />
          </MetaTags>
          <FadeIn>
            <Row>
              <Column small={12} medium={8} offsetOnMedium={2}>
                <h2>{post.title}</h2>
                <p>{post.pub_date}</p>
                <ReactMarkdown escapeHtml={false} source={post.body} />
                <div id="disqus_thread" />
                <DisqusComments slug={post.slug} />
              </Column>
            </Row>
          </FadeIn>
        </div>
      );
    }
    return (
      <div className="post" style={{ textAlign: 'center' }}>
        <Spinner name="line-scale" fadeIn="none" />
      </div>
    );
  }
}

export default AnimatedWrapper(Post);
