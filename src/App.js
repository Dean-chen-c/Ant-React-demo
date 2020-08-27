import React from 'react';
import { Layout } from 'antd';
import Header from './layout/Header';
import ErrorWrap from './shared/ErrorWrap';
import { Switch, Route } from 'react-router-dom';
import { mainRoutes } from './routes';
import './App.less';
import './style/reset.less';

function App() {
  return (
    <Layout>
      <Header />
      <ErrorWrap>
        <Switch>
          {mainRoutes.map((route) => (
            <Route
              path={route.path}
              key={route.name}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </ErrorWrap>
    </Layout>
  );
}

export default App;
