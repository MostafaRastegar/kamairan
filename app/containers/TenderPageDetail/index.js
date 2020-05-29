import React, { useState } from 'react';
import Loading from '../../components/snappLoading';
import TenderPageDetail from '../../components/pages/tenderDetail';

const TenderIndex = () => {
  const [loading] = useState(false);

  return (
    <>
      {!loading ? (
        <div>
          <TenderPageDetail />
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
