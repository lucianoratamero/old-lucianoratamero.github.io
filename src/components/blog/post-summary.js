
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';


export default class PostSummary extends React.Component {
  render() {
    const { post } = this.props;
    return (
      <div className="post-summary">
        <h2><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2>
        <p>{post.pub_date}</p>
        <ReactMarkdown escapeHtml={false} source={post.summary} />
      </div>
    );
  }
}
