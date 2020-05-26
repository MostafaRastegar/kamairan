import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { signUpSubmit, useFormInput } from './util';
import { AnimateField } from '../../../snappForm';
import SnappAuthLayout from '../../../snappAuthLayout';
import numberIcon from '../../../../images/number.png';
import passwordIcon from '../../../../images/password.png';
import nameIcon from '../../../../images/name.png';
import './style.scss';

const OtpRegister = ({
  initIschecked = false,
  initSignUpFullname = 'داش علیرضا',
  initSignUpUsername = '09358537536',
  initSignUpPass = '',
}) => {
  // otpPermission();
  // const otp = useSelector(state => state.otp);

  const signUpFullname = useFormInput(initSignUpFullname);
  const signUpUsername = useFormInput(initSignUpUsername);
  const signUpPass = useFormInput(initSignUpPass);

  const [isChecked] = useState(initIschecked);
  const { SubmitComp, onKeyPress } = signUpSubmit({
    signUpFullname,
    signUpUsername,
    signUpPass,
  });

  useEffect(
    () => {
      if (isChecked === false) {
        signUpPass.setValue('');
      }
    },
    [isChecked],
  );

  return (
    <SnappAuthLayout title="ثبت‌نام">
      <div className="registerForm bottomP30 wFull">
        <AnimateField
          className="name"
          placeholder="نام خود را وارد کنید"
          name="signUpFullname"
          value={signUpFullname.value}
          type="text"
          onChange={signUpFullname.onChange}
          onKeyPress={onKeyPress}
          label="نام و نام خانوادگی"
          icon={nameIcon}
          required
        />
        <AnimateField
          className="tel"
          placeholder="09*********"
          name="signUpUsername"
          value={signUpUsername.value}
          type="text"
          label="شماره موبایل"
          icon={numberIcon}
          disabled
        />

        <AnimateField
          className="pass"
          placeholder="*********"
          name="signUpPass"
          onChange={signUpPass.onChange}
          value={signUpPass.value}
          type="password"
          label="رمزعبور"
          onKeyPress={onKeyPress}
          icon={passwordIcon}
        />
      </div>
      <div>
        <SubmitComp />
      </div>
      <div className="form-bottom flex rCol">
        <span>
          حساب کاربری دارید؟{' '}
          <Link to="/" className="orange">
            وارد شوید
          </Link>
        </span>
        <span>رمز خود را فراموش کرده اید؟</span>
      </div>
    </SnappAuthLayout>
  );
};
OtpRegister.propTypes = {
  initIschecked: PropTypes.bool,
  initSignUpFullname: PropTypes.string,
  initSignUpUsername: PropTypes.string,
  initSignUpPass: PropTypes.string,
};

export default OtpRegister;
