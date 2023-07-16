import { Form, InputNumber } from 'antd';
import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from 'react-client-print/context';

const FormItem = Form.Item;

const PaperSize = () => {
  const { store } = useContext(ClientPrintContext);
  const { size } = store.edtingTemplate || {};

  return (
    <FormItem label="尺寸" style={{ margin: 0, gap: 8 }} colon={false}>
      <InputNumber
        size="small"
        min={1}
        max={300}
        addonAfter="mm"
        style={{ width: 100 }}
        value={size?.width}
        onChange={action((width: number | null) => {
          // console.log('store.edtingTemplate!.size-->', store.edtingTemplate!.size)
          Object.assign(store.edtingTemplate!.size, { width });
        })}
      />
      <span style={{ color: 'rgba(0, 0, 0, .2)', margin: '0 4px' }}>✖️</span>
      <InputNumber
        size="small"
        min={1}
        max={300}
        value={size?.height}
        style={{ width: 100 }}
        addonAfter="mm"
        onChange={action((height: number | null) => {
          Object.assign(store.edtingTemplate!.size, { height });
        })}
      />
    </FormItem>
  );
};

export default observer(PaperSize);
