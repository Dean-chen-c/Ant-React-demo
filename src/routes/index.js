import { createBrowserHistory } from 'history';
import IndexPage from '../component/index';

export const history = createBrowserHistory();
export const mainRoutes = [
  {
    path: '/',
    component: IndexPage,
    name: '首页',
    exact: true
  }
];
