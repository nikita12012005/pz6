import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
};

export default Layout;
