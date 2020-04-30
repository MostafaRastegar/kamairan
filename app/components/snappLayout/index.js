import React from 'react';
import PropTypes from 'prop-types';
import SnappFooter from '../snappFooter';
import SnappHeader from '../snappHeader';
import GlobalStyle from '../../global-styles';

const Layout = props => {
  const { children } = props;
  return (
    <>
      <SnappHeader />
      <main>{children}</main>
      <SnappFooter />
      <GlobalStyle />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
