import mockjs from 'mockjs';

export const mockTemplatesResp = mockjs.mock({
  code: 200,
  message: 'success',
  data: {
    'list|1-10': [
      {
        'id|+1': 1,
      },
    ],
  },
});
