import React, { useState } from 'react';
import Loading from '../../../components/snappLoading';
import ProfileService from '../../../components/pages/profile/profileService';
import Profilethem from '../../../components/pages/profile/profileTemplate';
const ProfileIndex = () => {
  const [loading] = useState(false);

  return (
    <>
      {!loading ? (
        <Profilethem title="سرویس های من" txt="سرویس جدید" notif="1">
          <ProfileService />
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
