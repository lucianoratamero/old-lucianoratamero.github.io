
import React from 'react';


export default class DisqusComments extends React.Component {
  render() {
    const { slug } = this.props;
    let { href } = window.location;

    if (!href.endsWith('/')) {
      href = `${window.location.href}/`;
    }

    window.disqus_config = function disqusConfig() {
      this.page.url = window.location.href;
      this.page.identifier = `/${slug}`;
    };

    const d = document;
    const s = d.createElement('script');
    s.src = 'https://lucianoratamerosblog.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);

    return (
      <div>
        <div id="disqus_thread" />
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
      </div>
    );
  }
}
