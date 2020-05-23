import React from 'react';
import './style.scss';
import { Table, Button } from 'reactstrap';
const ProfilePayment = () => (
  // const { src, title, desc, rate, time } = props.data
  <Table responsive className="Profile">
    <thead>
      <tr>
        <th>#</th>
        <th>درخواست#</th>
        <th>تاریخ درخواست</th>
        <th>تاریخ پایان</th>
        <th>قیمت</th>
        <th>وضعیت</th>
        <th>اقدامات</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <th>12546#</th>
        <td>11 ساعت پیش</td>
        <td>1399/02/01</td>
        <td>2000 تومان</td>
        <td>
          <Button color="success">پرداخت شده</Button>
        </td>
        <td>
          <Button color="secondary">مشاهده</Button>
        </td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <th>12546#</th>
        <td>11 ساعت پیش</td>
        <td>1399/02/01</td>
        <td>2000 تومان</td>
        <td>
          <Button color="success">پرداخت شده</Button>
        </td>
        <td>
          <Button color="secondary">مشاهده</Button>
        </td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <th>12546#</th>
        <td>11 ساعت پیش</td>
        <td>1399/02/01</td>
        <td>2000 تومان</td>
        <td>
          <Button color="danger">پرداخت نشده</Button>
        </td>
        <td>
          <Button color="secondary">مشاهده</Button>
        </td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <th>12546#</th>
        <td>11 ساعت پیش</td>
        <td>1399/02/01</td>
        <td>2000 تومان</td>
        <td>
          <Button color="danger">پرداخت نشده</Button>
        </td>
        <td>
          <Button color="secondary">مشاهده</Button>
        </td>
      </tr>
    </tbody>
  </Table>
);
export default ProfilePayment;
