import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from 'reactstrap';
import linkedin from '../../images/icons/linkedin.png';
import twitter from '../../images/icons/twitter.png';
import instagram from '../../images/icons/instagram.png';
import telegram from '../../images/icons/telegram.png';

// import messages from './messages';

const HeaderTopMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="flex">
      <div className="leftMauto">
        <Nav>
          <NavItem>
            <NavLink href="#" active>
              Link
            </NavLink>
          </NavItem>
          <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
        </Nav>
      </div>
      <div className="main-header__top-social rightMauto center">
        <a className="leftM20" href="/" target="_blank">
          <img src={linkedin} alt="social" />
        </a>
        <a className="leftM20" href="/" target="_blank">
          <img src={twitter} alt="social" />
        </a>
        <a className="leftM20" href="/" target="_blank">
          <img src={instagram} alt="social" />
        </a>
        <a href="/" target="_blank">
          <img src={telegram} alt="social" />
        </a>
      </div>
    </div>
  );
};

// const mapStateToProps = state => ({
//   pathname: state.router.location.pathname,
// });
// HeaderTopMenu.propTypes = {
//   pathname: PropTypes.string,
// };
export default HeaderTopMenu;
