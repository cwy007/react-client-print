import { TNode, TTemplate } from './components/TypographyCard/type';
import { ReactClientPrintProps } from './ReactClientPrint';
declare class PrintStore {
    /** 模式 */
    mode: 'display' | 'edit';
    /** 打印份数 */
    numberOfCopies: number;
    /** 打印模板 */
    templates: TTemplate[];
    /** 编辑中的临时模板 */
    edtingTemplate?: TTemplate;
    /** 当前选中模板 */
    selectedTemplate?: TTemplate;
    /** 业务数据 */
    dataSource: Record<string, any>[];
    /** 默认字段 */
    defaultFields: {
        name: string;
        fields: string[];
    }[];
    /** 自定义字段 */
    customFields: {
        name: string;
        fields: string[];
    }[];
    /** 当前编辑的节点，用于高亮显示 */
    activeNode?: TNode;
    /** 辅助线 */
    enableRulerGuide: boolean;
    /** 自动对齐 */
    enableAutoAlign: boolean;
    /** 新增模板弹窗 */
    addTemplateModalVisible: boolean;
    /** 新建/编辑/删除模板 */
    onChange?: ReactClientPrintProps['onChange'];
    /** 添加字段弹窗 */
    addLabelModalVisible: boolean;
    constructor();
    update(payload: Partial<PrintStore>): void;
    /** 默认字段 + 自定义字段 */
    get fields(): {
        name: string;
        fields: string[];
    }[];
    /** 将模板中的占位符替换为对应的值 */
    get replacedTemplate(): TTemplate | undefined;
    get fontStyleDisabled(): boolean;
    get deleteFieldBtnDisabled(): boolean;
    get fieldsGroup(): {
        name: string;
        fields: string[];
        value: string[];
    }[];
    /** 修改模板节点 */
    updateNode(payload: {
        activeNode: TNode;
    }): void;
    addNodeToEditingTemplate(node: TNode): void;
    /** 添加节点 */
    addNode(placeholder: string, type: TNode['type']): void;
    /** 移除节点 */
    removeNode(placeholder: string, isActive: boolean): void;
    /** 新增模板 */
    createTemplate(payload: {
        name: string;
    }): void;
    /** 删除模板 */
    deleteTemplate(): Promise<void>;
    /** 保存模板 */
    updateTemplate(): Promise<void>;
    /** 切换模板 */
    switchTemplate(templateName: string): void;
    mergeTemplateWithData(template: TTemplate, data: Record<string, any>): TTemplate;
    /** 打印数据 */
    get printDataSource(): TTemplate[] | undefined;
}
export default PrintStore;
