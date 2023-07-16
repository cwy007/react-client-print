import { flatten } from 'lodash';
import { makeAutoObservable, toJS } from 'mobx';
import { TNode, TTemplate } from './components/TypographyCard/type';
import { ReactClientPrintProps } from './ReactClientPrint';

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

  /** 新增模板弹窗 */
  addTemplateModalVisible: boolean = false;

  /** 新建/编辑/删除模板 */
  onChange?: ReactClientPrintProps['onChange'];

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

  /** 新增模板 */
  createTemplate(payload: { name: string }) {
    // const newTemplate = { ...defaultTemplate, ...payload } as TTemplate;
    // this.update({ templates: [...this.templates, newTemplate] });
    console.log('createTemplate--->', this.onChange);
    if (this.onChange) {
      this.onChange({
        template: payload,
        operationType: 'create',
      });
    }
  }

  /** 删除模板 */
  async deleteTemplate() {
    if (this.onChange) {
      await this.onChange({
        template: this.selectedTemplate!,
        operationType: 'delete',
      });
      if (this.edtingTemplate?.name === this.selectedTemplate?.name) {
        this.update({
          edtingTemplate: undefined,
          selectedTemplate: undefined,
        });
      }
    }
  }

  /** 保存模板 */
  updateTemplate() {
    if (this.onChange) {
      this.onChange({
        template: this.edtingTemplate!,
        operationType: 'update',
      });
    }
  }

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
