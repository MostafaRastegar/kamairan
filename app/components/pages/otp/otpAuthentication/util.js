import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserOtp } from '../../../../actions/otp';
import { btnLoading } from '../util';

export function loginSubmit(recipient, type) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  const loginSubmitFunc = () => {
    const user = {
      recipient: recipient.value,
      channel: 'sms',
    };
    localStorage.setItem('authType', type);
    dispatch(getUserOtp({ user }));
  };
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      loginSubmitFunc();
    }
  };

  const SubmitComp = () => (
    <button
      type="button"
      style={{ width: '100%' }}
      className={`btn btn-auth btn-success ${btnLoading().loginLoading &&
        'btn-loading btn-disable disabled-link'}`}
      onClick={() => loginSubmitFunc()}
    >
      تایید
    </button>
  );
  return {
    SubmitComp,
    onKeyPress: handleKeyPress,
  };
}

export function useFormInput(initValue) {
  const [value, setValue] = useState(initValue);
  const handleChange = e => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
}
