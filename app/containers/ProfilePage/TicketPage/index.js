import React, { useState } from 'react';
import Loading from '../../../components/snappLoading';
import ProfileTicket from '../../../components/pages/profile/profileTicket';
import Profilethem from '../../../components/pages/profile/profileTemplate';
const ProfileIndex = () => {
  const [loading] = useState(false);

  return (
    <>
      {!loading ? (
        <Profilethem title="تیکت جدید">
          <ProfileTicket />
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
