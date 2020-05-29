import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const TenderDetailSidebar = props => {
  const { className, title, icon, description } = props;
  return (
    <>
      <div
        className={`padd20 center borderAll round10 rCol text-center ${className ||
          ''}`}
      >
        <h4 className="text16 bold leftMauto">{title}</h4>
        <img src={icon} alt="" />
        <p className="topP20 bottomM">{description}</p>
      </div>
    </>
  );
};

TenderDetailSidebar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  description: PropTypes.string,
};
export default TenderDetailSidebar;
