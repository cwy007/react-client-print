import { Popconfirm, Select, Space } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from 'react-client-print/context';
import AddTemplateModal from './AddTemplateModal';

const Option = Select.Option;

const PrintSettingEdit = () => {
  const { store } = useContext(ClientPrintContext);
  console.log('store-->', store);

  return (
    <div className="print-setting-edit">
      <Space size={16} align="center" className="select-template-container">
        <Select
          showSearch
          style={{ width: 176 }}
          placeholder="请选择"
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
          onConfirm={store.deleteTemplate} // TODO
          okText="确定"
          cancelText="取消"
        >
          <a>删除</a>
        </Popconfirm>
      </Space>

      {/* 新增模板弹窗 */}
      <AddTemplateModal />
    </div>
  );
};

export default observer(PrintSettingEdit);
