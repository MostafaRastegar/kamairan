import React, { useState } from 'react';
import Loading from '../../../components/snappLoading';
import ProfileExtention from '../../../components/pages/profile/profileExtention';
import Profilethem from '../../../components/pages/profile/profileTemplate';
const ProfileIndex = () => {
  const [loading] = useState(false);

  return (
    <>
      {!loading ? (
        <Profilethem title="افزونه ها" txt="افزونه جدید">
          <ProfileExtention />
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
