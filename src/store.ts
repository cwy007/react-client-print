import { flatten } from 'lodash';
import { makeAutoObservable, toJS } from 'mobx';
import { TNode, TTemplate } from './components/TypographyCard/type';

class PrintStore {
  /** 模式 */
  mode: 'display' | 'edit' = 'edit';

  /** 打印份数 */
  numberOfCopies: number | null = 1;

  /** 打印模板 */
  templates: TTemplate[] = [];

  /** 编辑中的临时模板 */
  edtingTemplate?: TTemplate;

  /** 当前选中模板 */
  selectedTemplate?: TTemplate;

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

  /** 自动对齐 */
  enableAutoAlign: boolean = true;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  update(payload: Partial<PrintStore>) {
    Object.assign(this, payload);
  }

  /** 默认字段 + 自定义字段 */
  get fields() {
    return flatten([this.defaultFields, this.customFields]);
  }

  /** 将模板中的占位符替换为对应的值 */
  get replacedTemplate() {
    if (this.selectedTemplate) {
      const firstRecord = this.dataSource?.[0];
      const nodes: TNode[] = [];
      this.selectedTemplate?.nodes?.forEach((node) => {
        nodes.push({
          ...node,
          placeholder:
            firstRecord?.[node.placeholder?.slice(1, -1)]?.toString(),
        });
      });
      return {
        ...this.selectedTemplate,
        nodes,
      } as TTemplate;
    }

    return undefined;
  }

  /** 修改模板节点 */
  updateNode(payload: { activeNode: TNode }) {
    this.update({
      activeNode: payload.activeNode,
      selectedTemplate: {
        ...this.selectedTemplate!,
        nodes: (this.selectedTemplate?.nodes || []).map((n) => {
          if (n.id === payload.activeNode?.id) {
            return payload.activeNode;
          }
          return n;
        }),
      },
    });
  }

  /** 添加节点 */
  addNode() {}

  /** 移除节点 */
  removeNode() {}

  /** 添加模板 */
  createTemplate() {}

  /** 删除模板 */
  deleteTemplate() {}

  /** 保存模板 */
  saveTemplate() {}

  /** 切换模板 */
  switchTemplate(templateName: string) {
    const selectedTemplate = this.templates.find(
      (v) => v.name === templateName,
    );
    this.update({
      selectedTemplate,
      edtingTemplate: toJS(selectedTemplate),
    });
  }

  /** 触发打印 */
  print() {}
}

export default PrintStore;
