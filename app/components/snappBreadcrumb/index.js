import React from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';

const Breadcrumb = () => (
  <>
    <div className="btn-group btn-breadcrumb">
      <a href="/" className="btn btn-default">
        Browse
      </a>
      <a href="/" className="btn btn-default">
        Compare
      </a>
      <a href="/" className="btn btn-default">
        Order
      </a>
      <a href="/" className="btn btn-default">
        Checkout
      </a>
    </div>
  </>
);
export default Breadcrumb;
