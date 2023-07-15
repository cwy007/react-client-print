import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from 'react-client-print/context';
import TypographyCard from '../TypographyCard';

const PrintPreview = () => {
  const { store } = useContext(ClientPrintContext);
  console.log('PrintPreview-->', toJS(store));

  return (
    <div className="print-preview">
      {/* {store.} */}
      {/* QRCodeBoard */}
      <TypographyCard
        mode={store.mode}
        template={
          store.mode === 'display'
            ? store.replacedTemplate
            : store.defaultTemplate
        }
      />
    </div>
  );
};

export default observer(PrintPreview);
