import { flatten } from 'lodash';
import { makeAutoObservable } from 'mobx';
import { TNode, TTemplate } from './components/TypographyCard/type';

class PrintStore {
  /** 打印份数 */
  numberOfCopies: number = 1;

  /** 打印模板 */
  templates: TTemplate[] = [];

  /** 默认模板名称 */
  defaultTemplateName?: string;

  /** 业务数据 */
  dataSource: Record<string, any>[] = [];

  /** 默认字段 */
  defaultFields: { name: string; fields: string[] }[] = [];

  /** 自定义字段 */
  customFields: { name: string; fields: string[] }[] = [];

  /**  */
  activeNode?: any;

  /** 辅助线 */
  enableRulerGuide: boolean = true;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  update(state: Partial<PrintStore>) {
    Object.assign(this, state);
  }

  /** 默认字段 + 自定义字段 */
  get fields() {
    return flatten([this.defaultFields, this.customFields]);
  }

  /** 默认模板 */
  get defaultTemplate() {
    return this.templates.find((v) => v.name === this.defaultTemplateName);
  }

  /** 将模板中的占位符替换为对应的值 */
  get replacedTemplate() {
    if (this.defaultTemplateName) {
      const firstRecord = this.dataSource?.[0];
      const nodes: TNode[] = [];
      this.defaultTemplate?.nodes.forEach((node) => {
        nodes.push({
          ...node,
          placeholder: firstRecord[node.placeholder?.slice(1, -1)]?.toString(),
        });
      });
      return {
        ...this.defaultTemplate,
        nodes,
      };
    }

    return undefined;
  }
}

export default PrintStore;
