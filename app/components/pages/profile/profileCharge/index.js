import React from 'react';
import './style.scss';
import { Row, Col, Form, Button } from 'reactstrap';
import { AnimateField } from '../../../snappForm';
import viewIcon from '../../../../images/view.png';
import bagIcon from '../../../../images/bag.png';
import imgprofile from '../../../../images/sharj-img.png';
const ProfileCharge = () => (
  <Row>
    <Col xl="6" className="Profilepay" style={{ textAlign: 'right' }}>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد.
      </p>
      <Form>
        <AnimateField
          className="profile-numberView"
          placeholder="20عدد"
          name="number"
          type="text"
          label="تعداد مشاهده معامله"
          icon={viewIcon}
        />
        <AnimateField
          className="profile-pay"
          placeholder="40,000 تومان"
          name="number"
          type="text"
          label="مبلغ قابل پرداخت"
          icon={bagIcon}
        />
        <Button color="success">پرداخت</Button>
      </Form>
    </Col>
    <Col className="profile-img" xl="6">
      <img src={imgprofile} alt="salam" />
    </Col>
  </Row>
);

export default ProfileCharge;
