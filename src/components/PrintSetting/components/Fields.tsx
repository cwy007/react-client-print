import {
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  Popconfirm,
  Space,
  Tooltip,
} from 'antd';
import { difference } from 'lodash';
import { autorun, toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from 'react-client-print/context';

const FormItem = Form.Item;

interface AddLabelModalProps {
  visible: boolean;
  onOk: (values: { newField: string }) => void;
  onCancel: () => void;
}

const AddLabelModal = ({ visible, onOk, onCancel }: AddLabelModalProps) => {
  const [form] = Form.useForm();
  const handleOk = () => {
    form.validateFields().then((values) => {
      onOk(values);
    });
  };

  return (
    <Modal
      open={visible}
      title="添加字段"
      closable
      maskClosable
      onOk={handleOk}
      onCancel={onCancel}
      okText="确定"
      cancelText="取消"
    >
      <Form form={form} style={{ width: '100%' }}>
        <FormItem
          label="新增字段"
          colon={false}
          name="newField"
          rules={[{ required: true, message: '不能为空' }]}
        >
          <Input
            autoFocus
            placeholder="请输入"
            style={{ width: '100%' }}
            onPressEnter={handleOk}
          />
        </FormItem>
      </Form>
    </Modal>
  );
};

const Fields = () => {
  const { store } = useContext(ClientPrintContext);

  autorun(() => {
    console.log('store-->', store.deleteFieldBtnDisabled, toJS(store));
  });

  return (
    <div className="fields-container">
      <Space
        size={16}
        align="center"
        style={{ justifyContent: 'space-around', width: '100%' }}
      >
        <Button
          size="small"
          type="dashed"
          style={{ width: 120 }}
          onClick={() => {
            store.update({ addLabelModalVisible: true });
          }}
        >
          添加字段
        </Button>

        {store.deleteFieldBtnDisabled ? (
          <Tooltip placement="top" title="请先在打印页面中选中要删除的字段">
            <Button
              type="dashed"
              className="disabled-btn"
              size="small"
              style={{ width: 120 }}
            >
              删除字段
            </Button>
          </Tooltip>
        ) : (
          <Popconfirm
            title="你确定删除当前选中的字段吗？"
            okText="确定"
            cancelText="取消"
            onConfirm={() =>
              store.removeNode(store.activeNode!.placeholder, true)
            }
          >
            <Button type="dashed" size="small" style={{ width: 120 }}>
              删除字段
            </Button>
          </Popconfirm>
        )}
      </Space>

      {store.addLabelModalVisible && (
        <AddLabelModal
          visible={store.addLabelModalVisible}
          onOk={(values) => {
            store.addNode(values.newField, 'label');
            store.update({ addLabelModalVisible: false });
          }}
          onCancel={() => store.update({ addLabelModalVisible: false })}
        />
      )}

      {store.fieldsGroup.map((v) => (
        <div className="field-group" key={v.name}>
          <div className="field-group-name">{v.name}</div>
          <Checkbox.Group
            value={v.value}
            onChange={(checkedValue) => {
              console.log('checkedValue', checkedValue);
              if (v.value.length === checkedValue.length) return;
              if (v.value.length > checkedValue.length) {
                const fieldNames = difference(v.value, checkedValue);
                fieldNames.forEach((fieldName) => {
                  store.removeNode(
                    `{${fieldName}}`,
                    store.activeNode?.placeholder === fieldName,
                  );
                });
              } else {
                const fieldName = difference(checkedValue, v.value)[0];
                store.addNode(`{${fieldName}}`, 'value');
              }
            }}
          >
            <Space size={8} wrap>
              {v.fields.map((fieldName) => (
                <Checkbox key={fieldName} value={fieldName}>
                  {fieldName}
                </Checkbox>
              ))}
            </Space>
          </Checkbox.Group>
        </div>
      ))}
    </div>
  );
};

export default observer(Fields);
