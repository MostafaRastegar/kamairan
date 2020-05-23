import React from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Navbar, NavbarBrand, Row, Col } from 'reactstrap';
import HeaderBottomMenu from './HeaderBottomMenu';
import HeaderTopMenu from './HeaderTopMenu';
import SearchBox from '../snappSearchBox';
import HeaderCategory from '../snappHeaderCategory';
import catContent from '../../images/icons/category-content.png';

// import SnappAutocomplete from '../snappAutocomplete';
// import messages from './messages';

import './style.scss';

const Header = () => {
  const location = useSelector(state => state.router.location.pathname);
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
      {location === '/' && (
        <div className="main-header__bottom-home">
          <Container>
            <Row>
              <div className="col-lg-12 mt-3 mb-3">
                <div className="searchBox-title text16 bottomM15">
                  <span className="leftP5">در بین</span>
                  <span className="leftP5 color-green">11000000</span>
                  <span>معاملات سایت جستجو کنید!</span>
                </div>
                <div className="padd15 leftP30 rightP30 bg-white border-radius-10">
                  <SearchBox />
                </div>
              </div>
              <div className="col-lg-12 mt-3 pb-3">
                <div className="row">
                  <div className="col-3">
                    <HeaderCategory
                      title="محتوای ویژه"
                      src={catContent}
                      link="/"
                    />
                  </div>
                  <div className="col-3">
                    <HeaderCategory
                      title="محتوای ویژه"
                      src={catContent}
                      link="/"
                    />
                  </div>
                  <div className="col-3">
                    <HeaderCategory
                      title="محتوای ویژه"
                      src={catContent}
                      link="/"
                    />
                  </div>
                  <div className="col-3">
                    <HeaderCategory
                      title="محتوای ویژه"
                      src={catContent}
                      link="/"
                    />
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      )}
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
