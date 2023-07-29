function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["mode", "children", "style", "offsetTop"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { message } from 'antd';
import classNames from 'classnames';
import JsBarcode from 'jsbarcode';
import { observer } from 'mobx-react-lite';
import QRCode from 'qrcode';
import React, { useEffect, useMemo, useState } from 'react';
import EditNode from "./Edit";
import ShowNode from "./Show";
function textToBase64Barcode(text, format, onError) {
  var canvas = document.createElement('canvas');
  try {
    var newText = text;
    if (format === 'EAN8') {
      newText = newText.slice(0, 7);
    } else if (format === 'EAN13') {
      newText = newText.slice(0, 12);
    } else if (format === 'UPC') {
      newText = newText.slice(0, 11);
    }
    JsBarcode(canvas, newText, {
      margin: 0,
      displayValue: false,
      format: format,
      flat: true
    });
  } catch (e) {
    if (onError) {
      onError(format || 'CODE128');
    } else {
      message.error('条形码文字不符合条件！');
    }
  }
  return canvas.toDataURL('image/png');
}
var TemplateNode = function TemplateNode(_ref) {
  var mode = _ref.mode,
    children = _ref.children,
    style = _ref.style,
    offsetTop = _ref.offsetTop,
    restProps = _objectWithoutProperties(_ref, _excluded);
  if (mode === 'edit') {
    return /*#__PURE__*/React.createElement(EditNode, restProps, children);
  }
  return /*#__PURE__*/React.createElement(ShowNode, {
    style: style,
    offsetTop: offsetTop,
    position: restProps.position
  }, children);
};
var TypographyCard = function TypographyCard(props) {
  var mode = props.mode,
    template = props.template,
    _onChange = props.onChange,
    activeNode = props.activeNode,
    onChangeActive = props.onChangeActive,
    enableRulerGuide = props.enableRulerGuide,
    enableAutoAlign = props.enableAutoAlign,
    style = props.style,
    className = props.className;
  var _ref2 = template || {},
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? {} : _ref2$size,
    _ref2$nodes = _ref2.nodes,
    nodes = _ref2$nodes === void 0 ? [] : _ref2$nodes;
  var barcode = nodes.find(function (v) {
    return v.type === 'barcode';
  });
  var qrcode = nodes.find(function (v) {
    return v.type === 'qrcode';
  });
  var barcodeUrl = useMemo(function () {
    if (mode === 'edit') {
      return textToBase64Barcode('barcode'); // for preview
    }

    return (barcode === null || barcode === void 0 ? void 0 : barcode.placeholder) && textToBase64Barcode(barcode === null || barcode === void 0 ? void 0 : barcode.placeholder, barcode === null || barcode === void 0 ? void 0 : barcode.formmat);
  }, [barcode === null || barcode === void 0 ? void 0 : barcode.placeholder, barcode === null || barcode === void 0 ? void 0 : barcode.formmat, mode]);
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    qrCodeUrl = _useState2[0],
    setQRCodeUrl = _useState2[1];
  useEffect(function () {
    var opts = {
      errorCorrectionLevel: 'L',
      type: 'image/png',
      quality: 0.1,
      margin: 0,
      color: {
        dark: '#000'
      }
    };
    QRCode.toDataURL((qrcode === null || qrcode === void 0 ? void 0 : qrcode.placeholder) || 'default', opts, function (err, url) {
      if (err) throw err;
      setQRCodeUrl(url);
    });
  }, [qrcode === null || qrcode === void 0 ? void 0 : qrcode.placeholder]);
  var offsetTop = 0;
  var updateOffsetTop = function updateOffsetTop(v) {
    var prevOffsetTop = offsetTop;
    offsetTop += v;
    return prevOffsetTop;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('typography-card-container', _defineProperty({
      isEditing: mode === 'edit' && enableRulerGuide,
      isNotEditing: mode !== 'edit'
    }, className, !!className)),
    style: _objectSpread(_objectSpread({}, style), {}, {
      width: "".concat(size === null || size === void 0 ? void 0 : size.width, "mm"),
      height: "".concat(size === null || size === void 0 ? void 0 : size.height, "mm")
    })
  }, nodes.map(function (node) {
    if (node.type === 'label' || node.type === 'value') {
      return /*#__PURE__*/React.createElement(TemplateNode, {
        mode: mode,
        key: node.id,
        position: node,
        node: node,
        isActive: activeNode && node.id === activeNode.id,
        onChange: function onChange(v) {
          Object.assign(node, v);
          if (_onChange) {
            _onChange(template);
          }
        },
        onChangeActive: onChangeActive,
        style: node.style,
        enableAutoAlign: enableAutoAlign,
        offsetTop: updateOffsetTop(node.height || 0)
      }, node.placeholder);
    }
    if (node.type === 'barcode') {
      return /*#__PURE__*/React.createElement(TemplateNode, {
        mode: mode,
        key: node.id,
        position: node,
        onChange: function onChange(v) {
          Object.assign(node, v);
          if (_onChange) {
            _onChange(template);
          }
        },
        enableAutoAlign: enableAutoAlign,
        offsetTop: updateOffsetTop(node.height || 0)
      }, /*#__PURE__*/React.createElement("div", {
        className: "qrcode-wrapper"
      }, /*#__PURE__*/React.createElement("img", {
        src: barcodeUrl,
        alt: node.placeholder
      })));
    }
    if (node.type === 'qrcode') {
      return /*#__PURE__*/React.createElement(TemplateNode, {
        mode: mode,
        key: node.id,
        position: node,
        onChange: function onChange(v) {
          Object.assign(node, v);
          if (_onChange) {
            _onChange(template);
          }
        },
        options: {
          ratio: 1
        },
        enableAutoAlign: enableAutoAlign,
        offsetTop: updateOffsetTop(node.height || 0)
      }, /*#__PURE__*/React.createElement("div", {
        className: "qrcode-wrapper"
      }, /*#__PURE__*/React.createElement("img", {
        src: qrCodeUrl,
        alt: node.placeholder
      })));
    }
    return null;
  }));
};
export default observer(TypographyCard);