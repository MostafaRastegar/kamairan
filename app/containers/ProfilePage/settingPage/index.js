import React, { useState } from 'react';
import Loading from '../../../components/snappLoading';
import ProfileSetting from '../../../components/pages/profile/profileSetting';
import Profilethem from '../../../components/pages/profile/profileTemplate';
const ProfileIndex = () => {
  const [loading] = useState(false);

  return (
    <>
      {!loading ? (
        <Profilethem>
          <ProfileSetting />
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
