import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../../snappLoading';
import SnappContentLayout from '../../snappContentLayout';
import TenderDetailSidebar from '../../snappTenderDetailSidebar';
import icon from '../../../images/layer-31.png';
import './styles.scss';
const TenderPage = () => {
  const loading = false;
  // const tenderDetail = {
  //   title: 'مناقصه عملیات اجرائی شبکه جمع آوری فاظلاب',
  //   conductor: 'شرکت آب و فاضلاب استان کرمان',
  // };

  const SideBar = () => (
    <>
      <TenderDetailSidebar
        title="گروه مناقصه"
        description="فلزات، قطعات، سازه و خدمات صنایع فلزی، کانکس، سوله، مخازن، دکل و استراکچر فلزی"
        icon={icon}
        className="bg-white"
      />
      <Link className="btn btn-success wFull topM20" to="/">
        دریافت اسناد
      </Link>
    </>
  );
  return (
    <>
      {!loading ? (
        <div className="page-inner page-tender-Detail">
          <div className="container">
            <div className="topM20">
              <SnappContentLayout sideBar={<SideBar />}>
                <div className="tender-cart bg-white borderAll round10 padd20">
                  <div className="cart-box bottomM20">
                    <div className="cart-detail">
                      <div className="flex">
                        <div className="topic">
                          <div className="topic-text flex">
                            <span className="text__right text14">
                              <span className="bold">عنوان</span>: مناقصه شرکت
                              آب و فاضلاب استان تهران
                            </span>
                            <span className="text10 text__left">
                              ارسال شده: 20 دقیقه پیش
                            </span>
                          </div>
                          <div className="topic-text__section2">
                            <span className="text__right text14">
                              <span className="bold">موضوع </span>: این قسمت
                              وقتی کاربر لاگین باشه و درخواست اطلاعات رو ثبت
                              کرده باشه می تونه ببینه
                            </span>
                          </div>
                          <div className="topic-text__section-detail flex">
                            <div className="text__right-detail flex text12">
                              <span>شماره آگهی</span>
                              <span>
                                7-45-97 ( عمومی دو مرحله ای / مرحله اول )
                              </span>
                            </div>
                            <div className="text__center-detail flex text12">
                              <span>کد ستاد ایران: </span>
                              <span>1226516519613165</span>
                            </div>
                            <div className="text__left-detail leftContent center">
                              <span>کد کاما ایران: </span>
                              <span>1226516519613165</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="topM20">
                    <span>شرح:</span>
                    <p>
                      اتیلن و پلی فولادی به صورت تکی، لوله گذاری 4/3 اینچ و 25
                      میلیمتر در سطح شهرستان زرین شهر و نواحی تابعه دارای
                      تاییدیه از موسسه ملی استاندارد و گرید A یا B از دفتر توسعه
                      سامانه های نوین آبیاری --- 97/019: تجدید خرید لوله پلی
                      اتیلن و اتصالات طرح انتقال آب با لوله و تحویل آن -
                      شهرستانهای گنبد - آزادشهر - رامیان - مینودشت - آق قلا و
                      حومه - برآورد 42.756.291.000 ریال - تضمین 2.200.000.000
                      ریال - دارای تاییدیه از موسسه ملی استاندارد و گرید A یا B
                      از دفتر توسعه سامانه های نوین آبیاری --- 97/020: شبکه
                      زهکشی سطحی و زیرزمینی در سطح 1500 با ارزیابی کیفی -
                      شهرستان بندر گز - برآورد 114.243.938.731 ریال - تضمین
                      3.605.000.000 ریال - پایه 4 در رشته آب از سازمان برنامه و
                      بودجه با برآورد 4,000,000,000
                    </p>
                  </div>
                </div>
              </SnappContentLayout>
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
