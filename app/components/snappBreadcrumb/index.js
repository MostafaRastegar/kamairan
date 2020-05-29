import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './styles.scss';

const Breadcrumb = () => (
  <>
    <div className="btn-group btn-breadcrumb">
      <Link to="/" className="btn btn-default">
        خانه
      </Link>
      <Link to="/" className="btn btn-default">
        مناقصه
      </Link>
    </div>
  </>
);
export default Breadcrumb;
