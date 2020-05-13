import React from 'react';
import { AnimateField } from '../../../snappForm';
import { loginSubmit, useFormInput } from './util';
import SnappAuthLayout from '../../../snappAuthLayout';

import './style.scss';
function Login() {
  const recipient = useFormInput('');
  const { SubmitComp, onKeyPress } = loginSubmit(recipient, 'login');
  return (
    <SnappAuthLayout title="ورود">
      <div className="loginForm padd20 bottomP30 wFull">
        <AnimateField
          className="col-12"
          placeholder=" "
          name="recipient"
          value={recipient.value}
          type="tel"
          onChange={recipient.onChange}
          label="موبایل"
          onKeyPress={onKeyPress}
          icon="online-pay-help"
          iconColor="#A19F2E"
        />
        <AnimateField
          className="col-12"
          placeholder=" "
          name="paswword"
          value={recipient.value}
          type="text"
          onChange={recipient.onChange}
          label="رمز عبور"
          onKeyPress={onKeyPress}
          icon="online-pay-help"
          iconColor="#A19F2E"
        />
      </div>
      <div className="wFull hP20 center bottomM20 otp-auth__enter bottomP40">
        <SubmitComp />
      </div>
    </SnappAuthLayout>
  );
}

export default Login;
