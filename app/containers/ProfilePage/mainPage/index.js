import React, { useState } from 'react';
import Loading from '../../../components/snappLoading';
import ProfileUser from '../../../components/pages/profile/profileUser';
import Profilethem from '../../../components/pages/profile/profileTemplate';
const ProfileIndex = () => {
  const [loading] = useState(false);

  return (
    <>
      {!loading ? (
        <Profilethem title="اطلاعات کاربری">
          <ProfileUser />
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
