import React from 'react';
import ServiceListContent from '../../../containers/ServiceList/serviceListContent';
import ServiceListcard from '../../../containers/ServiceList/index';
import './style.scss';

const serviceLists = [
  {
    title: 'سرویس مناقصه',
    status: 'success',
  },
  {
    title: 'سرویس مزایده',
    status: 'danger',
  },
  {
    title: 'سرویس خرید جزئی و مناقصه',
    status: 'info',
  },
  {
    title: 'سرویس جامع',
    status: 'warning',
  },
];

const ServiceList = () => (
  <div className="container">
    <div className="center topP20 topM20 bottomP20 bg-white round10 borderAll">
      <div className="service-page">
        <ServiceListContent />
        <div className="service-list__title topP70">
          <span className="center text22 gray8">سرویس های کاما ایران</span>
          <span className="center text18 gray7 text-p_15">
            برای شما سرویس های مختلفی را آماده کرده ایم
          </span>
        </div>
        <div className="center">
          {serviceLists.map(item => (
            <ServiceListcard data={item} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ServiceList;
