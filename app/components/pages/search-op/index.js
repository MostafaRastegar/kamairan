import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { AnimateField } from '../../snappForm';
import cal from '../../../images/calender.png';
const Search = () => (
  // const { src, title, desc, rate, time } = props.data

  <Form>
    <Row>
      <Col xl="2">
        <FormGroup>
          <Label>نوع فراخوان</Label>
          <Input type="select" name="select">
            <option>انتخاب کنید</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Col>
      <AnimateField type="text" label="نوع فراخوان" className="col-2" />
      <AnimateField type="text" label="کد کاما ایران" className="col-2" />
      <AnimateField
        className="col-2"
        type="date"
        label="تاریخ انتشار از"
        placeholder="انتخاب کنید"
        icon={cal}
      />
      <AnimateField
        className="col-2"
        type="date"
        label="لغایت"
        placeholder="انتخاب کنید"
        icon={cal}
      />
      <AnimateField className="col-2" type="text" label="مناقصه گذار" />
      <Col xl="2">
        <FormGroup>
          <Label>تابع اول</Label>
          <Input type="select" name="select" className="ticket-top">
            <option>انتخاب کنید</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Col>
      <Col xl="2">
        <FormGroup className="">
          <Label>تابع دوم</Label>
          <Input type="select" name="select" className="ticket-top">
            <option>انتخاب کنید</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Col>
      <Col xl="2">
        <FormGroup className="">
          <Label>تابع سوم</Label>
          <Input type="select" name="select" className="ticket-top">
            <option>انتخاب کنید</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Col>
      <Col xl="2">
        <FormGroup className="">
          <Label>تابع چهارم</Label>
          <Input type="select" name="select" className="ticket-top">
            <option>انتخاب کنید</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Col>
      <FormGroup className="">
        <Label>استان</Label>
        <Input type="select" name="select" className="ticket-top">
          <option>انتخاب کنید</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <Col xl="2">
        <FormGroup className="">
          <Label>تابع اول</Label>
          <Input type="select" name="select" className="ticket-top">
            <option>انتخاب کنید</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Col>
      <Col xl="2">
        <FormGroup className="">
          <Label>شهر</Label>
          <Input type="select" name="select" className="ticket-top">
            <option>انتخاب کنید</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Col>
      <Col xl="2">
        <FormGroup className="">
          <Label>گروه اصلی</Label>
          <Input type="select" name="select" className="ticket-top">
            <option>انتخاب کنید</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Col>
      <Col xl="2">
        <FormGroup className="">
          <Label>زیرگروه</Label>
          <Input type="select" name="select" className="ticket-top">
            <option>انتخاب کنید</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Col>
    </Row>
    <Button color="success">جستجو کنید</Button>
  </Form>
);
export default Search;
