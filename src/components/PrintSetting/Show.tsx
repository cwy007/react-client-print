import { EditOutlined, PrinterOutlined } from '@ant-design/icons';
import { Button, Col, Divider, InputNumber, Row, Select, Space } from 'antd';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from 'react-client-print/context';
import './index.less';

const Option = Select.Option;

const PrintSettingShow = () => {
  const { store } = useContext(ClientPrintContext);

  return (
    <div className="print-setting-show">
      <PrinterOutlined style={{ color: '#dadada', fontSize: 86 }} />
      <div className="print-label">打印</div>

      <Row gutter={[8, 16]} style={{ padding: '0 16px' }} align="middle">
        <Col span={6}>打印模板</Col>
        <Col span={12}>
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder="选择模版"
            value={store.selectedTemplate?.name}
            onChange={(templateName) => store.switchTemplate(templateName)}
          >
            {(store.templates || []).map((template) => (
              <Option key={template.name} value={template.name}>
                {template.name}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={6}>
          <EditOutlined
            style={{
              color: '#006FFF',
              fontSize: '18px',
              marginLeft: '8px',
            }}
            onClick={() =>
              store.update({
                mode: 'edit',
                edtingTemplate: toJS(store.selectedTemplate),
              })
            }
          />
        </Col>
        <Col span={6}>打印份数</Col>
        <Col span={12}>
          <InputNumber
            style={{ width: '100%' }}
            addonAfter="份"
            min={1}
            max={100}
            value={store.numberOfCopies}
            onChange={(numberOfCopies: any) => store.update({ numberOfCopies })}
          />
        </Col>
      </Row>

      <Divider />

      <Space size={16}>
        <Button onClick={() => history.back()}>取消</Button>
        <Button
          type="primary"
          onClick={() => window.print()}
          disabled={!store.selectedTemplate}
        >
          打印
        </Button>
      </Space>
    </div>
  );
};

export default observer(PrintSettingShow);
