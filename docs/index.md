---
hero:
  title: 客户端打印组件
  description: react + mobx + antd + less
  actions:
    - text: 快速上手
      link: /demo/react-client-print
features:
  - title: 打印模板
    # emoji: 💎
    description: 可以创建多个打印模板
  - title: PDF大小
    # emoji: 🌈
    description: 可以定制打印预览中PDF文件的大小
  - title: 打印份数
    # emoji: 🚀
    description: 可以指定打印份数
---

### 快速使用

### 📦 安装依赖

```bash | pure
yarn add react-client-print

or

npm install react-client-print

```

### 🔨 快速开始

```jsx | pure
import { ReactClientPrint } from 'react-client-print';

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

## 问题反馈

请访问 [Github](https://github.com/cwy007/react-client-print/issues)
