import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch, Link } from 'react-router-dom'
import Grid from './page/grid/index'
import Button from './page/button/index'

require('../src/component/common.css')
require('./common.css')

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="wrapper">
          <div className="leftbar">
            <ul>
              <li>
                <Link to="/grid" >grid</Link>
              </li>
              <li>
                <Link to="/button" >button</Link>
              </li>
            </ul>
          </div>
          <div className="main">
            <Switch>
              <Route exact path="/" component={Grid} />
              <Route exact path="/grid" component={Grid} />
              <Route exact path="/button" component={Button} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    )
  }
}

ReactDOM.render(
  (
    <App />
  ), document.getElementById('app'),
)
