import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NewsCard from '../snappNewsCard';

// import styled from 'styled-components';
const SnappNewsLayout = () => (
  <div className="salam">
    <div className="center topM30 bottomM30 flex">
      <span className="color-secondary bold text14 leftMauto">
        <h3>آخرین مطالب سایت</h3>
        <p>قراره کلی فایل آموزشی اینجا ارائه بدیم</p>
      </span>
      <Link to="/" className="btn btn-info">
        وبلاگ کاما ایران
      </Link>
    </div>
    <div className="row">
      <div className="col-6">
        <NewsCard />
      </div>
      <div className="col-6">
        <NewsCard />
      </div>
    </div>
    <div className="center topM15">
      <a className="btn btn-success center" href="/">
        salam
      </a>
    </div>
  </div>
);
//
// SnappNewsLayout.propTypes = {
//   children: PropTypes.node,
// };
export default SnappNewsLayout;
