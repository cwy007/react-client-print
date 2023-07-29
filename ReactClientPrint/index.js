function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import classNames from 'classnames';
import { toJS } from 'mobx';
import { Observer } from 'mobx-react-lite';
import React, { forwardRef, useEffect, useImperativeHandle, useMemo } from 'react';
import PrintPreview from "../components/PrintPreview";
import PrintSetting from "../components/PrintSetting";
import PrintStyle from "../components/PrintStyle";
import ClientPrintContext from "../context";
import PrintStore from "../store";
import "./index.less";
var ReactClientPrint = function ReactClientPrint(_ref) {
  var dataSource = _ref.dataSource,
    templates = _ref.templates,
    defaultTemplateName = _ref.defaultTemplateName,
    defaultFields = _ref.defaultFields,
    onChange = _ref.onChange,
    ref = _ref.ref;
  var store = useMemo(function () {
    return new PrintStore();
  }, []);
  useImperativeHandle(ref, function () {
    return {
      store: store
    };
  }, [store]);
  useEffect(function () {
    console.log('JSON.stringify(templates)', toJS(templates));
    store === null || store === void 0 ? void 0 : store.update({
      dataSource: dataSource,
      templates: templates,
      defaultFields: defaultFields
    });
  }, [JSON.stringify(dataSource), JSON.stringify(templates), JSON.stringify(defaultFields)]);
  var selectedTemplate = store.templates.find(function (v) {
    return v.name === defaultTemplateName;
  });
  useEffect(function () {
    if (JSON.stringify(selectedTemplate) !== JSON.stringify(store.selectedTemplate)) {
      store.update({
        selectedTemplate: selectedTemplate,
        edtingTemplate: toJS(selectedTemplate)
      });
    }
  }, [JSON.stringify(selectedTemplate), store]);
  useEffect(function () {
    if (!store.onChange) {
      store.update({
        onChange: onChange
      });
    }
  }, [onChange]);
  var clientPrintContext = useMemo(function () {
    return {
      store: store
    };
  }, [store]);
  return /*#__PURE__*/React.createElement(Observer, null, function () {
    return /*#__PURE__*/React.createElement(ClientPrintContext.Provider, {
      value: clientPrintContext
    }, /*#__PURE__*/React.createElement("div", {
      className: classNames('react-client-print-container', {
        isEditing: store.mode === 'edit'
      })
    }, /*#__PURE__*/React.createElement(PrintStyle, null), /*#__PURE__*/React.createElement(PrintPreview, null), /*#__PURE__*/React.createElement(PrintSetting, null)));
  });
};
export default /*#__PURE__*/forwardRef(function (props, ref) {
  return ReactClientPrint(_objectSpread(_objectSpread({}, props), {}, {
    ref: ref
  }));
});