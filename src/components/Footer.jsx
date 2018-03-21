/**
 * @fileOverview Footer component
 *
 * @author Franklin Chieze
 *
 * @requires NPM:react
 */

import React from 'react';

const style = {
  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,
  padding: '1rem',
  backgroundColor: '#efefef',
  textAlign: 'center'
};

const Footer = () => (
  <footer className="al-footer clearfix" style={style}>
    <div className="al-footer-right">Created with <i className="ion-heart" /></div>
    <div className="al-footer-main clearfix">
      <div className="al-copy">React Webpack Skeleton</div>
      <ul className="al-share clearfix">
        <li><i className="socicon socicon-facebook" /></li>
        <li><i className="socicon socicon-twitter" /></li>
        <li><i className="socicon socicon-google" /></li>
        <li><i className="socicon socicon-github" /></li>
      </ul>
    </div>
  </footer>
);

export default Footer;
