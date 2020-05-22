import React, { useState } from 'react';
import Loading from '../../../components/snappLoading';
import ProfileSupport from '../../../components/pages/profile/profileSupport';
import Profilethem from '../../../components/pages/profile/profileTemplate';
const ProfileIndex = () => {
  const [loading] = useState(false);

  return (
    <>
      {!loading ? (
        <Profilethem title="پشتیبانی" txt="درخواست جدید">
          <ProfileSupport />
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
