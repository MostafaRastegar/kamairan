import React from 'react';
// import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import news from '../../images/news.png';
import newsIcon from '../../images/news-icon.png';
import './style.scss';

// import messages from './messages';

const NewsCard = () => (
  <Link to="/" className="news-card flex bg-white">
    <div className="leftMauto center news-card__img">
      <img src={news} alt="social" />
    </div>
    <div className="rightMauto padd15 flex rCol">
      <div className="news-card__detail gray7">
        <h2 className="text16 bold topP15 bottomP20 mb-0">
          چی شد که کاما رو تاسیس کردیم؟
        </h2>
        <p className="text14">
          مناقصه در لغت‌نامه‌ی دهخدا خریدن مال یا اموال و … از طرف مأمور رسمی
          به کمترین قیمتی است که از طرف فروشندگان پیشنهاد می‌شود. همچنین ممکن
          است که موضوع مناقصات ، انجام دادن عملی باشد.در اصطلاح نیز مناقصه از
          این تعریف ابتدایی دور نیست و همانطور که از نام این نهاد پیداست، هرگاه
          ...
        </p>
      </div>
      <div className="news-card__bottom flex topMauto text16 topP10">
        <div className="news-card__bottom-tag hCenter wFull">
          <img src={newsIcon} alt="" />
          <span className="rightP10">مزایده</span>
        </div>
        <div className="news-card__bottom-date rightMauto text-center leftP20 rightP20 center rCol">
          <span className="dblock red2 text20">23</span>
          <span className="dblock">اردیبهشت</span>
        </div>
      </div>
    </div>
  </Link>
);

export default NewsCard;
