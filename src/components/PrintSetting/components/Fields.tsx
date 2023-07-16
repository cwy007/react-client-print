import { Button, Popconfirm, Space, Tooltip } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from 'react-client-print/context';

const Fields = () => {
  const { store } = useContext(ClientPrintContext);
  // const [form] = Form.useForm();

  return (
    <div>
      <Space size={16}>
        <Button type="dashed">添加字段</Button>

        {store.deleteFieldBtnDisabled ? (
          <Tooltip placement="top" title="请先在打印页面中选中要删除的字段">
            <Button type="dashed" className="disabled-btn">
              删除字段
            </Button>
            {/* <div className={classNames(styles.formBtn, styles.disableBtn)}>
              删除字段
            </div> */}
          </Tooltip>
        ) : (
          <Popconfirm
            title="你确定删除当前选中的字段吗？"
            okText="是"
            cancelText="否"
            // onConfirm={handleRemoveFields}
          >
            {/* <div className={styles.formBtn}>删除字段</div> */}
            <Button type="dashed" className="disabled-btn">
              删除字段
            </Button>
          </Popconfirm>
        )}
      </Space>
    </div>
  );
};

export default observer(Fields);
