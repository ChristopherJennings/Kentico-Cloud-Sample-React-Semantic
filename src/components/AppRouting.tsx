import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import EventsPage from '../pages/EventsPage';
import BlogPage from '../pages/BlogPage';

const AppRouting = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/blog" component={BlogPage} />
    </Switch>
  </div>
);

export default AppRouting;