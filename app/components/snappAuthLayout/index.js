import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.png';
import './style.scss';
const SnappAuthLayout = props => {
  const { className, children, title } = props;
  return (
    <div
      className={`auth__layout wFull authBg bottomP30 ${!!className &&
        className}`}
    >
      <div className="header__simple center rCol bottomP30">
        <div className="center">
          <img src={logo} alt="kamairan" />
        </div>
        {!!title && <span className="text40 bold color-white">{title}</span>}
      </div>
      <div className="center rCol">{children}</div>
    </div>
  );
};

SnappAuthLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default SnappAuthLayout;
