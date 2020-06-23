import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';
import { Row, Col, Container } from 'reactstrap';
import logo from '../../images/logo.png';
import image from '../../images/logintheme.png';

const SnappAuthLayout = props => {
  const { title, children } = props;

  useEffect(() => {
    const bodyColor = color => {
      document.querySelector('body').style.backgroundColor = color;
    };
    document.querySelector('.main-header').style.display = 'none';
    document.querySelector('.main-footer').style.display = 'none';
    document.querySelector('.page-home-less').style.display = 'none';
    bodyColor('red');
    return () => {
      document.querySelector('body').style.backgroundColor = 'transparent';
      document.querySelector('.main-header').style.display = 'block';
      document.querySelector('.main-footer').style.display = 'block';
    };
  }, []);
  return (
    <Container>
      <div className="kama-theme">
        <div className="go-to-back leftText">
          <Link to="/">
            <span className="leftP10">بازگشت به کاما ایران</span>
            <span>{`>`}</span>
          </Link>
        </div>
        <Row>
          <Col xl="4" className="hCenter">
            <div className="kamairan-form wFull">
              <img className="logo" src={logo} alt="" />
              <h1>{title}</h1>
              {children}
            </div>
          </Col>
          <Col xl="8" className="center">
            <div className="kamairan-imgform">
              <img src={image} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
SnappAuthLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default SnappAuthLayout;
