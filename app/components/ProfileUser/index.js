import React from 'react';
import './style.css';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import imgprofile from '../../images/img-user.png';
const ProfileUser = props => (
  // const { src, title, desc, rate, time } = props.data
  (
    <Row>
      <Col xl="6" className="Profile-User" style={{textAlign:"right"}}>
        <Form>
          <FormGroup>
          <Label for="examplename">نام و نام خانوادگی</Label>
            <Input type="text" name="name" className="profile-name" placeholder="علیرضا باقری" />
          </FormGroup>
          <FormGroup>
          <Label for="exampleNumber">شماره تلفن همراه</Label>
            <Input  type="tel" name="number" className="profile-Number"  placeholder="09124578523" />
        </FormGroup>
          <FormGroup>
          <Label for="exampleEmail">ایمیل</Label>
            <Input type="email" name="email" className="profile-Email" placeholder="name@domain.com" />
        </FormGroup>
        <Button color="success">ویرایش اطلاعات</Button>
        </Form>
    </Col>
    <Col className="profile-img" xl="6">
      <img src={imgprofile} />
      </Col>
  </Row>
);

export default ProfileUser;
