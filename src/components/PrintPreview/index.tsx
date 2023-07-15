// import { toJS } from 'mobx';
import { Observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from 'react-client-print/context';
import TypographyCard from '../TypographyCard';
import './index.less';

const PrintPreview = () => {
  const { store } = useContext(ClientPrintContext);

  return (
    <Observer>
      {() => (
        <div className="print-preview">
          {!!store.selectedTemplate && (
            <TypographyCard
              mode={store.mode}
              template={
                store.mode === 'display'
                  ? store.replacedTemplate!
                  : store.selectedTemplate
              }
              activeNode={store.activeNode}
              onChangeActive={(activeNode) => store.updateNode({ activeNode })}
              enableRulerGuide={store.enableRulerGuide}
              enableAutoAlign={store.enableAutoAlign}
            />
          )}
        </div>
      )}
    </Observer>
  );
};

export default PrintPreview;
