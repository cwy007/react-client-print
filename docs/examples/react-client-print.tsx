import { useRequest } from 'ahooks';
import { Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { ReactClientPrint } from 'react-client-print';
import {
  getCustomFieldsSvc,
  getPrintDataSvc,
  getTemplatesSvc,
} from './services';
import useLocalObservable from './utils/useLocalObservable';

const TagEditor = () => {
  const { store, updateStore } = useLocalObservable(() => ({
    templates: [] as Record<string, any>[],
    defaultTemplateName: undefined as unknown as string,
    dataSource: [] as Record<string, any>[],
  }));

  const { loading: loadingTemplates, run: getTemplatesReq } = useRequest(
    () => getTemplatesSvc(),
    {
      manual: true,
      onSuccess: (resp) => {
        // console.log('tagEditor-->resp', resp)
        if (resp.code === 200) {
          updateStore({
            templates: resp.data?.list,
            defaultTemplateName: resp.data?.defaultTemplateName,
          });
        }
      },
    },
  );

  const { loading: loadingPrintData, run: getPrintDataReq } = useRequest(
    () => getPrintDataSvc(),
    {
      manual: true,
      onSuccess: (resp) => {
        // console.log('tagEditor-->resp', resp)
        if (resp.code === 200) {
          updateStore({ dataSource: resp.data?.list });
        }
      },
    },
  );

  useEffect(() => {
    getTemplatesReq();
    getPrintDataReq();
  }, []);

  return (
    <Spin spinning={loadingTemplates || loadingPrintData}>
      <div className="tag-editor-container">
        <ReactClientPrint
          templates={store.templates}
          defaultTemplateName={store.defaultTemplateName}
          dataSource={store.dataSource}
          defaultFields={[
            {
              name: '商品',
              fields: ['名称', '单价', '生成日期'],
            },
          ]}
          fetchCustomFieldsSvc={async () => {
            const resp = await getCustomFieldsSvc();
            if (resp.code === 200) {
              return resp.data?.list;
            }
            return [];
          }}
        />
      </div>
    </Spin>
  );
};

export default observer(TagEditor);
