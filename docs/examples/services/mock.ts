import mockjs from 'mockjs';
import defaultTemplate from '../jsons/defaultTemplate.json';

/** 获取模板 */
export const mockTemplatesResp = mockjs.mock({
  code: 200,
  message: 'success',
  data: {
    'list|1-10': [
      // {
      //   'id|+1': 1,
      //   name: '@word(5)',

      // },
      defaultTemplate,
    ],
    defaultTemplateName: function () {
      return (this as any)['list']?.[0]?.name;
    },
  },
});

/** 获取打印数据 */
export const mockGetPrintDataResp = mockjs.mock({
  code: 200,
  message: 'success',
  data: {
    'list|1-10': [
      // {
      //   'id|+1': 1,
      //   name: '@word(5)',
      //   size: {
      //     type: 'fixed',
      //     width: 100,
      //     height: 100,
      //   },
      // },
      {
        'id|+1': 1,
        商品名称: '@word(3)',
        商品单价: '@natural(1, 10)',
        商品生成日期: '@datetime("yyyy-MM-dd HH:mm:ss")',
        订单名称: '@word(6)',
        客户订单名称: '@word(4)',
        订单下单日期: '@datetime("yyyy-MM-dd HH:mm:ss")',
        打印日期: '@datetime("yyyy-MM-dd")',
      },
    ],
  },
});

/** 获取后端自定义字段 */
export const mockCustomFieldsResp = mockjs.mock({
  code: 200,
  message: 'success',
  data: {
    'list|1-10': [
      {
        name: '@word(5)',
        'fields|1-6': ['@word(5 )'],
      },
    ],
  },
});
