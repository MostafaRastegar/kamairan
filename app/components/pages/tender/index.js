import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Loading from '../../snappLoading';
import SnappContentLayout from '../../snappContentLayout';
import SnappNewsLayout from '../../snappNewsLayout';
import TenderCart from '../../snappTenderCart';
import AboutCard from '../../snappAboutCard';

const TenderPage = () => {
  const loading = false;
  const tenders = [
    {
      title: 'مناقصه عملیات اجرائی شبکه جمع آوری فاظلاب',
      conductor: 'شرکت آب و فاضلاب استان کرمان',
    },
    {
      title: 'مناقصه عملیات اجرائی شبکه جمع آوری فاظلاب2',
      conductor: 'شرکت آب و فاضلاب استان کرمان',
    },
    {
      title: 'مناقصه عملیات اجرائی شبکه جمع آوری فاظلاب3',
      conductor: 'شرکت آب و فاضلاب استان کرمان',
    },
    {
      title: 'مناقصه عملیات اجرائی شبکه جمع آوری فاظلاب4',
      conductor: 'شرکت آب و فاضلاب استان کرمان',
    },
  ];
  return (
    <>
      {!loading ? (
        <div className="page-inner page-tender">
          <div className="container">
            <div className="topM20">
              <SnappContentLayout>
                {tenders.map(tender => (
                  <TenderCart
                    title={tender.title}
                    conductor={tender.conductor}
                  />
                ))}
              </SnappContentLayout>
            </div>
          </div>

          <div className="container">
            <div className="bottomP20">
              <AboutCard />
            </div>
            <div className="bottomM20">
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

export default TenderPage;
