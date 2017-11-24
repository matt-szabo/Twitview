
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Layout from './components/Layout';



const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Layout}/>
      </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
