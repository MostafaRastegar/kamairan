import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Navbar, NavbarBrand, Row, Col } from 'reactstrap';
import HeaderBottomMenu from './HeaderBottomMenu';
import HeaderTopMenu from './HeaderTopMenu';
// import SnappAutocomplete from '../snappAutocomplete';
// import messages from './messages';

import './style.scss';

const Header = () => {
  const [, setBreadCrumb] = useState('');
  const location = useSelector(state => state.router.location.pathname);
  const pageTitle = () => {
    const splitLocation = location.split('/');
    splitLocation.forEach(item => {
      // eslint-disable-next-line default-case
      switch (item) {
        case 'article':
          setBreadCrumb('Blog');
          break;
        case 'authentication':
          setBreadCrumb('Authentication');
          document.title = 'Authentication';
          break;
        case 'tags':
          setBreadCrumb('Tags');
          document.title = 'Tags';
          break;
        case 'kit':
          setBreadCrumb('kit');
          document.title = 'Kit';
          break;
      }
    });
    if (location === '/') {
      setBreadCrumb('Home');
      document.title = 'Snapp Blog';
    }
  };
  useEffect(
    () => {
      pageTitle();
    },
    [location],
  );

  return (
    <header className="main-header">
      <div className="main-header__top flex center">
        <Container>
          <Row className="main-header__top-inner">
            <Col>
              <HeaderTopMenu />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main-header__bottom">
        <div className="main-header__bottom-inner">
          <HeaderBottomMenu />
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // pass in custom element to use
};
NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // pass in custom element to use
};

export default Header;
