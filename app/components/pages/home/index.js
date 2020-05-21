import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../../snappLoading';
import SnappContentLayout from '../../snappContentLayout';
import SnappNewsLayout from '../../snappNewsLayout';
import AboutCard from '../../snappAboutCard';

const HomePage = () => {
  const loading = false;
  return (
    <>
      {!loading ? (
        <div className="home">
          <div className="topP5 bottomP15">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <AboutCard />
                </div>
              </div>
            </div>
          </div>
          <div className="topP5 bottomP15">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <Link to="/" className="btn btn-success wFull padd35 hAuto">
                    مناقصه
                  </Link>
                </div>
                <div className="col-4">
                  <Link to="/" className="btn btn-danger wFull padd35 hAuto">
                    مزایده
                  </Link>
                </div>
                <div className="col-4">
                  <Link to="/" className="btn btn-info wFull padd35 hAuto">
                    خرید جزئی و متوسط
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="center topM20 bottomM30 flex bg-white round10 borderAll topP30 bottomP30 leftP20 rightP20">
              <span className="color-secondary bold text14 leftMauto">
                پیشخوان آنلاین معاملات
              </span>
              <Link to="/">جستجوی کنید</Link>
            </div>
            <div className="topM20">
              <SnappContentLayout>salam</SnappContentLayout>
            </div>
          </div>

          <div className="container">
            <div className="topM20 bottomM30">
              <SnappNewsLayout />
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

export default HomePage;
