import React, { useState, useEffect } from 'react';
import Loading from '../../components/snappLoading';
import HomePage from '../../components/pages/home';
import { userJsonPlaceholder } from '../../api/account';
import {
  mockCartItem,
  mockMainSlider,
  mockMainMenu,
} from '../../api/testJson/mock';

const HomeIndex = () => {
  const [loading] = useState(false);
  const [contact, setContact] = useState('');
  useEffect(() => {
    userJsonPlaceholder().then(response => {
      setContact(response.name);
    });
  }, []);
  // useEffect(
  //   () => {
  //     console.log(contact);
  //   },
  //   [contact],
  // );

  return (
    <>
      {!loading ? (
        <div>
          <span>{contact}</span>
          <HomePage
            data={mockCartItem.result.data}
            mockMainSlider={mockMainSlider}
            mockMainMenu={mockMainMenu}
          />
        </div>
      ) : (
        <div className="center hFull">
          <Loading />
        </div>
      )}
    </>
  );
};

export default HomeIndex;
