import React from 'react';
import './style.scss';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

const ProfileSetting = () => (
  <div className="Profile-setting">
    <h2>تنظیمات سرویس : خرید جزوی متوسط و مناقصه</h2>
    <p>
      با انتخاب دسته بندی، اولویت نمایش معاملات براساس دسته بندی های انتخابی
      تغییر خواهدکرد
    </p>
    <Form className="flex">
      <FormGroup>
        <Label>دسته بندی ناقصه</Label>
        <Input type="select" name="select">
          <option>انتخاب کنید</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <Button color="success" className="wfull">
        اضافه شود
      </Button>
    </Form>

    <div className="tag">
      <span> حمل و نقل، امور گمرکی، ترخیص، تورهای گردشی و خدمات پستی</span>
      <span> حمل و نقل، امور گمرکی، ترخیص، تورهای گردشی و خدمات پستی</span>
    </div>
  </div>
);

export default ProfileSetting;
