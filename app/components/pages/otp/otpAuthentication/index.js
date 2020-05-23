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
  const recipient = useFormInput('');
  const { SubmitComp, onKeyPress } = loginSubmit(recipient, 'login');
  console.log('login');
  return (
    <SnappAuthLayout title="ورود">
      <div className="login-form">
        <Form>
          <AnimateField
            className="col-12 username"
            placeholder=" "
            name="recipient"
            value={recipient.value}
            type="tel"
            onChange={recipient.onChange}
            label="موبایل"
            onKeyPress={onKeyPress}
            icon={numberIcon}
          />
          <AnimateField
            className="col-12"
            placeholder=" "
            name="password"
            value={recipient.value}
            type="text"
            onChange={recipient.onChange}
            label="رمز عبور"
            onKeyPress={onKeyPress}
            icon={passwordIcon}
          />

          <div className="">
            <SubmitComp />
          </div>
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
};

export default OtpAuthentication;
