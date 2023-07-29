function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { Button, Checkbox, Form, Input, Modal, Popconfirm, Space, Tooltip } from 'antd';
import { difference } from 'lodash';
import { autorun, toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from "../../../context";
var FormItem = Form.Item;
var AddLabelModal = function AddLabelModal(_ref) {
  var visible = _ref.visible,
    onOk = _ref.onOk,
    onCancel = _ref.onCancel;
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var handleOk = function handleOk() {
    form.validateFields().then(function (values) {
      onOk(values);
    });
  };
  return /*#__PURE__*/React.createElement(Modal, {
    open: visible,
    title: "\u6DFB\u52A0\u5B57\u6BB5",
    closable: true,
    maskClosable: true,
    onOk: handleOk,
    onCancel: onCancel,
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88"
  }, /*#__PURE__*/React.createElement(Form, {
    form: form,
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(FormItem, {
    label: "\u65B0\u589E\u5B57\u6BB5",
    colon: false,
    name: "newField",
    rules: [{
      required: true,
      message: '不能为空'
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    autoFocus: true,
    placeholder: "\u8BF7\u8F93\u5165",
    style: {
      width: '100%'
    },
    onPressEnter: handleOk
  }))));
};
var Fields = function Fields() {
  var _useContext = useContext(ClientPrintContext),
    store = _useContext.store;
  autorun(function () {
    console.log('store-->', store.deleteFieldBtnDisabled, toJS(store));
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "fields-container"
  }, /*#__PURE__*/React.createElement(Space, {
    size: 16,
    align: "center",
    style: {
      justifyContent: 'space-around',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "small",
    type: "dashed",
    style: {
      width: 120
    },
    onClick: function onClick() {
      store.update({
        addLabelModalVisible: true
      });
    }
  }, "\u6DFB\u52A0\u5B57\u6BB5"), store.deleteFieldBtnDisabled ? /*#__PURE__*/React.createElement(Tooltip, {
    placement: "top",
    title: "\u8BF7\u5148\u5728\u6253\u5370\u9875\u9762\u4E2D\u9009\u4E2D\u8981\u5220\u9664\u7684\u5B57\u6BB5"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "dashed",
    className: "disabled-btn",
    size: "small",
    style: {
      width: 120
    }
  }, "\u5220\u9664\u5B57\u6BB5")) : /*#__PURE__*/React.createElement(Popconfirm, {
    title: "\u4F60\u786E\u5B9A\u5220\u9664\u5F53\u524D\u9009\u4E2D\u7684\u5B57\u6BB5\u5417\uFF1F",
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88",
    onConfirm: function onConfirm() {
      return store.removeNode(store.activeNode.placeholder, true);
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "dashed",
    size: "small",
    style: {
      width: 120
    }
  }, "\u5220\u9664\u5B57\u6BB5"))), store.addLabelModalVisible && /*#__PURE__*/React.createElement(AddLabelModal, {
    visible: store.addLabelModalVisible,
    onOk: function onOk(values) {
      store.addNode(values.newField, 'label');
      store.update({
        addLabelModalVisible: false
      });
    },
    onCancel: function onCancel() {
      return store.update({
        addLabelModalVisible: false
      });
    }
  }), store.fieldsGroup.map(function (v) {
    return /*#__PURE__*/React.createElement("div", {
      className: "field-group",
      key: v.name
    }, /*#__PURE__*/React.createElement("div", {
      className: "field-group-name"
    }, v.name), /*#__PURE__*/React.createElement(Checkbox.Group, {
      value: v.value,
      onChange: function onChange(checkedValue) {
        console.log('checkedValue', checkedValue);
        if (v.value.length === checkedValue.length) return;
        if (v.value.length > checkedValue.length) {
          var _store$activeNode;
          var fieldName = difference(v.value, checkedValue)[0];
          store.removeNode("{".concat(fieldName, "}"), ((_store$activeNode = store.activeNode) === null || _store$activeNode === void 0 ? void 0 : _store$activeNode.placeholder) === fieldName);
        } else {
          var _fieldName = difference(checkedValue, v.value)[0];
          store.addNode("{".concat(_fieldName, "}"), 'value');
        }
      }
    }, /*#__PURE__*/React.createElement(Space, {
      size: 8,
      wrap: true
    }, v.fields.map(function (fieldName) {
      return /*#__PURE__*/React.createElement(Checkbox, {
        key: fieldName,
        value: fieldName
      }, fieldName);
    }))));
  }));
};
export default observer(Fields);