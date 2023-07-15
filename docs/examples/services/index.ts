import axios from 'axios';
import {
  mockCustomFieldsResp,
  mockGetPrintDataResp,
  mockTemplatesResp,
} from './mock';

interface getTemplatesResp {
  code: number;
  message: string;
  data: {
    defaultTemplateName: string;
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

interface getPrintDataResp {
  code: number;
  message: string;
  data: {
    defaultTemplateName: string;
    list: Record<string, any>[];
  };
}

/** 获取打印数据 */
export const getPrintDataSvc = async (): Promise<getPrintDataResp> => {
  try {
    const resp = await axios.get('/todo/path/to/get/print/data');
    return resp as unknown as getPrintDataResp;
  } catch (error) {
    console.error('error-->', error);
    return mockGetPrintDataResp;
  }
};

interface getCustomFieldsResp {
  code: number;
  message: string;
  data: {
    list: {
      name: string;
      fields: string[];
    }[];
  };
}

/** 获取打印数据 */
export const getCustomFieldsSvc = async (): Promise<getCustomFieldsResp> => {
  try {
    const resp = await axios.get('/todo/path/to/get/custom/fields');
    return resp as unknown as getCustomFieldsResp;
  } catch (error) {
    console.error('error-->', error);
    return mockCustomFieldsResp;
  }
};
