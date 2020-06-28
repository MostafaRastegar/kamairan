import React, { useState } from 'react';
import Accordionkama from '../../components/snappAccordion';
import Loading from '../../components/snappLoading';

const Group = () => {
  const [loading] = useState(false);
  return (
    <>
      {!loading ? (
        <div className="container">
          <div className="col-lg-12 mt-3 mb-3">
            <Accordionkama />
          </div>
        </div>
      ) : (
        <div className="center hFull">
          <Loading />
        </div>
      )}
    </>
  );
};

export default Group;
