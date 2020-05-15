import React from 'react';
// import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import './style.scss';

// import messages from './messages';

const SearchBox = () => (
  <section className="search-sec">
    <form className="center" noValidate="novalidate">
      <div className="search-sec__slt">
        <select className="form-control" id="exampleFormControlSelect1">
          <option>نوع معاملات</option>
          <option>Example one</option>
          <option>Example one</option>
          <option>Example one</option>
          <option>Example one</option>
          <option>Example one</option>
          <option>Example one</option>
        </select>
      </div>
      <div className="p-0 search-sec__slt">
        <select className="form-control" id="exampleFormControlSelect1">
          <option>انتخاب دسته بندی</option>
          <option>Example one</option>
          <option>Example one</option>
          <option>Example one</option>
          <option>Example one</option>
          <option>Example one</option>
          <option>Example one</option>
        </select>
      </div>
      <div className="search-sec__input">
        <input
          type="text"
          className="form-control"
          placeholder="دنبال چی میگردی؟"
        />
      </div>
      <button type="button" className="btn btn-success search-sec__button">
        جستجو
      </button>
    </form>
  </section>
);

// const mapStateToProps = state => ({
//   pathname: state.router.location.pathname,
// });
// HeaderTopMenu.propTypes = {
//   pathname: PropTypes.string,
// };
export default SearchBox;
