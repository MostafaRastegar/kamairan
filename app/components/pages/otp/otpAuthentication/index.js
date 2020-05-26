import React from 'react';
import { Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import { loginSubmit, useFormInput } from './util';
import SnappAuthLayout from '../../../snappAuthLayout';
import { AnimateField } from '../../../snappForm';
import numberIcon from '../../../../images/number.png';
import passwordIcon from '../../../../images/password.png';

import './style.scss';
const OtpAuthentication = () => {
  const loginUsername = useFormInput('');
  const loginPassword = useFormInput('');
  const { SubmitComp, onKeyPress } = loginSubmit(
    {
      loginUsername,
      loginPassword,
    },
    'login',
  );
  return (
    <SnappAuthLayout title="ورود">
      <div className="login-form">
        <Form>
          <AnimateField
            className=" username"
            placeholder="*********09 "
            name="loginUsername"
            value={loginUsername.value}
            type="tel"
            onChange={loginUsername.onChange}
            label="موبایل"
            onKeyPress={onKeyPress}
            icon={numberIcon}
          />
          <AnimateField
            className=" loginPassword"
            placeholder="*********"
            type="password"
            name="loginPassword"
            value={loginPassword.value}
            onChange={loginPassword.onChange}
            label="رمز عبور"
            onKeyPress={onKeyPress}
            icon={passwordIcon}
          />

          <div className="topP15">
            <SubmitComp />
          </div>
        </Form>
        <div className="form-bottom flex rCol">
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
};

export default OtpAuthentication;
