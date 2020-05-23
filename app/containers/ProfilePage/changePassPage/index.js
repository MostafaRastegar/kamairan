import React, { useState } from 'react';
import Loading from '../../../components/snappLoading';
import ProfilePass from '../../../components/pages/profile/profilePass';
import Profilethem from '../../../components/pages/profile/profileTemplate';
const ProfileIndex = () => {
  const [loading] = useState(false);

  return (
    <>
      {!loading ? (
        <Profilethem title="تغییر رمز عبور">
          <ProfilePass />
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
