# react-client-print

[![NPM version](https://img.shields.io/npm/v/react-client-print.svg?style=flat)](https://npmjs.org/package/react-client-print)
[![NPM downloads](http://img.shields.io/npm/dm/react-client-print.svg?style=flat)](https://npmjs.org/package/react-client-print)

标签编辑器 - 定制标签打印模板

## demos

[线上演示]()

1.预览
![预览](https://p.ipic.vip/8q8erb.png)

2.编辑模板
![编辑模板](https://p.ipic.vip/z28tao.png)

3.触发打印
![触发打印](https://p.ipic.vip/t0iqqc.png)

## Usage

```bash | pure
yarn add react-client-print

or

npm install react-client-print

```

```jsx
import ReactClientPrint from 'react-client-print';

<ReactClientPrint
  ref={storeRef}
  templates={store.templates}
  defaultTemplateName={store.defaultTemplateName}
  dataSource={store.dataSource}
  defaultFields={store.defaultFields}
  onChange={async ({ template, operationType }) => {
    if (operationType === 'create') {
      const resp = await createTemplateSvc(template);
      if (resp.code === 200) {
        message.success('新建模板成功');
      }
    }

    if (operationType === 'update') {
      const resp = await updateTemplateSvc(template);
      if (resp.code === 200) {
        message.success('修改模板成功');
      }
    }

    if (operationType === 'delete') {
      const resp = await deleteTemplateSvc(template);
      if (resp.code === 200) {
        message.success('删除模板成功');
      }
    }

    refresh();
  }}
/>;
```

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

## Development

```bash
# install dependencies
$ yarn install

# develop library by docs demo
$ yarn start
```

## Reference

- [dumi](https://d.umijs.org/)
- [antd](https://ant-design.antgroup.com/components/overview-cn/)
- [less](https://less.bootcss.com/)
- [mobx](https://mobx.js.org/README.html)
- [react](https://react.dev/learn)

-[npm publish](https://www.jianshu.com/p/0faaff26a2c8)

> `npm login --registry=https://registry.npmjs.org`

## LICENSE

MIT
