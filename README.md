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

## LICENSE

MIT
