function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { AlignCenterOutlined, AlignLeftOutlined, AlignRightOutlined, BoldOutlined, ItalicOutlined, UnderlineOutlined } from '@ant-design/icons';
import { Checkbox, Form, Radio, Select, Space, Switch } from 'antd';
import { compact } from 'lodash';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from "../../../context";
var FormItem = Form.Item;
var Option = Select.Option;
var fontFamilyList = [{
  name: '浏览器默认',
  value: 'inherit'
}, {
  name: '微软雅黑',
  value: '微软雅黑'
}, {
  name: 'Arial',
  value: 'Arial'
}];
var align = [{
  component: /*#__PURE__*/React.createElement(AlignLeftOutlined, null),
  value: 'flex-start'
}, {
  component: /*#__PURE__*/React.createElement(AlignCenterOutlined, null),
  value: 'center'
}, {
  component: /*#__PURE__*/React.createElement(AlignRightOutlined, null),
  value: 'flex-end'
}];
export var borderType = [{
  name: '无边框',
  value: 'none'
}, {
  name: '实线框',
  value: '1px solid #aaa'
}, {
  name: '虚线框',
  value: '1px dashed #aaa'
}];
var Style = function Style() {
  var _store$activeNode, _store$activeNode3, _store$activeNode3$st, _store$activeNode4, _store$activeNode4$st, _store$activeNode5, _store$activeNode5$st, _store$activeNode$sty, _store$activeNode6, _store$activeNode6$st;
  var _useContext = useContext(ClientPrintContext),
    store = _useContext.store;
  var _ref = ((_store$activeNode = store.activeNode) === null || _store$activeNode === void 0 ? void 0 : _store$activeNode.style) || {},
    _ref$fontFamily = _ref.fontFamily,
    fontFamily = _ref$fontFamily === void 0 ? 'inherit' : _ref$fontFamily,
    justifyContent = _ref.justifyContent,
    _ref$border = _ref.border,
    border = _ref$border === void 0 ? 'none' : _ref$border;
  var updateActiveNodeStyle = function updateActiveNodeStyle(style) {
    var _store$activeNode2;
    var activeNode = _objectSpread(_objectSpread({}, store.activeNode), {}, {
      style: _objectSpread(_objectSpread({}, (_store$activeNode2 = store.activeNode) === null || _store$activeNode2 === void 0 ? void 0 : _store$activeNode2.style), style)
    });
    store.updateNode({
      activeNode: activeNode
    });
  };
  return /*#__PURE__*/React.createElement(Space, {
    size: 10,
    direction: "vertical"
  }, /*#__PURE__*/React.createElement(FormItem, {
    label: "\u5B57\u4F53",
    colon: false,
    className: "font-form-item"
  }, /*#__PURE__*/React.createElement(Select, {
    disabled: store.fontStyleDisabled,
    size: "small",
    value: fontFamily,
    style: {
      width: '100%'
    },
    onChange: function onChange(value) {
      return updateActiveNodeStyle({
        fontFamily: value
      });
    }
  }, fontFamilyList.map(function (item) {
    return /*#__PURE__*/React.createElement(Option, {
      key: item.value,
      value: item.value
    }, item.name);
  })), /*#__PURE__*/React.createElement("div", {
    className: "font-stye-and-font-size"
  }, /*#__PURE__*/React.createElement(Checkbox.Group, {
    value: compact([(_store$activeNode3 = store.activeNode) === null || _store$activeNode3 === void 0 ? void 0 : (_store$activeNode3$st = _store$activeNode3.style) === null || _store$activeNode3$st === void 0 ? void 0 : _store$activeNode3$st.fontWeight, (_store$activeNode4 = store.activeNode) === null || _store$activeNode4 === void 0 ? void 0 : (_store$activeNode4$st = _store$activeNode4.style) === null || _store$activeNode4$st === void 0 ? void 0 : _store$activeNode4$st.fontStyle, (_store$activeNode5 = store.activeNode) === null || _store$activeNode5 === void 0 ? void 0 : (_store$activeNode5$st = _store$activeNode5.style) === null || _store$activeNode5$st === void 0 ? void 0 : _store$activeNode5$st.textDecoration]),
    disabled: store.fontStyleDisabled,
    onChange: function onChange(value) {
      return updateActiveNodeStyle({
        fontStyle: value !== null && value !== void 0 && value.includes('italic') ? 'italic' : undefined,
        textDecoration: value !== null && value !== void 0 && value.includes('underline') ? 'underline' : undefined,
        fontWeight: value !== null && value !== void 0 && value.includes('bold') ? 'bold' : undefined
      });
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    value: "bold"
  }, /*#__PURE__*/React.createElement(BoldOutlined, null)), /*#__PURE__*/React.createElement(Checkbox, {
    value: "italic"
  }, /*#__PURE__*/React.createElement(ItalicOutlined, null)), /*#__PURE__*/React.createElement(Checkbox, {
    value: "underline"
  }, /*#__PURE__*/React.createElement(UnderlineOutlined, null))), /*#__PURE__*/React.createElement(Select, {
    disabled: store.fontStyleDisabled,
    size: "small",
    value: String((_store$activeNode$sty = (_store$activeNode6 = store.activeNode) === null || _store$activeNode6 === void 0 ? void 0 : (_store$activeNode6$st = _store$activeNode6.style) === null || _store$activeNode6$st === void 0 ? void 0 : _store$activeNode6$st.fontSize) !== null && _store$activeNode$sty !== void 0 ? _store$activeNode$sty : 14),
    style: {
      width: 66
    },
    onChange: function onChange(value) {
      return updateActiveNodeStyle({
        fontSize: value
      });
    }
  }, Array(16).fill(1).map(function (_, idx) {
    return {
      name: idx + 7
    };
  }).map(function (item) {
    return /*#__PURE__*/React.createElement(Option, {
      key: item.name,
      value: item.name
    }, item.name);
  })))), /*#__PURE__*/React.createElement(FormItem, {
    label: "\u5BF9\u9F50",
    colon: false
  }, /*#__PURE__*/React.createElement(Radio.Group, {
    disabled: store.fontStyleDisabled,
    defaultValue: "flex-start",
    size: "small",
    value: justifyContent,
    onChange: function onChange(e) {
      return updateActiveNodeStyle({
        justifyContent: e.target.value
      });
    }
  }, align.map(function (item) {
    return /*#__PURE__*/React.createElement(Radio.Button, {
      key: item.value,
      value: item.value
    }, item.component);
  }))), /*#__PURE__*/React.createElement(FormItem, {
    label: "\u8FB9\u6846"
  }, /*#__PURE__*/React.createElement(Select, {
    disabled: store.fontStyleDisabled,
    size: "small",
    value: border,
    onChange: function onChange(value) {
      return updateActiveNodeStyle({
        border: value
      });
    }
  }, borderType.map(function (item) {
    return /*#__PURE__*/React.createElement(Option, {
      key: item.name,
      value: item.value
    }, item.name);
  }))), /*#__PURE__*/React.createElement(FormItem, {
    label: "\u8F85\u52A9\u7EBF"
  }, /*#__PURE__*/React.createElement(Switch, {
    size: "small",
    checked: store.enableRulerGuide,
    onChange: function onChange(checked) {
      store.update({
        enableRulerGuide: checked
      });
    }
  })), /*#__PURE__*/React.createElement(FormItem, {
    label: "\u81EA\u52A8\u5BF9\u9F50"
  }, /*#__PURE__*/React.createElement(Switch, {
    size: "small",
    checked: store.enableAutoAlign,
    onChange: function onChange(checked) {
      return store.update({
        enableAutoAlign: checked
      });
    }
  })));
};
export default observer(Style);