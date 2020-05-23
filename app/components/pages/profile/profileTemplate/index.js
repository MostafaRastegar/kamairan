import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Button, Row, Col, Container } from 'reactstrap';
import SidebarMenu from '../profileSidebarMenu';
const Profilethem = props => {
  const { title, children, txt } = props;
  return (
    <div className="mainProfile">
      <Container>
        <Row>
          <Col xl="3">
            <div className="ProfileSidebar">
              <SidebarMenu />
            </div>
          </Col>
          <Col xl="9">
            <div className="profile-theme">
              <div className="theme-top flex">
                <h1>{title}</h1>
                {!!txt && (
                  <Button
                    className="profile-theme-button"
                    style={{ display: 'block' }}
                    color="success"
                  >
                    {txt}
                  </Button>
                )}
              </div>
              {children}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Profilethem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  txt: PropTypes.string,
};

export default Profilethem;
