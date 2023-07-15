import { useRequest } from 'ahooks';
import { Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { ReactClientPrint } from 'react-client-print';
import { getTemplatesSvc } from './services';
import useLocalObservable from './utils/useLocalObservable';

const TagEditor = () => {
  const { store, updateStore } = useLocalObservable(() => ({
    templates: [] as Record<string, any>[],
  }));

  const { loading } = useRequest(() => getTemplatesSvc(), {
    onSuccess: (resp) => {
      // console.log('tagEditor-->resp', resp)
      updateStore({ templates: resp.data.list });
    },
  });

  return (
    <Spin spinning={loading}>
      <div className="tag-editor-container">
        <ReactClientPrint
          dataSource={[]}
          templates={store.templates}
          defaultTemplate="foo"
        />
      </div>
    </Spin>
  );
};

export default observer(TagEditor);
