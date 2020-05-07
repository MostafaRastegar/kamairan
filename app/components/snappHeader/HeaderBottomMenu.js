import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from 'reactstrap';
import messages from './messages';
import logo from '../../images/logo.png';

const HeaderBottomMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <div className="container main-header__bottom">
      <div className="row hFull center">
        <div className="col-2">
          <div className="main-header__bottom-logo">
            <img className="logo" src={logo} alt="logo" />
          </div>
        </div>
        <div className="col-5">
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
        </div>
        <div className="col-5">
          <div className="text-left">
            <Link className="btn btn-success leftM20" to="/authentication/">
              <i className="icon icon-teacher" />
              {messages.headerTop.login}
            </Link>
            <Link className="btn btn-white" to="/authentication/">
              <i className="icon icon-teacher" />
              {messages.headerTop.login}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = state => ({
//   pathname: state.router.location.pathname,
// });
// HeaderBottomMenu.propTypes = {
//   pathname: PropTypes.string,
// };
export default HeaderBottomMenu;
