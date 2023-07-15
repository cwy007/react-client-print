import { toJS } from 'mobx';
import React, { useContext } from 'react';
import ClientPrintContext from 'react-client-print/context';

const PrintPreview = () => {
  const { store } = useContext(ClientPrintContext);
  console.log('PrintPreview-->', toJS(store));

  return (
    <div className="print-preview">
      {/* QRCodeBoard */}
      QRCodeBoard
    </div>
  );
};

export default PrintPreview;
