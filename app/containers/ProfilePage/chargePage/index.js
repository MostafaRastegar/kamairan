import React, { useState } from 'react';
import Loading from '../../../components/snappLoading';
import ProfileCharge from '../../../components/pages/profile/profileCharge';
import Profilethem from '../../../components/pages/profile/profileTemplate';
const ProfileIndex = () => {
  const [loading] = useState(false);

  return (
    <>
      {!loading ? (
        <Profilethem title="شارژ حساب">
          <ProfileCharge />
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
