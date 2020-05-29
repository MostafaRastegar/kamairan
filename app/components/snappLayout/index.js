import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import SnappFooter from '../snappFooter';
import SnappHeader from '../snappHeader';
import SearchBox from '../snappSearchBox';
import Breadcrumb from '../snappBreadcrumb';
import GlobalStyle from '../../global-styles';

const Layout = props => {
  const { children } = props;
  const location = useSelector(state => state.router.location.pathname);
  return (
    <>
      <SnappHeader />
      <main>
        {location !== '/' && (
          <>
            <Container className="page-home-less">
              <div className="topM20 bg-white borderAll border-radius-10">
                <Breadcrumb />
              </div>
              {location !== '/payment-success' && (
                <div className="topM20 leftP25 rightP25 bg-white borderAll border-radius-10">
                  <div className="padd15 bg-white border-radius-10">
                    <SearchBox />
                  </div>
                </div>
              )}
            </Container>
          </>
        )}
        {children}
      </main>
      <SnappFooter />
      <GlobalStyle />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
