import { EditOutlined, PrinterOutlined } from '@ant-design/icons';
import { Button, Col, Divider, InputNumber, Row, Select, Space } from 'antd';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from "../../context";
import "./index.less";
var Option = Select.Option;
var PrintSettingShow = function PrintSettingShow() {
  var _store$selectedTempla;
  var _useContext = useContext(ClientPrintContext),
    store = _useContext.store;
  return /*#__PURE__*/React.createElement("div", {
    className: "print-setting-show"
  }, /*#__PURE__*/React.createElement(PrinterOutlined, {
    style: {
      color: '#dadada',
      fontSize: 86
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "print-label"
  }, "\u6253\u5370"), /*#__PURE__*/React.createElement(Row, {
    gutter: [8, 16],
    style: {
      padding: '0 16px'
    },
    align: "middle"
  }, /*#__PURE__*/React.createElement(Col, {
    span: 6
  }, "\u6253\u5370\u6A21\u677F"), /*#__PURE__*/React.createElement(Col, {
    span: 12
  }, /*#__PURE__*/React.createElement(Select, {
    showSearch: true,
    style: {
      width: '100%'
    },
    placeholder: "\u9009\u62E9\u6A21\u7248",
    value: (_store$selectedTempla = store.selectedTemplate) === null || _store$selectedTempla === void 0 ? void 0 : _store$selectedTempla.name,
    onChange: function onChange(templateName) {
      return store.switchTemplate(templateName);
    }
  }, (store.templates || []).map(function (template) {
    return /*#__PURE__*/React.createElement(Option, {
      key: template.name,
      value: template.name
    }, template.name);
  }))), /*#__PURE__*/React.createElement(Col, {
    span: 6
  }, /*#__PURE__*/React.createElement(EditOutlined, {
    style: {
      color: '#006FFF',
      fontSize: '18px',
      marginLeft: '8px'
    },
    onClick: function onClick() {
      return store.update({
        mode: 'edit',
        edtingTemplate: toJS(store.selectedTemplate)
      });
    }
  })), /*#__PURE__*/React.createElement(Col, {
    span: 6
  }, "\u6253\u5370\u4EFD\u6570"), /*#__PURE__*/React.createElement(Col, {
    span: 12
  }, /*#__PURE__*/React.createElement(InputNumber, {
    style: {
      width: '100%'
    },
    addonAfter: "\u4EFD",
    min: 1,
    max: 100,
    value: store.numberOfCopies,
    onChange: function onChange(numberOfCopies) {
      return store.update({
        numberOfCopies: numberOfCopies
      });
    }
  }))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Space, {
    size: 16
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return history.back();
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    onClick: function onClick() {
      return window.print();
    },
    disabled: !store.selectedTemplate
  }, "\u6253\u5370")));
};
export default observer(PrintSettingShow);