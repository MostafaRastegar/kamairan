import React from 'react';
import './style.scss';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import imgprofile from '../../../../images/password-img.png';
const Profilepass = () => (
  // const { src, title, desc, rate, time } = props.data
  <Row>
    <Col xl="6" className="profile-pass" style={{ textAlign: 'right' }}>
      <Form>
        <FormGroup>
          <Label for="pass">رمز عبور قبلی</Label>
          <Input
            type="password"
            name="pass"
            className="pass"
            placeholder="********"
          />
        </FormGroup>
        <FormGroup>
          <Label for="newpass">رمز عبور جدید</Label>
          <Input
            type="password"
            name="newpass"
            className="new-pass"
            placeholder="********"
          />
        </FormGroup>
        <FormGroup>
          <Label for="repeatpass">تکرار رمز عبور جدید</Label>
          <Input
            type="password"
            name="repeatpass"
            className="repeat-pass"
            placeholder="********"
          />
        </FormGroup>
        <Button color="success">ویرایش رمز عبور</Button>
      </Form>
    </Col>
    <Col className="profile-img" xl="6">
      <img src={imgprofile} alt="passwordimage" />
    </Col>
  </Row>
);
export default Profilepass;
