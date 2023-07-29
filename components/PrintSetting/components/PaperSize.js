import { Form, InputNumber } from 'antd';
import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from "../../../context";
var FormItem = Form.Item;
var PaperSize = function PaperSize() {
  var _useContext = useContext(ClientPrintContext),
    store = _useContext.store;
  var _ref = store.edtingTemplate || {},
    size = _ref.size;
  return /*#__PURE__*/React.createElement(FormItem, {
    label: "\u5C3A\u5BF8",
    colon: false
  }, /*#__PURE__*/React.createElement(InputNumber, {
    size: "small",
    min: 1,
    max: 300,
    addonAfter: "mm",
    style: {
      width: 100
    },
    value: size === null || size === void 0 ? void 0 : size.width,
    onChange: action(function (width) {
      Object.assign(store.edtingTemplate.size, {
        width: width
      });
    })
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(0, 0, 0, .2)',
      margin: '0 4px'
    }
  }, "\u2716\uFE0F"), /*#__PURE__*/React.createElement(InputNumber, {
    size: "small",
    min: 1,
    max: 300,
    value: size === null || size === void 0 ? void 0 : size.height,
    style: {
      width: 100
    },
    addonAfter: "mm",
    onChange: action(function (height) {
      Object.assign(store.edtingTemplate.size, {
        height: height
      });
    })
  }));
};
export default observer(PaperSize);