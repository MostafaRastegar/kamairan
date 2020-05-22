import React from 'react';
import './style.scss';
import { Table, Button } from 'reactstrap';
const ProfileSupport = () => (
  <Table responsive className="Profile">
    <thead>
      <tr>
        <th>#</th>
        <th>شماره پشتیبانی#</th>
        <th>موضوع</th>
        <th>تاریخ درخواست</th>
        <th>واحد</th>
        <th>وضعیت</th>
        <th>آخرین بروزرسانی</th>
        <th>اقدامات</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <th>12546#</th>
        <td>عدم اطلاع رسانی مزایده ها</td>
        <td>11 ساعت پیش</td>
        <td>مالی</td>
        <td>
          <Button color="success">پاسخ داده شده</Button>
        </td>
        <td> ساعت پیش 11</td>
        <td>
          <Button color="secondary">مشاهده</Button>
        </td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <th>12546#</th>
        <td>عدم اطلاع رسانی مزایده ها</td>
        <td>11 ساعت پیش</td>
        <td>فنی</td>
        <td>
          <Button color="success">پاسخ داده شده</Button>
        </td>
        <td> ساعت پیش 11</td>
        <td>
          <Button color="secondary">مشاهده</Button>
        </td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <th>12546#</th>
        <td>عدم اطلاع رسانی مزایده ها</td>
        <td>11 ساعت پیش</td>
        <td>مالی</td>
        <td>
          <Button className="disabled">بسته شده</Button>
        </td>
        <td> ساعت پیش 11</td>
        <td>
          <Button color="secondary">مشاهده</Button>
        </td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <th>12546#</th>
        <td>عدم اطلاع رسانی مزایده ها</td>
        <td>11 ساعت پیش</td>
        <td>مالی</td>
        <td>
          <Button color="warning">درحال بررسی</Button>
        </td>
        <td> ساعت پیش 11</td>
        <td>
          <Button color="secondary">مشاهده</Button>
        </td>
      </tr>
    </tbody>
  </Table>
);
export default ProfileSupport;
