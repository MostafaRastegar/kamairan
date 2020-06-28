import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import './style.scss';
import imgaccordion from '../../images/layer-32.png';
import actimg from '../../images/layer-50.png';
import imgbd from '../../images/layer-48.png';
// import imgactaccordion from '../../images/layer-312.png';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
const Accordionkama = () => {
  const accarr = [
    {
      id: 1,
      title: 'ساختمان و ابنیه، محوطه سازی، سوله و اسکلت فلزی',
    },
    {
      id: 2,
      title: 'ساختمان و ابنیه، محوطه سازی، سوله و اسکلت فلزی',
    },
    {
      id: 3,
      title: 'ساختمان و ابنیه، محوطه سازی، سوله و اسکلت فلزی',
    },
    {
      id: 4,
      title: 'ساختمان و ابنیه، محوطه سازی، سوله و اسکلت فلزی',
    },
    {
      id: 5,
      title: 'ساختمان و ابنیه، محوطه سازی، سوله و اسکلت فلزی',
    },
  ];

  return (
    <Accordion className="acckama">
      {accarr.map(item => (
        <AccordionItem className="borderAll bottomM20 round7 bg-white">
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="hCenter accordion__heading-inner">
                <div className="accimg">
                  <img src={imgaccordion} alt="" />
                </div>
                <div>
                  <span className="text-title_15">{item.title}</span>
                </div>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="flex padd20">
              <div className="leftM20">
                <div className="flex">
                  <div className="accimg_panel">
                    <img src={actimg} alt="" />
                  </div>
                  <div className="text-sub-title_bold_16">
                    <span>
                      تمامی مناقصه های ساختمان و ابنیه، محوطه سازی، سوله و اسکلت
                      فلزی
                    </span>
                  </div>
                </div>
                <div className="topM20 accpanel_body">
                  <ul>
                    <li>
                      پیمانکاری ساختمان، ابنیه، اماکن مسکونی، ورزشی، رفاهی،
                      تجاری و اداری
                    </li>
                    <li>
                      پیمانکاری ساختمان و ابنیه رتبه 1 و ) و بالای 20 میلیارد
                      تومان )
                    </li>
                    <li>احداث پارک، محوطه سازی، حصارکشی و نوسازی اراضی</li>
                    <li>احداث سوله و اسکلت فلزی</li>
                    <li>
                      نازک کاری، مقاوم سازی، بازسازی، تعمیرات و نگهداری ساختمان
                      و ابنیه
                    </li>
                    <li>مصالح ساختمانی</li>
                    <li>اقلام پیش ساخته</li>
                    <li>درب و پنجره</li>
                    <li>خرید کالاهای گروه ساختمان و ابنیه</li>
                    <li>پروژه های طراحی، مهندسی و مشاوره ساختمان و ابنیه</li>
                    <li>مرمت و نگهداری آثار باستانی و تاریخی</li>
                    <li>خدمات آرامستان و ساخت قبور</li>
                  </ul>
                </div>
              </div>
              <div>
                <img src={imgbd} alt="" />
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default Accordionkama;
