import mockjs from 'mockjs';
// import defaultTemplate from './defaultTemplate.json';

/** 获取模板 */
export const mockTemplatesResp = mockjs.mock({
  code: 200,
  message: 'success',
  data: {
    list: [],
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
      {
        'id|+1': 1,
        商品名称: '商品名称 @natural(10, 15)',
        商品单价: '商品单价 @natural(5000, 15000)',
        商品类别: '商品类别 @natural(5, 15)',
        商品生成日期: '商品生成日期 @datetime("yyyy-MM-dd")',
        订单名称: '订单名称 @word(8)',
        订单类型: '订单类型 @word(6)',
        客户地址: '客户地址 @word(15)',
        客户名称: '客户名称 @word(4)',
        订单下单日期: '订单下单日期 @datetime("yyyy-MM-dd HH:mm:ss")',
        打印日期: '@datetime("yyyy-MM-dd")',
        条形码: 'https://www.npmjs.com/package/jsbarcode',
        二维码: 'https://www.npmjs.com/package/qrcode',
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
        name: '自定义字段' + '@natural(10, 100)',
        'fields|1-6': ['field @word(5)'],
      },
    ],
  },
});
