/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import Layout, { NoMatch } from './components/base';
import Home from './components/home';
import Talks from './components/talks/';
import About from './components/about/';
import Social from './components/social/';
import Posts from './components/blog/posts';
import Post from './components/blog/post';
import './sass/main.scss';


const firstChild = (props) => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};


ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/social/" component={Social} />
        <Route path="/about/" component={About} />
        <Route path="/blog/:slug/" component={Post} />
        <Route exact path="/talks/" component={Talks} />
        <Route exact path="/blog/" component={Posts} />
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </Layout>
  </BrowserRouter>,
  document.getElementById('root'),
);
