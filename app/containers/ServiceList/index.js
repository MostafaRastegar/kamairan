/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ServiceListCard = props => {
  const {
    data: { title, status },
  } = props;
  return (
    <div className="service-list leftM10 rightM10">
      <div className={`service-list__card topM30 service-list__card_${status}`}>
        <div className="gray8">
          <span className="text18 center topP20">{title}</span>
          <div
            className={`card__line center topM15 bottomM15 card__line_${status}`}
          />
          <span className="center text-p_15">
            دسترسی <span className="green-4"> نامحدود </span> دسته بندی
          </span>
          <span className="text-p_15 center topP10">
            دسترسی <span className="green-4"> نامحدود </span>
            استانی
          </span>
          <span className="text-p_15 center topP20">پشتیبانی 24X7</span>
          <span className="text-p_15 center topP15">پشتیبانی 24X7</span>
        </div>
        <div className="center topP20 bottomP20">
          <div className="service-list__card-d gray8 text12 topP15">
            <span className="center">هزینه دریافت هر معامله 2,000 تومان</span>
            <span className="center">شارژه هدیه 5 معامله</span>
          </div>
        </div>
        <div
          className={`service-list__card-down topP15 service-list__card-down_${status}`}
        >
          <span className="gray8 text25 center">80,000 تومان</span>
          <span className="text14 gray8 center">سالانه</span>
          <div className="card-down__btn center topP10">
            {status === 'success' && (
              <button className="btn btn-success">انتخاب بسته</button>
            )}
            {status === 'danger' && (
              <button className="btn btn-danger">انتخاب بسته</button>
            )}
            {status === 'info' && (
              <button className="btn btn-info">انتخاب بسته</button>
            )}
            {status === 'warning' && (
              <button className="btn btn-warning">انتخاب بسته</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
ServiceListCard.propTypes = {
  data: PropTypes.object,
};
export default ServiceListCard;
