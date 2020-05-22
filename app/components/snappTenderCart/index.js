import React from 'react';
import layer31 from '../../images/layer-31.png';
import layer38 from '../../images/icons/layer-38.png';
import layer37 from '../../images/icons/layer-37.png';
import layer23 from '../../images/icons/layer-23.png';
import './style.scss';

const TenderCart = () => (
  <div className="tender-cart">
    <div className="cart-box bottomM20">
      <div className="cart-detail">
        <div className="flex">
          <div className="pic-avatar hCenter">
            <img className="avatar" src={layer31} alt="" />
          </div>
          <div className="topic">
            <div className="topic-text flex">
              <span className="text__right text16">
                <span className="bold">عنوان</span>: مناقصه عملیات اجرائی شبکه
                جمع آوری فاضلاب
              </span>
              <span className="text12 text__left">ارسال شده: 20 دقیقه پیش</span>
            </div>
            <div className="topic-text__section2">
              <span className="text__right text16">
                <span className="bold">برگزار کننده</span>: شرکت آب و فاضلاب
                استان کرمان
              </span>
            </div>
            <div className="topic-text__section-detail flex">
              <div className="text__right-detail flex">
                <img className="icon-right leftM5" src={layer38} alt="" />
                <span>مهلت دریافت اسناد: 30 فروردین 1399</span>
              </div>
              <div className="text__center-detail flex">
                <img className="icon-center leftM5" src={layer37} alt="" />
                <span>استان: کرمان - رفسنجان</span>
              </div>
              <div className="text__left-detail leftContent">
                <img className="icon-left leftM5" src={layer23} alt="" />
                <span className="color-spenaj text-left">مشاهده معامله</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TenderCart;
