import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import Loading from '../../snappLoading';
import icon from '../../../images/payment-success.png';
import './styles.scss';
const TenderPage = () => {
  const loading = false;
  return (
    <>
      {!loading ? (
        <div className="page-inner page-payment-success">
          <div className="container">
            <div className="col-12 bg-white borderAll round10 padd30 topM20 bottomM20">
              <Row>
                <Col className="rCol vCenter rightText text20" lg={6}>
                  <h2 className="success bottomM30">
                    پرداخت با موفقیت انجام شد
                  </h2>
                  <p className="text14 bottomM50">
                    از اینکه کاما ایران را انتخاب نموده اید بسیار خرسند هستیم
                    تیم ما تمام تلاش خود را می کند که خدماتی با کیفیت عالی به
                    شما ارائه دهد و در این بین برای ارائه خدمات عالی از جدیدترین
                    تکنولوژی ها استفاده نماید. شما لایق بهترین ها هستید.
                  </p>
                  <p className="bold text18 bottomM30">
                    از طریق لینک زیر می توانید تنظیمات سرویس انتخابی را انجام
                    دهید
                  </p>
                  <button
                    type="button"
                    className="btn btn-success w50 alignCenter"
                  >
                    تنظیمات سرویس
                  </button>
                </Col>
                <Col className="center" lg={6}>
                  <img src={icon} alt="" />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      ) : (
        <div className="center hFull">
          <Loading />
        </div>
      )}
    </>
  );
};

export default TenderPage;
