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
// import messages from './messages';
import logo from '../../images/logo.png';
import support from '../../images/support.png';
const HeaderBottomMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <div className="container main-header__bottom">
      <div className="row hFull center">
        <div className="col-3">
          <div className="main-header__bottom-logo">
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="col-5">
          <div className="main-header__bottom-menu leftMauto">
            <Nav>
              <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle nav caret>
                  مناقصات
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
                  مزایده
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
                  خرید جزئی و متوسط
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
                <NavLink href="#">اشتراک کاما</NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
        <div className="col-4">
          <div className="text-left">
            <Link className="btn btn-support leftM20" to="/authentication/">
              {/* <i className="icon icon-teacher" />
            //   {messages.headerTop.login}  */}
              پشتیبانی آنلاین
              <img src={support} alt="" />
            </Link>
            <Link className="btn btn-danger" to="/authentication/">
              ورود / عضویت
              {/* <i className="icon icon-teacher" />
            //   {messages.headerTop.login}  */}
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
