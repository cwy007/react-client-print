import { toJS } from 'mobx';
import React, { useEffect, useMemo, type FC } from 'react';
import PrintPreview from 'react-client-print/components/PrintPreview';
import PrintSetting from 'react-client-print/components/PrintSetting';
import ClientPrintContext from 'react-client-print/context';
import PrintStore from 'react-client-print/store';
import './index.less';

export interface ReactClientPrintProps {
  dataSource?: any[];
  templates?: any[];
  defaultTemplateName?: string;
  defaultFields: {
    name: string;
    fields: string[];
  }[];
  fetchCustomFieldsSvc?: () => Promise<
    {
      name: string;
      fields: string[];
    }[]
  >;
}

const ReactClientPrint: FC<ReactClientPrintProps> = ({
  dataSource,
  templates,
  defaultTemplateName,
  defaultFields,
  fetchCustomFieldsSvc,
}) => {
  console.log('dataSource', toJS(dataSource));
  console.log('templates', toJS(templates));
  console.log('defaultTemplateName', toJS(defaultTemplateName));
  console.log('defaultFields', toJS(defaultFields));
  console.log('fetchCustomFieldsSvc', toJS(fetchCustomFieldsSvc));

  const store = useMemo(() => new PrintStore(), []);

  useEffect(() => {
    if (store) {
      store.update({
        dataSource,
        templates,
        defaultTemplateName,
        defaultFields,
      });
    }
  }, [store, dataSource, templates, defaultTemplateName, defaultFields]);

  useEffect(() => {
    if (typeof fetchCustomFieldsSvc === 'function') {
      fetchCustomFieldsSvc().then((customFields) => {
        store.update({ customFields });
      });
    }
  }, [fetchCustomFieldsSvc, store]);

  const clientPrintContext = useMemo(
    () => ({
      store,
    }),
    [store],
  );

  return (
    <ClientPrintContext.Provider value={clientPrintContext}>
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
