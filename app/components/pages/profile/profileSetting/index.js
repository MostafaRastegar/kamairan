import React from 'react';
import './style.scss';
import { Row, Col, Form, Button } from 'reactstrap';
import { AnimateField } from '../../../snappForm';

const ProfileSetting = () => (
  <Row>
    <Col xl="12" className="Profile-setting">
      <h2>تنظیمات سرویس : خرید جزوی متوسط و مناقصه</h2>
      <span>
        با انتخاب دسته بندی، اولویت نمایش معاملات براسا دسته بندی های انتخابی
        تغییر خواهدکرد
      </span>
      <Form>
        <AnimateField
          className="setting-group"
          placeholder="انتخاب کنید"
          name="number"
          type="textarea"
          label="دسته بندی مناقصه"
        />
        <Button color="success">اضافه شود</Button>
      </Form>
      <span> حمل و نقل، امور گمرکی، ترخیص، تورهای گردشی و خدمات پستی</span>
      <span> حمل و نقل، امور گمرکی، ترخیص، تورهای گردشی و خدمات پستی</span>
    </Col>
  </Row>
);

export default ProfileSetting;
