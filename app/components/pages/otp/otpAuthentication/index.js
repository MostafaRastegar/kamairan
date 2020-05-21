import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Link from 'react-router-dom';
// import { loginSubmit, useFormInput } from './util';
import SnappAuthLayout from '../../../snappAuthLayout';

import './style.scss';
function Login() {
  // const recipient = useFormInput('');
  // const { SubmitComp, onKeyPress } = loginSubmit(recipient, 'login');
  return (
    <SnappAuthLayout title="ورود">
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
            <Link to="/" className="orange">
              ثبت نام کنید
            </Link>
          </span>
          <span>رمز خود را فراموش کرده اید؟</span>
        </div>
      </div>
    </SnappAuthLayout>
  );
}

export default Login;
