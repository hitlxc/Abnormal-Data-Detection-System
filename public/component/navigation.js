import React, { PropTypes, Component } from 'react';

import { Router, Route, Link, IndexRoute } from 'react-router';
//import ReactDOM from 'react-dom';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>异常URL检测系统</Link></li>
          <li><Link to='/about'>关于</Link></li>
          <li><Link to='/log'>服务器日志</Link></li>
        </ul>
      </div>
    );
  }
}