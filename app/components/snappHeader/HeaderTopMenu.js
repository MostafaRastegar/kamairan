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
    <div className="main-header__top-inner flex">
      <div className="main-header__top-menu leftMauto">
        <Nav>
          <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
              شروع کنید
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
              قوانین وب سایت
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
            <NavLink href="#" active>
              درباره ما
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">تماس با ما</NavLink>
          </NavItem>
        </Nav>
      </div>
      <div className="main-header__top-social rightMauto center">
        <a className="leftM20" href="/" target="_blank">
          <img src={instagram} alt="social" />
        </a>
        <a className="leftM20" href="/" target="_blank">
          <img src={telegram} alt="social" />
        </a>
        <a className="leftM20" href="/" target="_blank">
          <img src={twitter} alt="social" />
        </a>
        <a className="leftM20" href="/" target="_blank">
          <img src={linkedin} alt="social" />
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
