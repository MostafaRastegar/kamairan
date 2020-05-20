import React from 'react';
import './style.css';
import { Row,Col } from 'reactstrap';
import logo from '../../images/logo.png'
import image from '../../images/logintheme.png'

const Loginthem = props => {
  const {title, children} = props
  return (
    <div className="kama-theme">
      <Row>
        <Col xl="4">
      <div className="kamairan-form"> 
      <img className="logo" src={logo} alt=""/>
      <h1>{title}</h1>
      {children}
      </div>
      </Col>
      <Col  xl="8">
      <div className="kamairan-imgform">
        <img src={image} alt=""/>
      </div>
  </Col>
  </Row>
  </div>
  );
}
export default Loginthem;
