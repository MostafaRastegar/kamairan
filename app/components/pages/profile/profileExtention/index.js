import React from 'react';
import './style.scss';
import { Table, Button } from 'reactstrap';
const ProfileExtention = () => (
  // const { src, title, desc, rate, time } = props.data
  <Table responsive className="Profile">
    <thead>
      <tr>
        <th>#</th>
        <th>نام</th>
        <th>تاریخ درخواست</th>
        <th>تاریخ پایان</th>
        <th>وضعیت</th>
        <th>اقدامات</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <th>افزونه اطلاع رسانی پیامکی</th>
        <td>11 ساعت پیش</td>
        <td>1399/02/01</td>
        <td>
          <Button color="success">فعال</Button>
        </td>
        <td>
          <Button color="secondary">مشاهده</Button>
        </td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <th>افزونه اطلاع رسانی پیامکی</th>
        <td>11 ساعت پیش</td>
        <td>1399/02/01</td>
        <td>
          <Button color="success">فعال</Button>
        </td>
        <td>
          <Button color="secondary">مشاهده</Button>
        </td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <th>افزونه اطلاع رسانی پیامکی</th>
        <td>11 ساعت پیش</td>
        <td>1399/02/01</td>
        <td>
          <Button color="secondary disabled">منقضی شده</Button>
        </td>
        <td>
          <Button color="secondary">مشاهده</Button>
        </td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <th>افزونه اطلاع رسانی پیامکی</th>
        <td>11 ساعت پیش</td>
        <td>1399/02/01</td>
        <td>
          <Button color="warning">در حال اتمام</Button>
        </td>
        <td>
          <Button color="secondary">مشاهده</Button>
        </td>
      </tr>
    </tbody>
  </Table>
);
export default ProfileExtention;
