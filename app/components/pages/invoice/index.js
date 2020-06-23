/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './style.scss';
import { Button, Container, Table, Form } from 'reactstrap';
import { AnimateField } from '../../snappForm';
import img from '../../../images/icons/category-content.png';
import takh from '../../../images/takhfif.png';
const Invoice = () => {
  const [isChecked, setIschecked] = useState(true);
  return (
    <Container>
      <div>
        <div className="invoice-top flex border-radius-10  bg-white borderAll topM20 padd15 ">
          <img src={img} alt="sms" />
          <div className="sms_title">
            <h2>افزونه اطلاع رسانی پیام کوتاه</h2>
            <span className="text-p_14">
              اطلاع رسانی از طریق پیام کوتاه با توجه به دسته بندی که انتخاب می
              کنید
            </span>
          </div>
          <div className="sms_price">
            <span>320000 تومان</span>
          </div>
          <div className="filters__checkbox center">
            <input
              type="checkbox"
              id="checkbox-2"
              name="isChecked"
              onChange={() => setIschecked(!isChecked)}
              defaultValue="deliveryBy"
              defaultChecked={false}
            />
            <label htmlFor="checkbox-2" />
          </div>
        </div>
        <div className="invoice-bottom flex bottomM20">
          <div className="col-8">
            <div className="tbl border-radius-10 bg-white borderAll topM20 padd15 ">
              <Table>
                <thead>
                  <tr>
                    <th>نام</th>
                    <th>واحد</th>
                    <th>مدت</th>
                    <th>مبلغ سرویس</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>سرویس خرید جزئی متوسط و مناقصه</td>
                    <td>1</td>
                    <td>یکساله</td>
                    <td>90000 تومان</td>
                  </tr>
                  <tr>
                    <td>افزونه اطلاع رسانی پیام کوتاه</td>
                    <td>1</td>
                    <td>یکساله</td>
                    <td>90000 تومان</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="takhfif-box flex topM20 padd15">
              <div>
                <img src={takh} alt="" />
                <span className="text-title_18"> کد تخفیف را وارد نمایید</span>
              </div>
              <div className="takhfif-form mrauto">
                <Form>
                  <AnimateField
                    className=""
                    placeholder="کد تخفیف"
                    name="number"
                    type="text"
                  />
                  <Button color="success">اعمال کد</Button>
                </Form>
              </div>
            </div>
          </div>
          <div className="factor border-radius-10 bg-white borderAll topM20 padd15 col-4 mrauto">
            <Table>
              <tbody>
                <tr>
                  <td>سرویس خرید جزئی متوسط و مناقصه</td>
                  <td>80,000 تومان</td>
                </tr>
                <tr>
                  <td>افزونه پیام کوتاه</td>
                  <td>6,100 تومان</td>
                </tr>
                <tr>
                  <td>تخفیف</td>
                  <td className="factor-takhfif-price">6,100 تومان(25%)</td>
                </tr>
                <tr>
                  <td>مبلغ قابل پرداخت</td>
                  <td>2,000,000 تومان</td>
                </tr>
              </tbody>
            </Table>
            <Button color="success">ثبت و پرداخت</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Invoice;
