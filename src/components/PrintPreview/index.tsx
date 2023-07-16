import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from 'react-client-print/context';
import TypographyCard from '../TypographyCard';

const PrintPreview = () => {
  const { store } = useContext(ClientPrintContext);
  const template =
    store.mode === 'display' ? store.replacedTemplate : store.edtingTemplate;

  return (
    <div className="print-preview-container">
      {!!template && (
        <TypographyCard
          style={{ margin: '0 auto' }}
          mode={store.mode}
          template={template}
          activeNode={store.activeNode}
          onChangeActive={(activeNode) => store.updateNode({ activeNode })}
          enableRulerGuide={store.enableRulerGuide}
          enableAutoAlign={store.enableAutoAlign}
        />
      )}
    </div>
  );
};

export default observer(PrintPreview);
