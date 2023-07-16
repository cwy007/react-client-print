import {
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
} from '@ant-design/icons';
import { Checkbox, Form, Radio, Select, Space, Switch } from 'antd';
import { compact } from 'lodash';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from 'react-client-print/context';
import { TNode } from '../../TypographyCard/type';

const FormItem = Form.Item;
const Option = Select.Option;

const fontFamilyList = [
  { name: '浏览器默认', value: 'inherit' },
  { name: '微软雅黑', value: '微软雅黑' },
  { name: 'Arial', value: 'Arial' },
];

const align = [
  { component: <AlignLeftOutlined />, value: 'flex-start' },
  { component: <AlignCenterOutlined />, value: 'center' },
  { component: <AlignRightOutlined />, value: 'flex-end' },
];

export const borderType = [
  { name: '无边框', value: 'none' },
  { name: '实线框', value: '1px solid #aaa' },
  { name: '虚线框', value: '1px dashed #aaa' },
];

const Style = () => {
  const { store } = useContext(ClientPrintContext);
  const {
    fontFamily = 'inherit',
    justifyContent,
    border = 'none',
  } = store.activeNode?.style || {};

  const updateActiveNodeStyle = (style: React.CSSProperties) => {
    const activeNode = {
      ...store.activeNode,
      style: {
        ...store.activeNode?.style,
        ...style,
      },
    } as TNode;
    store.updateNode({ activeNode });
  };

  return (
    <Space size={10} direction="vertical">
      <FormItem label="字体" colon={false} className="font-form-item">
        <Select
          disabled={store.fontStyleDisabled}
          size="small"
          value={fontFamily}
          style={{ width: '100%' }}
          onChange={(value) => updateActiveNodeStyle({ fontFamily: value })}
        >
          {fontFamilyList.map((item) => (
            <Option key={item.value} value={item.value}>
              {item.name}
            </Option>
          ))}
        </Select>

        <div className="font-stye-and-font-size">
          <Checkbox.Group
            value={compact([
              store.activeNode?.style?.fontWeight,
              store.activeNode?.style?.fontStyle,
              store.activeNode?.style?.textDecoration,
            ])}
            disabled={store.fontStyleDisabled}
            onChange={(value) =>
              updateActiveNodeStyle({
                fontStyle: value?.includes('italic') ? 'italic' : undefined,
                textDecoration: value?.includes('underline')
                  ? 'underline'
                  : undefined,
                fontWeight: value?.includes('bold') ? 'bold' : undefined,
              })
            }
          >
            <Checkbox value="bold">
              <BoldOutlined />
            </Checkbox>
            <Checkbox value="italic">
              <ItalicOutlined />
            </Checkbox>
            <Checkbox value="underline">
              <UnderlineOutlined />
            </Checkbox>
          </Checkbox.Group>
          <Select
            disabled={store.fontStyleDisabled}
            size="small"
            value={String(store.activeNode?.style?.fontSize ?? 14)}
            style={{ width: 66 }}
            onChange={(value) => updateActiveNodeStyle({ fontSize: value })}
          >
            {Array(16)
              .fill(1)
              .map((_, idx) => ({ name: idx + 7 }))
              .map((item) => (
                <Option key={item.name} value={item.name}>
                  {item.name}
                </Option>
              ))}
          </Select>
        </div>
      </FormItem>

      <FormItem label="对齐" colon={false}>
        <Radio.Group
          disabled={store.fontStyleDisabled}
          defaultValue="flex-start"
          size="small"
          value={justifyContent}
          onChange={(e) =>
            updateActiveNodeStyle({ justifyContent: e.target.value })
          }
        >
          {align.map((item) => (
            <Radio.Button key={item.value} value={item.value}>
              {item.component}
            </Radio.Button>
          ))}
        </Radio.Group>
      </FormItem>
      <FormItem label="边框">
        <Select
          disabled={store.fontStyleDisabled}
          size="small"
          value={border}
          onChange={(value) => updateActiveNodeStyle({ border: value })}
        >
          {borderType.map((item) => (
            <Option key={item.name} value={item.value}>
              {item.name}
            </Option>
          ))}
        </Select>
      </FormItem>
      <FormItem label="辅助线">
        <Switch
          size="small"
          checked={store.enableRulerGuide}
          onChange={(checked) => {
            store.update({ enableRulerGuide: checked });
          }}
        />
      </FormItem>
      <FormItem label="自动对齐">
        <Switch
          size="small"
          checked={store.enableAutoAlign}
          onChange={(checked) => store.update({ enableAutoAlign: checked })}
        />
      </FormItem>
    </Space>
  );
};

export default observer(Style);
