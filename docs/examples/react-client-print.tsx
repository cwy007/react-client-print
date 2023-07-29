import { useRequest } from 'ahooks';
import { message, Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import ReactClientPrint from 'react-client-print';
import PrintStore from 'react-client-print/store';
import useLocalObservable from './hooks/useLocalObservable';
import './react-client-print.less';
import {
  createTemplateSvc,
  deleteTemplateSvc,
  getCustomFieldsSvc,
  getPrintDataSvc,
  getTemplatesSvc,
  updateTemplateSvc,
} from './services';
import defaultTemplate from './services/defaultTemplate.json';

const defaultFields = [
  {
    name: '商品信息',
    fields: ['商品名称', '商品类别', '商品单价', '商品生成日期'],
  },
  {
    name: '订单信息',
    fields: ['订单名称', '订单类型', '订单下单日期', '客户地址', '客户名称'],
  },
  {
    name: '其他信息',
    fields: ['打印日期', '二维码', '条形码'],
  },
];

const TagEditor = () => {
  const storeRef = useRef<{ store: PrintStore }>(null);
  const countRef = useRef(0);
  const { store, updateStore } = useLocalObservable(() => ({
    templates: [] as Record<string, any>[],
    defaultTemplateName: undefined as unknown as string,
    dataSource: [] as Record<string, any>[],
    defaultFields,
  }));

  const { loading: loadingTemplates, run: getTemplatesReq } = useRequest(
    () => getTemplatesSvc(),
    {
      manual: true,
      onSuccess: (resp) => {
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
        if (resp.code === 200) {
          updateStore({ dataSource: resp.data?.list });
        }
      },
    },
  );

  const refresh = () => {
    getTemplatesReq();
    getPrintDataReq();
  };

  useEffect(() => {
    refresh();

    // init one default template for demo
    setTimeout(() => {
      if (!store.templates?.length && !countRef.current) {
        storeRef.current?.store.createTemplate({
          ...defaultTemplate,
        });
        countRef.current = 1;
      }
    }, 2000);
  }, []);

  useEffect(() => {
    const fetchCustomFieldsSvc = async () => {
      const resp = await getCustomFieldsSvc();
      if (resp.code === 200) {
        updateStore({
          defaultFields: [...store.defaultFields, ...(resp.data?.list || [])],
        });
      }
    };
    fetchCustomFieldsSvc();
  }, []);

  return (
    <Spin spinning={loadingTemplates || loadingPrintData}>
      <div className="tag-editor-container">
        <ReactClientPrint
          ref={storeRef}
          templates={store.templates}
          defaultTemplateName={store.defaultTemplateName}
          dataSource={store.dataSource}
          defaultFields={store.defaultFields}
          onChange={async ({ template, operationType }) => {
            if (operationType === 'create') {
              const resp = await createTemplateSvc(template);
              if (resp.code === 200) {
                message.success('新建模板成功');
              }
            }

            if (operationType === 'update') {
              const resp = await updateTemplateSvc(template);
              if (resp.code === 200) {
                message.success('修改模板成功');
              }
            }

            if (operationType === 'delete') {
              const resp = await deleteTemplateSvc(template);
              if (resp.code === 200) {
                message.success('删除模板成功');
              }
            }

            refresh();
          }}
        />
      </div>
    </Spin>
  );
};

export default observer(TagEditor);
