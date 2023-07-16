import { Button, Collapse, Popconfirm, Select, Space } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from 'react-client-print/context';
import { TTemplate } from '../TypographyCard/type';
import AddTemplateModal from './AddTemplateModal';
import './index.less';
import PaperSize from './PaperSize';

const Option = Select.Option;
const Panel = Collapse.Panel;

const PrintSettingEdit = () => {
  const { store } = useContext(ClientPrintContext);

  return (
    <div className="print-setting-edit">
      <Space size={16} align="center" className="select-template-container">
        <Select
          showSearch
          allowClear
          style={{ width: 176 }}
          placeholder="请选择模板"
          value={store.selectedTemplate?.name}
          onChange={(templateName) => store.switchTemplate(templateName)}
        >
          {store.templates?.map((v) => (
            <Option key={v.name} value={v.name}>
              {v.name}
            </Option>
          ))}
        </Select>

        <a onClick={() => store.update({ addTemplateModalVisible: true })}>
          新增
        </a>

        <Popconfirm
          placement="topLeft"
          title="确定删除当前模板吗？"
          onConfirm={store.deleteTemplate}
          okText="确定"
          cancelText="取消"
        >
          <a>删除</a>
        </Popconfirm>
      </Space>

      <Collapse defaultActiveKey={['pageSize', 'style', 'fields']}>
        <Panel header="打印及纸张设置" key="pageSize">
          <PaperSize />
        </Panel>
        <Panel header="样式" key="style">
          bar
        </Panel>
        <Panel header="字段" key="fields">
          baz
        </Panel>
      </Collapse>

      <Space className="fixed-footer">
        <Button
          type="dashed"
          onClick={() => {
            store.update({
              edtingTemplate: {
                ...store.edtingTemplate,
                nodes: [],
              } as TTemplate,
            });
          }}
        >
          清空
        </Button>
        <Button
          onClick={() => {
            store.update({
              mode: 'display',
              edtingTemplate: undefined,
            });
          }}
        >
          返回
        </Button>
        <Button
          type="primary"
          onClick={async () => {
            await store.updateTemplate();
            store.update({ mode: 'display' });
          }}
        >
          保存
        </Button>
      </Space>

      {/* 新增模板弹窗 */}
      <AddTemplateModal />
    </div>
  );
};

export default observer(PrintSettingEdit);
