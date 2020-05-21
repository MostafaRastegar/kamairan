import './style.scss';
import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import dashboard from '../../../../images/dashboard.png';
import user from '../../../../images/user.png';
import service from '../../../../images/service.png';
import setting from '../../../../images/setting.png';
import pay from '../../../../images/pay.png';
import shraj from '../../../../images/sharj.png';
import support from '../../../../images/suport.png';
import pass from '../../../../images/pass.png';
import exit from '../../../../images/exit.png';
const SidebarMenu = () => (
  <Navbar color="faded">
    <Nav navbar>
      <NavItem className="flex">
        <NavLink href="#">
          <img src={dashboard} alt="" />
          <span> داشبورد کاربری</span>
        </NavLink>
      </NavItem>
      <NavItem className="flex">
        <NavLink href="#" className="active">
          <img src={service} alt="" />
          <span>سرویس های من</span>
        </NavLink>
        <span className="number">1</span>
      </NavItem>
      <NavItem className="flex">
        <NavLink href="#">
          <img src={user} alt="" />
          <span>اطلاعات کاربری</span>
        </NavLink>
      </NavItem>
      <NavItem className="flex">
        <NavLink href="#">
          <img src={setting} alt="" />
          <span>تنظیمات افزونه</span>
        </NavLink>
        <span className="number">1</span>
      </NavItem>
      <NavItem className="flex">
        <NavLink href="#">
          <img src={pay} alt="" />
          <span>پرداخت ها</span>
        </NavLink>
      </NavItem>
      <NavItem className="flex">
        <NavLink href="#">
          <img src={shraj} alt="" />
          <span>شارژ حساب</span>
        </NavLink>
      </NavItem>
      <NavItem className="flex">
        <NavLink href="#">
          <img src={support} alt="" />
          <span>پشتیبانی</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
          <img src={pass} alt="" />
          <span>تغییر رمز عبور</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
          <img src={exit} alt="" />
          <span>خروج</span>
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);
export default SidebarMenu;
