import React from 'react';
import './style.scss';
import { Button, Form, Row, Col } from 'reactstrap';
import { AnimateField } from '../../../snappForm';
import imgprofile from '../../../../images/img-user.png';
import nameIcon from '../../../../images/name.png';
import mailIcon from '../../../../images/email.png';
import numberIcon from '../../../../images/number.png';
const ProfileUser = () => (
  <Row>
    <Col xl="6" className="Profile-User">
      <Form>
        <AnimateField
          className="profile-name"
          placeholder="علیرضا باقری"
          name="name"
          type="text"
          label="نام و نام خانوادگی"
          icon={nameIcon}
        />
        <AnimateField
          className="profile-Number"
          placeholder="09124578523"
          name="telnumber"
          type="tel"
          label="شماره تلفن همراه"
          icon={numberIcon}
        />
        <AnimateField
          className="profile-Email"
          placeholder="name@domain.com"
          name="email"
          type="email"
          label="ایمیل"
          icon={mailIcon}
        />
        <Button className="topM15" color="success">
          ویرایش اطلاعات
        </Button>
      </Form>
    </Col>
    <Col className="profile-img" xl="6">
      <img src={imgprofile} alt="salam" />
    </Col>
  </Row>
);

export default ProfileUser;
