import React, { useState } from 'react';
import Loading from '../../components/snappLoading';
import Invoice from '../../components/pages/invoice';
const InvoiceIndex = () => {
  const [loading] = useState(false);

  return (
    <>
      {!loading ? (
        <Invoice />
      ) : (
        <div className="center hFull">
          <Loading />
        </div>
      )}
    </>
  );
};

export default InvoiceIndex;
