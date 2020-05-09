import React from 'react';
// import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import aboutCardImg from '../../images/about-card.png';
import './style.scss';

// import messages from './messages';

const AboutCard = () => (
  <div className="about-card flex padd30">
    <div className="leftMauto">
      <h2 className="text22">چی شد که کاما رو تاسیس کردیم؟</h2>
      <p className="text22">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای...
      </p>
      <Link to="/" className="btn btn-success">
        درمورد اهداف کاما ایران بیشتر بدانیم ...
      </Link>
    </div>
    <div className="rightMauto center rightP20">
      <img src={aboutCardImg} alt="social" />
    </div>
  </div>
);

// const mapStateToProps = state => ({
//   pathname: state.router.location.pathname,
// });
// HeaderTopMenu.propTypes = {
//   pathname: PropTypes.string,
// };
export default AboutCard;
