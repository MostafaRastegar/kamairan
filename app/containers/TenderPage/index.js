import React, { useState } from 'react';
import Loading from '../../components/snappLoading';
import TenderPage from '../../components/pages/tender';

const TenderIndex = () => {
  const [loading] = useState(false);

  return (
    <>
      {!loading ? (
        <div>
          <TenderPage />
        </div>
      ) : (
        <div className="center hFull">
          <Loading />
        </div>
      )}
    </>
  );
};

export default TenderIndex;
