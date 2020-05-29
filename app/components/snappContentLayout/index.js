import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Ads1 from '../../images/ads-1.png';
import Ads2 from '../../images/ads-2.png';
import AdsLarge from '../../images/ads-large.png';
const SnappContentLayout = props => {
  const { children, sideBar } = props;
  return (
    <div className="row topM20">
      <div className="col-8">{children}</div>
      <div className="col-4">
        {!!sideBar && (
          <div className="bottomM20 round10 overhide">{sideBar}</div>
        )}
        <div className="bottomM20 round10 overhide">
          <img src={Ads1} alt="ads" className="wFull" />
        </div>
        <div className="bottomM20 round10 overhide">
          <img src={Ads2} alt="ads" className="wFull" />
        </div>
        <div className="bottomM20 round10 overhide">
          <img src={Ads1} alt="ads" className="wFull" />
        </div>
      </div>
      <div className="col-12">
        <div className="bottomM20 round10 overhide">
          <img src={AdsLarge} alt="ads" className="wFull" />
        </div>
      </div>
    </div>
  );
};

SnappContentLayout.propTypes = {
  children: PropTypes.node,
  sideBar: PropTypes.node,
};
export default SnappContentLayout;
