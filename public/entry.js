import React, { PropTypes, Component } from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, Link, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import Navigation from './component/navigation'
import Log from './component/log'
import About from './component/about'
import Home from './component/home'

class App extends Component {
  render() {
    return (
      <div>
        <h1>异常URL检测系统</h1>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

/*export default class Root extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='about' component={About} />
          <Route path='contact' component={Contact} />
        </Route>
      </Router>
    );
  }
}*/

ReactDOM.render((
  <Router history={createBrowserHistory()}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='about' component={About} />
          <Route path='log' component={Log} />
        </Route>
      </Router>
), document.body)