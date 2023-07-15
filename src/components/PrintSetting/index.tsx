import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from 'react-client-print/context';
import PrintSettingEdit from './Edit';
import PrintSettingShow from './Show';

const PrintSetting = () => {
  const { store } = useContext(ClientPrintContext);

  return (
    <div className="print-setting-container">
      {store.mode === 'edit' ? <PrintSettingEdit /> : <PrintSettingShow />}
    </div>
  );
};

export default observer(PrintSetting);
