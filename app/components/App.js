'use strict';

import React                  from 'react';
import {Locations, Location}  from 'react-router-component';
import Top                    from './Top';
import Artist                 from './Artist';
import Country                from './Country';

export default React.createClass({
  displayName: 'App',
  render() {
    let title = `Artist Top Tracks (${ this.props.path })`;
    return (
      <html lang="ja">
      <head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta charSet="utf8" />
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css" />
      </head>
      <body>
        <div id="app" className="container">
          <Locations path={this.props.path}>
            <Location path="/"        handler={Top}     />
            <Location path="/artist"  handler={Artist}  />
            <Location path="/country" handler={Country} />
          </Locations>
        </div>
      </body>
      <script src="bundle.js?v=20150113"></script>
      </html>
    );
  }
});