/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { Container, Row } from 'reactstrap';
import Countdown from 'react-countdown';
import OtpInput from 'react-otp-input';
import { getUserOtpVerify } from '../../../../actions/otp';
import { AnimateField } from '../../../snappForm';
import SnappAuthLayout from '../../../snappAuthLayout';
import { otpMainVerify } from './util';
import numberIcon from '../../../../images/number.png';

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
        <div className="wFull flex hCenter">
          {resetComp(props)}
          <p className="rightMauto bottomM">
            <b className="gray1">۰۰:۰۰</b>
          </p>
        </div>
      );
    }
    return (
      <div className="wFull flex hCenter">
        <p className="rightMauto bottomM">
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
    <SnappAuthLayout title="تایید ثبت نام">
      <div className="activationCode__edit__wrapper topM10 wFull rightText">
        <AnimateField
          placeholder=" "
          name="signUpPhone"
          value="09358537536"
          type="text"
          label="شماره تلفن همراه"
          icon={numberIcon}
        />
      </div>
      <h4 className="text14 gray1 rightText">کد تایید دریافتی</h4>
      <div className="activationCode__form">
        <div className="center bottomP15 topP5 ltr gray1">
          <div className="form-control center">
            <OtpInput
              inputStyle={{
                width: '25px',
                height: '35px',
                borderBottom: 'solid 1px #c8c8c8',
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
        </div>
        <div className="flex">
          <div className="timer wFull">
            <Countdown date={date} renderer={renderer} key={keyss} />
          </div>
        </div>
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
