import React from 'react';
import { Row, Col } from 'reactstrap';
import sabt from '../../images/sabt.jpg';
import enamad from '../../images/enamad.jpg';
import './style.scss';

const SnappFooter = () => (
  <footer className="main-footer">
    <div className="footer-section-one flex">
      <Row>
        <Col className="footer-section-one__about " xl="4">
          <span className="title hcenter">درباره کاما ایران</span>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه در صد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
          </p>
        </Col>
        <Col className="footer-section-one__access " xl="2">
          <span className="title hcenter">دسترسی سریع</span>
          <ul className="rightP15">
            <li>قوانین و مقررات</li>
            <li>تماس با ما</li>
            <li>تماس با ما</li>
            <li>وبلاگ</li>
            <li>حساب کاربری</li>
          </ul>
        </Col>
        <Col className="footer-section-one__services " xl="2">
          <span className="title hcenter">خدمات مشتریان</span>
          <ul className="rightP15">
            <li>قوانین و مقررات</li>
            <li>تماس با ما</li>
            <li>تماس با ما</li>
            <li>وبلاگ</li>
            <li>حساب کاربری</li>
          </ul>
        </Col>
        <Col className="footer-section-one__namad " xl="4">
          <span className="title hcenter">نمادهای اعتماد الکترونیکی</span>
          <div className="left-img flex">
            <img src={sabt} className="left-img__sabt" alt="" />
            <img src={enamad} className="left-img__enamad" alt="" />
          </div>
        </Col>
      </Row>
    </div>
    <div className="footer-section-two">
      <div className="address">
        <span>تهران، ستارخان، خیابان کاشانی پور، پاساژ توحید واحد 124</span>
      </div>
      <div className="tel">
        <span>02188102030</span>
        <span>info@kamairan.com</span>
      </div>
    </div>
    <div className="footer-section-three center">
      <span>
        تمامی حقوق این وبسایت متعلق به شرکت دانش آنلاین پارسیان با نام تجاری
        کاما ایران می‌باشد. | 1398 ©
      </span>
    </div>
  </footer>
);

export default SnappFooter;
