
import React from 'react';
import MetaTags from 'react-meta-tags';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaLastfmSquare from 'react-icons/lib/fa/lastfm-square';
import { Row, Column } from 'react-foundation/lib';

import { AnimatedWrapper } from '../common';


class Social extends React.Component {
  render() {
    return (
      <Row id="social">
        <MetaTags>
          <title>social — luciano@ratamero.com</title>
          <meta name="description" content="links to all my social media profiles ;]" />
          <meta name="keywords" content="Luciano Ratamero, twitter, lastfm, linkedin, github, python, javascript, js, developer, web, django, react, apistar" />
        </MetaTags>
        <Column small={12} medium={6} offsetOnMedium={3}>
          <ul className="menu align-center">
            <li>
              <a href="https://twitter.com/lucianoratamero" target="_blank" rel="noopener noreferrer">
                <FaTwitterSquare />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/luciano-ratamero-06b98b32/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinSquare />
              </a>
            </li>
            <li>
              <a href="https://github.com/lucianoratamero/" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare />
              </a>
            </li>
            <li>
              <a href="http://lastfm.com/user/lucianoratamero" target="_blank" rel="noopener noreferrer">
                <FaLastfmSquare />
              </a>
            </li>
          </ul>
        </Column>
      </Row>
    );
  }
}

export default AnimatedWrapper(Social);
