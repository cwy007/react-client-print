import classNames from 'classnames';
import { toJS } from 'mobx';
import { Observer } from 'mobx-react-lite';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
} from 'react';
import PrintPreview from 'react-client-print/components/PrintPreview';
import PrintSetting from 'react-client-print/components/PrintSetting';
import PrintStyle from 'react-client-print/components/PrintStyle';
import { TTemplate } from 'react-client-print/components/TypographyCard/type';
import ClientPrintContext from 'react-client-print/context';
import PrintStore from 'react-client-print/store';
import './index.less';

export interface PrintRef {
  store?: PrintStore;
}

export interface ReactClientPrintProps {
  dataSource?: Record<string, string>[];
  templates?: TTemplate[];
  defaultTemplateName?: string;
  defaultFields: {
    name: string;
    fields: string[];
  }[];
  onChange: (payload: {
    template: Partial<TTemplate>;
    operationType: 'update' | 'create' | 'delete';
  }) => void;
}

const ReactClientPrint = ({
  dataSource,
  templates,
  defaultTemplateName,
  defaultFields,
  onChange,
  ref,
}: ReactClientPrintProps & { ref: any }) => {
  const store = useMemo(() => new PrintStore(), []);

  useImperativeHandle(
    ref,
    () => ({
      store,
    }),
    [store],
  );

  useEffect(() => {
    console.log('JSON.stringify(templates)', toJS(templates));
    store?.update({
      dataSource,
      templates,
      defaultFields,
    });
  }, [
    JSON.stringify(dataSource),
    JSON.stringify(templates),
    JSON.stringify(defaultFields),
  ]);

  const selectedTemplate = store.templates.find(
    (v) => v.name === defaultTemplateName,
  );
  useEffect(() => {
    if (
      JSON.stringify(selectedTemplate) !==
      JSON.stringify(store.selectedTemplate)
    ) {
      store.update({
        selectedTemplate,
        edtingTemplate: toJS(selectedTemplate),
      });
    }
  }, [JSON.stringify(selectedTemplate), store]);

  useEffect(() => {
    if (!store.onChange) {
      store.update({ onChange });
    }
  }, [onChange]);

  const clientPrintContext = useMemo(
    () => ({
      store,
    }),
    [store],
  );

  return (
    <Observer>
      {() => (
        <ClientPrintContext.Provider value={clientPrintContext}>
          <div
            className={classNames('react-client-print-container', {
              isEditing: store.mode === 'edit',
            })}
          >
            <PrintStyle />

            <PrintPreview />

            <PrintSetting />
          </div>
        </ClientPrintContext.Provider>
      )}
    </Observer>
  );
};

export default forwardRef<PrintRef, ReactClientPrintProps>((props, ref) =>
  ReactClientPrint({ ...props, ref }),
);
