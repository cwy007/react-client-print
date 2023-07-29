import { Button, Popconfirm, Space, Tooltip } from 'antd';
import { autorun, toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from 'react-client-print/context';

const Fields = () => {
  const { store } = useContext(ClientPrintContext);

  autorun(() => {
    console.log('store-->', store.deleteFieldBtnDisabled, toJS(store));
  });

  return (
    <div>
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
            store.addNode('todo', 'label');
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
            okText="是"
            cancelText="否"
            // onConfirm={handleRemoveFields}
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
    </div>
  );
};

export default observer(Fields);
