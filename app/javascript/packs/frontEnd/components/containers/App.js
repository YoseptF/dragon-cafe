import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from '../../store';
import Home from './Home';
import Pages from './Pages';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pages" component={Pages} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
