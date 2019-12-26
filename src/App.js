import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import NotFindPage from './pages/404'
import Home from './pages'
import Login from './pages/login'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" push render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Route path="/404" component={NotFindPage} />
            <Route path="/login" component={Login} />
            <Route component={NotFindPage} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
