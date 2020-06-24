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
    document.querySelector('body').classList.add('auth-bg');
    return () => {
      document.querySelector('body').classList.remove('auth-bg');
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
        <div className="kama-theme-main">
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
      </div>
    </Container>
  );
};
SnappAuthLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default SnappAuthLayout;
