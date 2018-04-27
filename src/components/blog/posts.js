/* eslint-disable */

import React from 'react';
import Spinner from 'react-spinkit';
import MetaTags from 'react-meta-tags';
import queryString from 'query-string';
import ReactPaginate from 'react-paginate';
import { Row, Column, Reveal } from 'react-foundation/lib';

import { AnimatedWrapper } from '../common';
import PostSummary from './post-summary';


class Posts extends React.Component {
  constructor(props) {
    super(props);

    const currentPage = parseInt(queryString.parse(props.location.search).page) || 1;
    this.state = {
      isLoading: false,
      posts: null,
      currentPage: currentPage,
      pageCount: currentPage
    };

    this.fetchPosts = this.fetchPosts.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentDidMount(){
    if (!this.state.isLoading) {
      this.fetchPosts(this.state.currentPage);
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (!this.state.isLoading && this.state.currentPage !== prevState.currentPage) {
      this.fetchPosts(this.state.currentPage);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState){
    const currentPage = parseInt(queryString.parse(nextProps.location.search).page);
    console.log(currentPage);
    if (!prevState.isLoading && prevState.currentPage !== currentPage && !isNaN(currentPage)) {
      return { ...prevState, currentPage };
    }
    return null;
  }

  fetchPosts(page){
    window.scrollTo(0, 0);
    this.setState({'isLoading': true}, () => {
      window.fetch(`https://ratamero-blog-api.herokuapp.com/posts/?page=${page || 1}`)
        .then((data) => {
          data.json().then((jsonData) => {
            this.setState({
              isLoading: false,
              posts: jsonData.posts,
              currentPage: parseInt(jsonData.current_page),
              pageCount: parseInt(jsonData.page_count),
            });
          });
        });
    });
  }

  onPageChange(currentPage){
    const nextPage = currentPage.selected + 1;
    this.setState({ currentPage: nextPage },
    () => this.props.history.push(`/blog/?page=${nextPage}`));
  }

  render() {
    const { isLoading, posts, currentPage } = this.state;
    return (
      <div id="posts">
        <MetaTags>
          <title>blog — luciano@ratamero.com</title>
          <meta name="description" content="pt_BR blog about everything web related" />
          <meta name="keywords" content="Luciano Ratamero, blog, python, javascript, js, developer, web, django, react, apistar" />
        </MetaTags>
        <Row>
          <Column small={12} medium={8} offsetOnMedium={2}>
            {!isLoading && posts
              ? (
                <div>
                  {posts.map((post, i) => <PostSummary key={i} post={post} />)}
                  <ReactPaginate
                    containerClassName="paginator"
                    previousLabel="<"
                    nextLabel=">"
                    pageCount={this.state.pageCount}
                    initialPage={currentPage - 1}
                    pageRangeDisplayed={1}
                    marginPagesDisplayed={2}
                    onPageChange={this.onPageChange}
                    disableInitialCallback
                  />
                </div>
              )
              : <div style={{ textAlign: 'center' }}><Spinner name="line-scale" /></div>
            }
          </Column>
        </Row>
      </div>
    );
  }
}

export default AnimatedWrapper(Posts);
