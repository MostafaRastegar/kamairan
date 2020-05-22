import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';

const HeaderCategory = props => {
  const { title, link, src } = props;
  return (
    <Link to={link} className="header-category center rCol">
      <img src={src} alt={title} />
      <h2 className="text18 color-white topP15">{title}</h2>
    </Link>
  );
};

HeaderCategory.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string,
};

export default HeaderCategory;
