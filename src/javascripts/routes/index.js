import { Route } from 'react-router';
import React from 'react';
import Layout from '../components/layout';
import TodoApp from '../components/TodoApp';
// import HomeView from '../components/home/index';
export default (
  <Route component={ Layout }>
    <Route name="app" path="/" component={ TodoApp }/>
  </Route>
);
