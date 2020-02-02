/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

// import Header from './header'
import MainMenu from './main-menu';
import GlobalStyles from './styles/global';

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    {children}
  </div>
)


export default Layout
