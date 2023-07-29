function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import interact from 'interactjs';
import React, { useLayoutEffect, useRef, useState } from 'react';
import "./index.less";
var CELL_HEIGHT = 10;
var adjustLabel = function adjustLabel(left, top) {
  var xDiff = left % CELL_HEIGHT;
  var nx = left;
  if (xDiff < 5) {
    nx = Math.floor(left / CELL_HEIGHT) * CELL_HEIGHT;
  } else {
    nx = Math.ceil(left / CELL_HEIGHT) * CELL_HEIGHT;
  }
  var yDiff = top % CELL_HEIGHT;
  var ny = top;
  if (yDiff < 5) {
    ny = Math.floor(top / CELL_HEIGHT) * CELL_HEIGHT;
  } else {
    ny = Math.ceil(top / CELL_HEIGHT) * CELL_HEIGHT;
  }
  return {
    left: nx,
    top: ny
  };
};
var EditNode = function EditNode(props) {
  var children = props.children,
    position = props.position,
    node = props.node,
    onChange = props.onChange,
    options = props.options,
    isActive = props.isActive,
    onChangeActive = props.onChangeActive,
    enableAutoAlign = props.enableAutoAlign;
  var ref = useRef(null);
  useLayoutEffect(function () {
    var interactObj = interact(ref.current).draggable({
      listeners: {
        move: function move(e) {
          var target = e.target;
          var _target$parentNode = target.parentNode,
            boardWidth = _target$parentNode.clientWidth,
            boardHeight = _target$parentNode.clientHeight;
          var maxTop = boardHeight - e.rect.height;
          var maxLeft = boardWidth - e.rect.width;
          var top = parseFloat(target.style.top) + e.dy;
          var left = parseFloat(target.style.left) + e.dx;
          top = Math.max(top, 0);
          top = Math.min(top, maxTop);
          left = Math.max(left, 0);
          left = Math.min(left, maxLeft);
          target.style.top = "".concat(top, "px");
          target.style.left = "".concat(left, "px");
        },
        end: function end(e) {
          var target = e.target;
          var x = parseFloat(target.style.left);
          var y = parseFloat(target.style.top);
          var _ref = enableAutoAlign ? adjustLabel(x, y) : {
              left: x,
              top: y
            },
            left = _ref.left,
            top = _ref.top;
          target.style.top = "".concat(top, "px");
          target.style.left = "".concat(left, "px");
          if (onChange) {
            onChange({
              top: top,
              left: left
            });
          }
        }
      }
    });
    var _ref2 = options || {},
      ratio = _ref2.ratio;
    var modifiers = [interact.modifiers.restrictSize({
      min: {
        width: 10,
        height: 10
      }
    })];
    if (ratio) {
      var aspectRatioModifier = interact.modifiers.aspectRatio({
        ratio: ratio
      });
      modifiers.push(aspectRatioModifier);
    }
    interactObj.resizable({
      edges: {
        bottom: true,
        right: true
      },
      margin: 3,
      modifiers: modifiers
    }).on('resizemove', function (e) {
      var _e$target$parentNode = e.target.parentNode,
        boardWidth = _e$target$parentNode.clientWidth,
        boardHeight = _e$target$parentNode.clientHeight;
      var _e$rect = e.rect,
        width = _e$rect.width,
        height = _e$rect.height;
      var top = parseFloat(e.target.style.top) + e.deltaRect.top;
      var left = parseFloat(e.target.style.left) + e.deltaRect.left;
      var maxTop = boardHeight - height;
      var maxLeft = boardWidth - width;
      if (top >= 0 && top <= maxTop) {
        Object.assign(e.target.style, {
          height: "".concat(height, "px"),
          top: "".concat(top, "px")
        });
      }
      if (left >= 0 && left <= maxLeft) {
        Object.assign(e.target.style, {
          width: "".concat(width, "px"),
          left: "".concat(left, "px")
        });
      }
    }).on('resizeend', function (e) {
      if (onChange) {
        onChange({
          width: parseFloat(e.rect.width),
          height: parseFloat(e.rect.height)
        });
      }
    });
  });
  useLayoutEffect(function () {
    var left = position.left,
      width = position.width,
      top = position.top,
      height = position.height,
      style = position.style;
    Object.assign(ref.current.style, _objectSpread({
      left: "".concat(left, "px"),
      top: "".concat(top, "px"),
      width: "".concat(width, "px"),
      height: "".concat(height, "px")
    }, style));
  }, [position]);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isEdit = _useState2[0],
    setIsEdit = _useState2[1];
  var handleSaveLabel = function handleSaveLabel(e) {
    if (onChange) {
      onChange(_objectSpread(_objectSpread({}, node), {}, {
        placeholder: e.target.value
      }));
    }
    setIsEdit(false);
  };
  var handleEnter = function handleEnter(event) {
    if (event.key === 'Enter') {
      handleSaveLabel(event);
    }
  };
  var onDoubleClick = function onDoubleClick() {
    if (node && node.type === 'label') {
      setIsEdit(true);
    }
  };
  var onClick = function onClick() {
    if (onChangeActive && node) {
      onChangeActive(node);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "label-style",
    style: _objectSpread(_objectSpread(_objectSpread({
      position: 'absolute',
      border: '1px solid #eaeaea',
      display: 'flex',
      alignItems: 'center',
      wordBreak: 'break-all'
    }, position), position.style), {}, {
      backgroundColor: isActive ? '#FFF566' : undefined
    }),
    onDoubleClick: onDoubleClick,
    onClick: onClick
  }, isEdit && isActive && node ? /*#__PURE__*/React.createElement("input", {
    className: "input-style",
    defaultValue: node.placeholder,
    onBlur: handleSaveLabel,
    onKeyPress: handleEnter,
    onDragStart: function onDragStart(e) {
      return e.stopPropagation();
    },
    style: {
      outline: 'none'
    }
  }) : children);
};
export default EditNode;