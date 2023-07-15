import mockjs from 'mockjs';

/** 获取模板 */
export const mockTemplatesResp = mockjs.mock({
  code: 200,
  message: 'success',
  data: {
    'list|1-10': [
      {
        'id|+1': 1,
        name: '@word(5)',
      },
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
      {
        'id|+1': 1,
        name: '@word(5)',
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
