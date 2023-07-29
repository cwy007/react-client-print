<!-- ---
toc: content
--- -->

# ReactClientPrint

## 定制打印标签

<code src="../examples/react-client-print.tsx"></code>

## API

| 属性名              | 描述                     | 类型                                | 默认值      |
| ------------------- | ------------------------ | ----------------------------------- | ----------- |
| templates           | 打印模板列表             | `TTemplate`                         | `[]`        |
| defaultTemplateName | 默认模板名称             | `string`                            | `undefined` |
| dataSource          | 打印的数据源             | `Record<string, string>[]`          | `[]`        |
| defaultFields       | 模板字段                 | `{name: string; fields: sring[]}[]` | `[]`        |
| onChange            | 新建/编辑/删除模板的回调 | `ReactClientPrintProps['onChange']` | `undefined` |

### 方法

| 名称  | 描述                           | 类型         |
| ----- | ------------------------------ | ------------ |
| store | 组件内部状态 PrintStore 的实例 | `PrintStore` |

### types

```tsx | pure
type TBarcodeFormat = 'CODE39' | 'CODE128' | 'EAN8' | 'EAN13' | 'UPC';

interface TPosition {
  width: number;
  height: number;
  left: number;
  top: number;
  style?: React.CSSProperties;
}

export interface TNode extends TPosition {
  id: string | number;
  placeholder: string;
  type?: 'label' | 'value' | 'qrcode' | 'barcode'; // TODO
  formmat?: TBarcodeFormat; // TODO
}

export interface TTemplate {
  size: {
    type: 'fixed';
    width: number;
    height: number;
  };
  nodes: TNode[];
  name: string;
}

interface ReactClientPrintProps {
  dataSource?: Record<string, string>[];
  templates?: TTemplate[];
  defaultTemplateName?: string;
  defaultFields: {
    name: string;
    fields: string[];
  }[];
  onChange: (payload: {
    template: Partial<TTemplate>;
    operationType: 'update' | 'create' | 'delete';
  }) => void;
}
```
