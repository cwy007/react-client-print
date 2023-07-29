function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { Form, Input, Modal } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from "../../../context";
var FormItem = Form.Item;
var AddTemplateModal = function AddTemplateModal() {
  var _useContext = useContext(ClientPrintContext),
    store = _useContext.store;
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var onOk = function onOk() {
    form.validateFields().then(function (values) {
      store.createTemplate(values);
      store.update({
        addTemplateModalVisible: false
      });
      form.resetFields();
    });
  };
  return /*#__PURE__*/React.createElement(Modal, {
    closable: true,
    destroyOnClose: true,
    title: "\u65B0\u589E\u6253\u5370\u6A21\u677F",
    open: store.addTemplateModalVisible,
    onOk: onOk,
    onCancel: function onCancel() {
      return store.update({
        addTemplateModalVisible: false
      });
    },
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88"
  }, /*#__PURE__*/React.createElement(Form, {
    form: form
  }, /*#__PURE__*/React.createElement(FormItem, {
    colon: false,
    label: "\u6A21\u677F\u540D\u79F0",
    name: "name",
    rules: [{
      required: true,
      message: '模板名称不能为空'
    }, {
      validator: function validator(_r, value) {
        var _store$templates;
        var target = (_store$templates = store.templates) === null || _store$templates === void 0 ? void 0 : _store$templates.find(function (v) {
          return v.name === value;
        });
        if (target) {
          return Promise.reject(new Error('模板名称重复'));
        }
        return Promise.resolve();
      }
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u8BF7\u8F93\u5165",
    onPressEnter: function onPressEnter() {
      return onOk();
    }
  }))));
};
export default observer(AddTemplateModal);