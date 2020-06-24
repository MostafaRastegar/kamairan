import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import imgaccordion from '../../images/layer-32.png';
import actimg from '../../images/layer-50.png';
import imgbd from '../../images/layer-48.png';
import imgactaccordion from '../../images/layer-312.png';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
const Accordionkama = () => (
  <Accordion>
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          <div>
            <img src={imgaccordion} alt="" />
            <span className="title">
              ساختمان و ابنیه، محوطه سازی، سوله و اسکلت فلزی
            </span>
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div>test</div>
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          <div>
            <img src={imgaccordion} alt="" />
            <span className="title">
              ساختمان و ابنیه، محوطه سازی، سوله و اسکلت فلزی
            </span>
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div>test</div>
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          <div>
            <img src={imgaccordion} alt="" />
            <span className="title">
              ساختمان و ابنیه، محوطه سازی، سوله و اسکلت فلزی
            </span>
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div>test</div>
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          <div>
            <img src={imgaccordion} alt="" />
            <span className="title">
              ساختمان و ابنیه، محوطه سازی، سوله و اسکلت فلزی
            </span>
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div>test</div>
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          <div>
            <img src={imgaccordion} alt="" />
            <span className="title">
              ساختمان و ابنیه، محوطه سازی، سوله و اسکلت فلزی
            </span>
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div>test</div>
      </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          <div>
            <img src={imgactaccordion} alt="" />
            <span className="title">
              ساختمان و ابنیه، محوطه سازی، سوله و اسکلت فلزی
            </span>
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div className="flex">
          <div>
            <div className="flex">
              <img src={actimg} alt="" />
              <span className="title">
                تمامی مناقصه های ساختمان و ابنیه، محوطه سازی، سوله و اسکلت فلزی
              </span>
            </div>
            <ul>
              <li>
                پیمانکاری ساختمان، ابنیه، اماکن مسکونی، ورزشی، رفاهی، تجاری و
                اداری
              </li>
              <li>
                پیمانکاری ساختمان و ابنیه رتبه 1 و ) و بالای 20 میلیارد تومان )
              </li>
              <li>احداث پارک، محوطه سازی، حصارکشی و نوسازی اراضی</li>
              <li>احداث سوله و اسکلت فلزی</li>
              <li>
                نازک کاری، مقاوم سازی، بازسازی، تعمیرات و نگهداری ساختمان و
                ابنیه
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
          <div>
            <img src={imgbd} alt="" />
          </div>
        </div>
      </AccordionItemPanel>
    </AccordionItem>
  </Accordion>
);
export default Accordionkama;
