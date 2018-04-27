
import React from 'react';
import { Row, Column } from 'react-foundation/lib';

import { Link } from 'react-router-dom';

import Portrait from '../../static/img/eu_fb_small.jpg';


export default class Layout extends React.Component {
  render() {
    return (
      <div id="layout" style={{ minHeight: window.innerHeight }} className="flex-centralizer container">
        <div id="content">
          <div id="header">
            <Row>
              <Column small={12} medium={6} offsetOnMedium={3}>
                <Logo />
                <ul className="menu expanded">
                  <li>
                    <Link to="/about/">about</Link>
                  </li>
                  <li>
                    <Link to="/blog/">blog</Link>
                  </li>
                  <li>
                    <Link to="/social/">social</Link>
                  </li>
                  <li>
                    <Link to="/talks/">talks</Link>
                  </li>
                </ul>
              </Column>
            </Row>
          </div>
          <div id="main">
            {this.props.children}
          </div>
        </div>
        <img
          src={Portrait}
          alt="Luciano Ratamero"
          style={{
            opacity: 0,
            visibility: 'hidden',
            height: 0,
            width: 0,
          }}
        />
      </div>
    );
  }
}

export class NoMatch extends React.Component {
  render() {
    return (
      <h2 style={{ textAlign: 'center', padding: '2em 0' }}>nada aqui :(</h2>
    );
  }
}

export class Logo extends React.Component {
  render() {
    return (
      <Link id="logo" to="/"><h1>luciano@ratamero.com</h1></Link>
    );
  }
}
