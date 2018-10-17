
import React from 'react';
import MetaTags from 'react-meta-tags';
import { Row, Column } from 'react-foundation/lib';

import { AnimatedWrapper } from '../common';


class Talks extends React.Component {
  render() {
    return (
      <Row id="talks">
        <MetaTags>
          <title>talks — luciano@ratamero.com</title>
          <meta name="description" content="here are every link to my community talks over the years (mostly in pt_BR)" />
          <meta name="keywords" content="Luciano Ratamero, talks, python, javascript, js, developer, web, django, react, apistar" />
        </MetaTags>
        <Column small={12} medium={6} offsetOnMedium={3}>
          <h2><strong>2018</strong></h2>

          <p>
            <a rel="noreferrer noopener" target="_blank" href="/talks/2018/pybr - Django - da requisição à resposta/">
              Python Brasil - Django - da requisição à resposta
            </a>
          </p>

          <p>
            <a rel="noreferrer noopener" target="_blank" href="/talks/2018/python para desenvolvedores javascript/">
              PythOnRio - python para desenvolvedores javascript
            </a>
          </p>

          <p>
            <a rel="noreferrer noopener" target="_blank" href="/talks/2018/Django - da requisição à resposta/">
              PythOnRio - Django - da requisição à resposta
            </a>
          </p>

          <p>
            <a rel="noreferrer noopener" target="_blank" href="/talks/2018/API Star: novo framework REST do criador do DRF/">
              Python Sudeste - API Star: novo framework REST do criador do DRF
            </a>
          </p>

          <h2><strong>2017</strong></h2>
          <p>
            <a rel="noreferrer noopener" target="_blank" href="/talks/2017/apaixonando-se por python/">
              OpenDev/PythOnRio - apaixonando-se por python
            </a>
          </p>

          <p>
            <a rel="noreferrer noopener" target="_blank" href="/talks/2017/apistar: novo framework REST feito para python3/">
              PythOnRio - apistar: novo framework REST feito para python3
            </a>
          </p>

          <p>
            <a rel="noreferrer noopener" target="_blank" href="/talks/2017/Django%20%2B%20React%3A%20dicas%20para%20quem%20quer%20fazer%20sua%20primeira%20app%20desacoplada/">
              PythOnRio - Django + React: dicas para quem quer fazer sua primeira app desacoplada
            </a>
          </p>

          <p>
            <a rel="noreferrer noopener" target="_blank" href="/talks/2017/como usar django nos tempos de angular e react/">
              Python Sudeste - Como usar Django nos tempos de Angular e React
            </a>
          </p>

          <h2><strong>2016</strong></h2>
          <p>
            <a rel="noreferrer noopener" target="_blank" href="/talks/2016/fazendo seu site - blog no Github Pages com Python e Lektor/">
              PythOnRio - fazendo seu site/blog no Github Pages com Python e Lektor
            </a>
          </p>
          <p>
            <a rel="noreferrer noopener" target="_blank" href="/talks/2016/introdução ao domain driven design com django/">
              PythOnRio - introdução ao Domain Driven Design com Django
            </a>
          </p>

          <h2><strong>2015</strong></h2>
          <p>
            <a rel="noreferrer noopener" target="_blank" href="/talks/2015/tdc - poa - segregated dom/">
              TDC - POA - Trilha JS - JS limpo e testável com Segregated DOM
            </a>
          </p>
          <p>
            <a rel="noreferrer noopener" target="_blank" href="/talks/2015/tdc - poa - django-pipeline/">
              TDC - POA - Trilha Python - Front-end descomplicado com django-pipeline
            </a>
          </p>
          <p>
            <a rel="noreferrer noopener" target="_blank" href="http://github.com/lucianoratamero/django-pipeline-example/">
              Repositório do django-pipeline-example
            </a>
          </p>

        </Column>
      </Row>
    );
  }
}

export default AnimatedWrapper(Talks);
