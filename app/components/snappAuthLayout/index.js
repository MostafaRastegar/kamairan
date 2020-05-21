import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Row, Col } from 'reactstrap';
import logo from '../../images/logo.png';
import image from '../../images/logintheme.png';

const SnappAuthLayout = props => {
  const { title, children } = props;
  return (
    <div className="kama-theme">
      <Row>
        <Col xl="4">
          <div className="kamairan-form">
            <img className="logo" src={logo} alt="" />
            <h1>{title}</h1>
            {children}
          </div>
        </Col>
        <Col xl="8">
          <div className="kamairan-imgform">
            <img src={image} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
};
SnappAuthLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default SnappAuthLayout;
