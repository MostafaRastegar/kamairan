import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../../snappLoading';
import SnappContentLayout from '../../snappContentLayout';
import SnappNewsLayout from '../../snappNewsLayout';
import AboutCard from '../../snappAboutCard';
import TenderCart from '../../snappTenderCart';

const HomePage = () => {
  const loading = false;
  return (
    <>
      {!loading ? (
        <div className="home">
          <div className="bottomP20">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <AboutCard />
                </div>
              </div>
            </div>
          </div>
          <div className="bottomP20">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <Link
                    to="/"
                    className="btn btn-success wFull padd25 hAuto text18"
                  >
                    مناقصه
                  </Link>
                </div>
                <div className="col-4">
                  <Link
                    to="/"
                    className="btn btn-danger wFull padd25 hAuto text18"
                  >
                    مزایده
                  </Link>
                </div>
                <div className="col-4">
                  <Link
                    to="/"
                    className="btn btn-info wFull padd25 hAuto text18"
                  >
                    خرید جزئی و متوسط
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="center bottomM20 flex bg-white round10 borderAll topP20 bottomP20 leftP20 rightP20">
              <span className="bold text18 leftMauto">
                پیشخوان آنلاین معاملات
              </span>
              <Link to="/" className="color-secondary">
                جستجوی کنید
              </Link>
            </div>
            <div className="topM20">
              <SnappContentLayout>
                <TenderCart />
                <TenderCart />
                <TenderCart />
                <TenderCart />
              </SnappContentLayout>
            </div>
          </div>

          <div className="container">
            <div className="topM20 bottomM20">
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
