import React, { useMemo, type FC } from 'react';
import ClientPrintContext from 'react-client-print/context';
import PrintPreview from 'react-client-print/PrintPreview';
import PrintSetting from 'react-client-print/PrintSetting';
import PrintStore from 'react-client-print/store';
import './index.less';

export interface ReactClientPrintProps {
  title: string;
}

const ReactClientPrint: FC<ReactClientPrintProps> = () => {
  console.log('foo->');

  const store = useMemo(
    () =>
      new PrintStore({
        foo: 'foo',
      }),
    [],
  );

  const printContext = useMemo(
    () => ({
      store,
    }),
    [store],
  );

  return (
    <ClientPrintContext.Provider value={printContext}>
      <div className="react-client-print-container">
        {/* <Print templates={showTemplate ? printTemplates : []} /> */}

        <div className="print-preview-container">
          <PrintPreview />
        </div>

        <div className="print-setting-container">
          <PrintSetting />
        </div>
      </div>
    </ClientPrintContext.Provider>
  );
};

export default ReactClientPrint;
