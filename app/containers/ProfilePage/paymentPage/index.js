import React, { useState } from 'react';
import Loading from '../../../components/snappLoading';
import profilePayment from '../../../components/pages/profile/profilePayment';
import Profilethem from '../../../components/pages/profile/profileTemplate';
const ProfileIndex = () => {
  const [loading] = useState(false);

  return (
    <>
      {!loading ? (
        <Profilethem title="پرداخت ها">
          <profilePayment />
        </Profilethem>
      ) : (
        <div className="center hFull">
          <Loading />
        </div>
      )}
    </>
  );
};

export default ProfileIndex;
