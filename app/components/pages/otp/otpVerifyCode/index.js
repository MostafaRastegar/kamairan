/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { Container, Row } from 'reactstrap';
import Countdown from 'react-countdown';
import OtpInput from 'react-otp-input';
import { getUserOtpVerify } from '../../../../actions/otp';
import { AnimateField } from '../../../snappForm';
import SnappAuthLayout from '../../../snappAuthLayout';
import { otpMainVerify } from './util';
// import { otpPermission } from '../util';
import './style.scss';

function VerifyCode(
  props,
  { initDisabled = false, initDate = Date.now() + 120000, initOtpCode = '' },
) {
  const {
    date,
    setDate,
    keyss,
    otpCode,
    setOtpCode,
    // sendSubmit,
    resetComp,
  } = otpMainVerify({ initDisabled, initDate, initOtpCode });

  // otpPermission();
  // const btnLoading = useSelector(state => state.Loading);

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div>
          <p>
            <b className="gray1">۰۰:۰۰</b>
          </p>
          {resetComp(props)}
        </div>
      );
    }
    return (
      <div>
        <p>
          <b className="gray1">
            {minutes}:{seconds}
          </b>
        </p>
        {/* <button type="submit"

						className={`btn btn-success ${btnLoading && btnLoading.loginLoading && 'btn-loading btn-disable disabled-link'}`}
						onClick={() => sendSubmit(props, otpCode)}
						>
							ارسال
				</button> */}
      </div>
    );
  };
  useEffect(
    () => {
      setDate(Date.now() + 120000);
    },
    [keyss],
  );

  return (
    <SnappAuthLayout title="تایید شماره موبایل">
      <div className="activationCode__edit__wrapper topM10 wFull">
        <AnimateField
          className="col-12"
          placeholder=" "
          name="signUpPhone"
          value="09358537536"
          type="text"
          label="شماره موبایل"
          icon="chilivery-online-pay-help"
          disabled
        />
      </div>
      <h4 className="text12 text-center gray1">
        کدی را که پیامک می‌شود، در قسمت زیر وارد کنید:
      </h4>
      <div className="activationCode__form">
        <div className="center padd15 col-12 ltr gray1">
          <OtpInput
            inputStyle={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              border: 'solid 1px #c8c8c8',
              backgroundColor: '#ffffff',
              margin: '0 5px',
            }}
            focusStyle={{ outline: 'none' }}
            onChange={otp => {
              setOtpCode(otp);
              if (otp.length === props.otp.otp_length) {
                setTimeout(() => {
                  const inputFocus = document.querySelector(
                    '.activationCode__form .btn-success',
                  );
                  inputFocus.click();
                  inputFocus.focus();
                }, 1000);
              }
            }}
            value={otpCode}
            numInputs={5}
            // separator={<span>-</span>}
          />
        </div>

        <p className="midText mt-5 gray1">زمان باقیمانده ارسال پیامک</p>
        <Countdown date={date} renderer={renderer} key={keyss} />
      </div>
    </SnappAuthLayout>
  );
}

const mapDispatchToProps = dispatch => ({
  onSendVerify: verification => {
    dispatch(getUserOtpVerify(verification));
  },
});

const mapStateToProps = state => ({
  otp: state.otp,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VerifyCode);
