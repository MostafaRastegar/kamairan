import React from 'react';
import './style.scss';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { AnimateField } from '../../../snappForm';
import nameIcon from '../../../../images/name.png';
import mailIcon from '../../../../images/email.png';
const ProfileTicket = () => (
  <div className="Profile-Ticket">
    <Form className="flex-wrap">
      <AnimateField
        className="col-4 ticket-username"
        placeholder="علیرضا باقری"
        name="name"
        type="text"
        label="نام و نام خانوادگی"
        icon={nameIcon}
      />
      <AnimateField
        className=" col-4 ticket-Email"
        placeholder="name@domain.com"
        name="email"
        type="email"
        label="ایمیل"
        icon={mailIcon}
      />
      <FormGroup className="col-4">
        <Label>موضوع</Label>
        <Input type="select" name="select" className="ticket-top">
          <option>انتخاب کنید</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <AnimateField className="col-8" name="text" type="text" label="موضوع" />
      <FormGroup className="col-4">
        <Label>دپارتمان</Label>
        <Input type="select" name="select" className="ticket-department">
          <option>انتخاب کنید</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>

      <AnimateField
        className="col-12 ticket-topic"
        name="text"
        type="textarea"
        label="موضوع"
      />
      <Button color="success">ارسال</Button>
    </Form>
  </div>
);

export default ProfileTicket;
