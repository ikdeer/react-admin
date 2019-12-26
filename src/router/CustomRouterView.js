import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import routes from './routes'
import NotFindPage from '../pages/404'

const renderRoute = r => {
  // 是否登录
  const isLogin = localStorage.getItem('ant_token')
  return (
    <Route
      exact={r.exact}
      key={r.key}
      path={r.key}
      render={props =>
        isLogin ? (
          <r.component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
            push
          />
        )
      }
    />
  )
}
class CustomRouterView extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          {routes.map(route =>
            route.component
              ? renderRoute(route)
              : route.subs.map(r => renderRoute(r))
          )}
          <Route component={NotFindPage} />
        </Switch>
      </div>
    )
  }
}

export default CustomRouterView
