import React from 'react';
import './style.scss';
import { Button, Form, Row, Col } from 'reactstrap';
import { AnimateField } from '../../../snappForm';
import nameIcon from '../../../../images/name.png';
import mailIcon from '../../../../images/email.png';
const ProfileTicket = () => (
  <Row>
    <Col xl="12" className="Profile-Ticket">
      <Form>
        <AnimateField
          className="username"
          placeholder="علیرضا باقری"
          name="name"
          type="text"
          label="نام و نام خانوادگی"
          icon={nameIcon}
        />
        <AnimateField
          className="profile-Email"
          placeholder="name@domain.com"
          name="email"
          type="email"
          label="ایمیل"
          icon={mailIcon}
        />
        <AnimateField
          className="profile-Email"
          name="select"
          type="select"
          label="موضوع"
        >
          <AnimateField
            className="ticket-topic"
            name="text"
            type="text"
            label="موضوع"
          />
          <AnimateField
            className="profile-Email"
            name="select"
            type="select"
            label="دپارتمان"
          />
          <AnimateField
            className="ticket-topic"
            name="text"
            type="textarea"
            label="موضوع"
          />
        <Button color="success">ارسال</Button>
      </Form>
    </Col>
  </Row>
);

export default ProfileTicket;
