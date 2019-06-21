import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Layout from './components/Layout'
import lesson1 from './routes/lesson1'
import lesson2 from './routes/lesson2'
import lesson3 from './routes/lesson3'
import lesson4 from './routes/lesson4'
import lesson5 from './routes/lesson5'
import lesson6 from './routes/lesson6'


function RouterConfig({ history }) {
  return (
    <Router history={history}>
    <Layout>
      <Switch>
        <Route path="/lesson1" exact component={lesson1} />
        <Route path="/lesson2" exact component={lesson2} />
        <Route path="/lesson3" exact component={lesson3} />
        <Route path="/lesson4" exact component={lesson4} />
        <Route path="/lesson5" exact component={lesson5} />
        <Route path="/lesson6" exact component={lesson6} />
      </Switch>
      </Layout>
    </Router>
  );
}

export default RouterConfig;
