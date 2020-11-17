import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routes from './routes/routes';
import './index.css';


const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      {routes.map(
        ({ path, exact, component }, i) =>
          <Route key={i} path={path} exact={exact} component={component} />
      )}
    </Switch>
  </Router>,
  document.getElementById('root')
);
