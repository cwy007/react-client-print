import axios from 'axios';
import { mockTemplatesResp } from './mock';

interface getTemplatesResp {
  code: number;
  message: string;
  data: {
    list: Record<string, any>[];
  };
}

/** 获取打印模板 */
export const getTemplatesSvc = async (): Promise<getTemplatesResp> => {
  try {
    const resp = await axios.get('/todo/path/to/get/templates');
    return resp as unknown as getTemplatesResp;
  } catch (error) {
    console.error('error-->', error);
    return mockTemplatesResp;
  }
};
