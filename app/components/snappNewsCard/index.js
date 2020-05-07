import React from 'react';
// import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import news from '../../images/news.png';
import './style.scss';

// import messages from './messages';

const NewsCard = () => (
  <Link to="/" className="news-card flex">
    <div className="leftMauto center">
      <img src={news} alt="social" />
    </div>
    <div className="rightMauto padd10 bottomP flex rCol">
      <div className="news-card__detail">
        <h2 className="text14">چی شد که کاما رو تاسیس کردیم؟</h2>
        <p className="text12">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای...
        </p>
      </div>
      <div className="news-card__bottom flex topMauto">
        <div className="news-card__bottom-tag">
          <span>23</span>
          <span>اردیبهشت</span>
        </div>
        <div className="news-card__bottom-date rightMauto">
          <span>23</span>
          <span>اردیبهشت</span>
        </div>
      </div>
    </div>
  </Link>
);

export default NewsCard;
