import React, { useState } from 'react';
import Loading from '../../components/snappLoading';
import PaymentSuccess from '../../components/pages/paymentSuccess';

const PaymentSuccessIndex = () => {
  const [loading] = useState(false);

  return (
    <>
      {!loading ? (
        <div>
          <PaymentSuccess />
        </div>
      ) : (
        <div className="center hFull">
          <Loading />
        </div>
      )}
    </>
  );
};

export default PaymentSuccessIndex;
