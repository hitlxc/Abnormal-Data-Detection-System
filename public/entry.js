import React, { PropTypes, Component } from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, Link, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import Navigation from './component/navigation'
import Log from './component/log'
import About from './component/about'
import Home from './component/home'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div style={{}}>{this.props.children}</div>
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={createBrowserHistory()}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='about' component={About} />
          <Route path='log' component={Log} />
        </Route>
      </Router>
), document.body)