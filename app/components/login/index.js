import React from 'react';
import './style.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
const Loginuser = () => {
  // const { src, title, desc, rate, time } = props.data
  return (
    <div className="login-form">
      <Form>
        <FormGroup>
          <Label for="username">شماره تلفن همراه</Label>
          <Input
            type="tel"
            name="number"
            className="username"
            placeholder="09*********"
          />
        </FormGroup>
        <FormGroup>
          <Label for="loginpassword">رمزعبور</Label>
          <Input
            type="epassword"
            name="password"
            className="loginPassword"
            placeholder="*********"
          />
        </FormGroup>

        <Button color="success">ورود</Button>
      </Form>
      <div className="form-bottom flex-col">
        <span>
          حساب کاربری ندارید؟{' '}
          <a href="#" className="orange">
            ثبت نام کنید
          </a>
        </span>
        <span>رمز خود را فراموش کرده اید؟</span>
      </div>
    </div>
  );
};
export default Loginuser;
