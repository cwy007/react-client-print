// import axios from 'axios';
import { TTemplate } from 'react-client-print/components/TypographyCard/type';
import {
  createTemplates,
  deleteTemplate,
  getTemplates,
  updateTemplate,
} from '../utils';
import { mockCustomFieldsResp, mockGetPrintDataResp } from './mock';

interface DataResponse<T> {
  code: number;
  message: string;
  data?: T;
}

type getTemplatesResp = DataResponse<{
  defaultTemplateName: string;
  list: Record<string, any>[];
}>;

type getPrintDataResp = DataResponse<{
  list: Record<string, any>[];
}>;

type getCustomFieldsResp = DataResponse<{
  list: {
    name: string;
    fields: string[];
  }[];
}>;

/** 获取打印模板 */
export const getTemplatesSvc = async (): Promise<getTemplatesResp> => {
  // try {
  //   const resp = await axios.get('/todo/path/to/get/templates');
  //   return resp as unknown as getTemplatesResp;
  // } catch (error) {
  //   // console.error('error-->', error);
  //   // return mockTemplatesResp;
  // }
  const templates = getTemplates();
  return {
    code: 200,
    message: 'success',
    data: {
      list: templates,
      defaultTemplateName: templates?.[0]?.name,
    },
  };
};

/** 新建打印模板 */
export const createTemplateSvc = async (
  payload: Partial<TTemplate>,
): Promise<DataResponse<any>> => {
  // try {
  //   const resp = await axios.post('/todo/path/to/create/template', payload);
  //   return resp as any;
  // } catch (error) {
  //   // return mockCustomFieldsResp;
  // }
  createTemplates(payload);
  return {
    code: 200,
    message: 'success',
  };
};

/** 修改打印模板 */
export const updateTemplateSvc = async (
  payload: Partial<TTemplate>,
): Promise<DataResponse<any>> => {
  // try {
  //   const resp = await axios.post('/todo/path/to/create/template', payload);
  //   return resp as any;
  // } catch (error) {
  //   // console.error('error-->', error);
  //   // return mockCustomFieldsResp;
  // }
  updateTemplate(payload);
  return {
    code: 200,
    message: 'success',
  };
};

/** 删除打印模板 */
export const deleteTemplateSvc = async (
  payload: Partial<TTemplate>,
): Promise<DataResponse<any>> => {
  // try {
  //   const resp = await axios.post('/todo/path/to/create/template', payload);
  //   return resp as any;
  // } catch (error) {
  //   // console.error('error-->', error);
  //   // return mockCustomFieldsResp;
  // }
  deleteTemplate(payload);
  return {
    code: 200,
    message: 'success',
  };
};

/** 获取打印数据 */
export const getPrintDataSvc = async (): Promise<getPrintDataResp> => {
  // try {
  //   const resp = await axios.get('/todo/path/to/get/print/data');
  //   return resp as unknown as getPrintDataResp;
  // } catch (error) {
  //   console.error('error-->', error);
  // }
  return mockGetPrintDataResp;
};

/** 获取自定义字段 */
export const getCustomFieldsSvc = async (): Promise<getCustomFieldsResp> => {
  // try {
  //   const resp = await axios.get('/todo/path/to/get/custom/fields');
  //   return resp as unknown as getCustomFieldsResp;
  // } catch (error) {
  //   console.error('error-->', error);
  // }
  return mockCustomFieldsResp;
};
