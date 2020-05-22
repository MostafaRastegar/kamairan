import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NewsCard from '../snappNewsCard';

// import styled from 'styled-components';
const SnappNewsLayout = () => (
  <div className="">
    <div className="center topM30 bottomM30 flex">
      <span className="color-secondary leftMauto">
        <h3 className="text24 bold gray7">آخرین مطالب سایت</h3>
        <p className="text16 bold-500 gray-7">
          قراره کلی فایل آموزشی اینجا ارائه بدیم
        </p>
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
    <div className="center topM50 bottomM50">
      <a className="btn btn-success center" href="/">
        مشاهده مطالب بیشتر
      </a>
    </div>
  </div>
);
//
// SnappNewsLayout.propTypes = {
//   children: PropTypes.node,
// };
export default SnappNewsLayout;
