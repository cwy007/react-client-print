import { Form, Input, Modal } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from 'react-client-print/context';

const FormItem = Form.Item;

const AddTemplateModal = () => {
  const { store } = useContext(ClientPrintContext);
  const [form] = Form.useForm();

  const onOk = () => {
    form.validateFields().then((values) => {
      store.createTemplate(values);
      store.update({ addTemplateModalVisible: false });
    });
  };

  return (
    <Modal
      closable
      destroyOnClose
      title="新增打印模板"
      open={store.addTemplateModalVisible}
      onOk={onOk}
      onCancel={() => store.update({ addTemplateModalVisible: false })}
      okText="确定"
      cancelText="取消"
    >
      <Form form={form}>
        <FormItem
          label="模板名称"
          name="name"
          rules={[
            { required: true, message: '模板名称不能为空' },
            {
              validator: (_r, value) => {
                const target = store.templates?.find((v) => v.name === value);
                if (target) {
                  return Promise.reject(new Error('模板名称重复'));
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input placeholder="请输入" onPressEnter={() => onOk()} />
        </FormItem>
      </Form>
    </Modal>
  );
};

export default observer(AddTemplateModal);
