import React from 'react';
import { Layout } from 'antd';
import logoSrc from '../assets/images/logo.png';
import { NavLink, useHistory } from 'react-router-dom';
import manSrc from '../assets/images/man.jpg';

function Header() {
  const history = useHistory();
  return (
    <Layout.Header>
      <div className="layout-head">
        <div className="head"></div>
      </div>
    </Layout.Header>
  );
}

export default Header;
