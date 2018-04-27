
import React from 'react';
import MetaTags from 'react-meta-tags';
import { Row, Column } from 'react-foundation/lib';

import Portrait from '../../../static/img/eu_fb_small.jpg';
import { AnimatedWrapper } from '../common';


class About extends React.Component {
  render() {
    return (
      <div id="about">
        <MetaTags>
          <title>about — luciano@ratamero.com</title>
          <meta name="description" content="if you want to hire me or just chat, don't hesitate to talk to me. anywhere. really." />
          <meta name="keywords" content="Luciano Ratamero, python, javascript, js, developer, web, django, react, apistar" />
        </MetaTags>
        <Row>
          <Column small={12} medium={4} style={{ textAlign: 'center' }}>
            <img src={Portrait} alt="Luciano Ratamero" />
            <h2>Luciano Ratamero</h2>
            <p>28, python/javascript developer since 2011</p>
          </Column>
          <Column small={12} medium={8}>
            <p>
              I'm from Nova Friburgo, Brazil, and I love it here.
              it's a fairly small city on the mountains near Rio.
              cold enough in the winter, hot enough in the summer.
            </p>
            <p>
              I love tech, music, poetry, videogames and linux distros.
              and python. and javascript.
            </p>
            <p>
              I've worked in several different roles and technologies,
              from restful backend python/django applications
              to frontend react SPAs.
            </p>
            <p>
              I'm also the creator of a beautiful python lib called django_apistar.&nbsp;
              <a href="https://github.com/lucianoratamero/django_apistar" target="_blank" rel="noopener noreferrer">take a look!</a>
            </p>
            <p>
              if you want to hire me or just chat, don't hesitate to talk to me.
              anywhere. really.
            </p>
            <p>
              and if you're the type of person who likes a good curriculum,&nbsp;
              <a href="/curriculum/curriculum.pdf">I've generated one for you</a>.
            </p>
            <p>see you! :)</p>
          </Column>
        </Row>
      </div>
    );
  }
}

export default AnimatedWrapper(About);
