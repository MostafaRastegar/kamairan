import React from 'react';
import './style.scss';
import { Button, Row, Col } from 'reactstrap';
import SidebarMenu from '../profileSidebarMenu';
const Profilethem = props => {
  const { title, children, txt } = props;
  return (
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
  );
};
export default Profilethem;
