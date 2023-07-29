function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { flatten } from 'lodash';
import { makeAutoObservable, observable, toJS } from 'mobx';
import { updatePaperSize } from "./components/PrintStyle/utils";
var PrintStore = /*#__PURE__*/function () {
  function PrintStore() {
    _classCallCheck(this, PrintStore);
    /** 模式 */
    _defineProperty(this, "mode", 'display');
    /** 打印份数 */
    _defineProperty(this, "numberOfCopies", 1);
    /** 打印模板 */
    _defineProperty(this, "templates", []);
    /** 编辑中的临时模板 */
    _defineProperty(this, "edtingTemplate", void 0);
    /** 当前选中模板 */
    _defineProperty(this, "selectedTemplate", void 0);
    /** 业务数据 */
    _defineProperty(this, "dataSource", []);
    /** 默认字段 */
    _defineProperty(this, "defaultFields", []);
    /** 自定义字段 */
    _defineProperty(this, "customFields", []);
    /** 当前编辑的节点，用于高亮显示 */
    _defineProperty(this, "activeNode", void 0);
    /** 辅助线 */
    _defineProperty(this, "enableRulerGuide", true);
    /** 自动对齐 */
    _defineProperty(this, "enableAutoAlign", true);
    /** 新增模板弹窗 */
    _defineProperty(this, "addTemplateModalVisible", false);
    /** 新建/编辑/删除模板 */
    _defineProperty(this, "onChange", void 0);
    /** 添加字段弹窗 */
    _defineProperty(this, "addLabelModalVisible", false);
    makeAutoObservable(this, {}, {
      autoBind: true
    });
  }
  _createClass(PrintStore, [{
    key: "update",
    value: function update(payload) {
      Object.assign(this, payload);
    }

    /** 默认字段 + 自定义字段 */
  }, {
    key: "fields",
    get: function get() {
      return flatten([this.defaultFields, this.customFields]);
    }

    /** 将模板中的占位符替换为对应的值 */
  }, {
    key: "replacedTemplate",
    get: function get() {
      if (this.selectedTemplate) {
        var _this$dataSource;
        var firstRecord = (_this$dataSource = this.dataSource) === null || _this$dataSource === void 0 ? void 0 : _this$dataSource[0];
        return this.mergeTemplateWithData(this.selectedTemplate, firstRecord);
      }
      return undefined;
    }
  }, {
    key: "fontStyleDisabled",
    get: function get() {
      var _this$activeNode, _this$activeNode2;
      return !this.activeNode || ((_this$activeNode = this.activeNode) === null || _this$activeNode === void 0 ? void 0 : _this$activeNode.type) !== 'label' && ((_this$activeNode2 = this.activeNode) === null || _this$activeNode2 === void 0 ? void 0 : _this$activeNode2.type) !== 'value';
    }
  }, {
    key: "deleteFieldBtnDisabled",
    get: function get() {
      var _this$activeNode3, _this$activeNode4;
      return !(((_this$activeNode3 = this.activeNode) === null || _this$activeNode3 === void 0 ? void 0 : _this$activeNode3.type) === 'label' || ((_this$activeNode4 = this.activeNode) === null || _this$activeNode4 === void 0 ? void 0 : _this$activeNode4.type) === 'value');
    }
  }, {
    key: "fieldsGroup",
    get: function get() {
      var _this$edtingTemplate;
      var noneLabelNodes = (((_this$edtingTemplate = this.edtingTemplate) === null || _this$edtingTemplate === void 0 ? void 0 : _this$edtingTemplate.nodes) || []).filter(function (v) {
        return v.type !== 'label';
      });
      var selectedKeys = noneLabelNodes.map(function (v) {
        return v.placeholder.slice(1, -1);
      });
      return (this.defaultFields || []).map(function (v) {
        return {
          name: v.name,
          fields: v.fields,
          value: selectedKeys.filter(function (key) {
            return v.fields.includes(key);
          })
        };
      });
    }

    /** 修改模板节点 */
  }, {
    key: "updateNode",
    value: function updateNode(payload) {
      var _this$edtingTemplate2;
      this.update({
        activeNode: payload.activeNode,
        edtingTemplate: _objectSpread(_objectSpread({}, this.edtingTemplate), {}, {
          nodes: (((_this$edtingTemplate2 = this.edtingTemplate) === null || _this$edtingTemplate2 === void 0 ? void 0 : _this$edtingTemplate2.nodes) || []).map(function (n) {
            var _payload$activeNode;
            if (n.id === ((_payload$activeNode = payload.activeNode) === null || _payload$activeNode === void 0 ? void 0 : _payload$activeNode.id)) {
              return payload.activeNode;
            }
            return n;
          })
        })
      });
    }
  }, {
    key: "addNodeToEditingTemplate",
    value: function addNodeToEditingTemplate(node) {
      var _this$edtingTemplate3;
      this.update({
        edtingTemplate: _objectSpread(_objectSpread({}, this.edtingTemplate), {}, {
          nodes: [].concat(_toConsumableArray(((_this$edtingTemplate3 = this.edtingTemplate) === null || _this$edtingTemplate3 === void 0 ? void 0 : _this$edtingTemplate3.nodes) || []), [node])
        })
      });
    }

    /** 添加节点 */
  }, {
    key: "addNode",
    value: function addNode(placeholder, type) {
      if (placeholder.includes('二维码')) {
        this.addNodeToEditingTemplate({
          id: 'qrcode',
          type: 'qrcode',
          placeholder: placeholder,
          top: 50,
          left: 0,
          width: 112,
          height: 112
        });
      } else if (placeholder.includes('条形码')) {
        this.addNodeToEditingTemplate({
          id: 'barcode',
          top: 0,
          left: 0,
          width: 106,
          height: 19,
          // text: '{barcode}',
          type: 'barcode',
          placeholder: placeholder
        });
      } else {
        var newNode = observable({
          id: Date.now(),
          type: type,
          placeholder: placeholder,
          top: 0,
          left: 0,
          height: 32,
          width: 112,
          style: {
            fontSize: 14
          }
        });
        this.addNodeToEditingTemplate(newNode);
      }
    }

    /** 移除节点 */
  }, {
    key: "removeNode",
    value: function removeNode(placeholder, isActive) {
      var _this$edtingTemplate4, _this$edtingTemplate5;
      this.update({
        activeNode: isActive ? undefined : this.activeNode,
        edtingTemplate: _objectSpread(_objectSpread({}, this.edtingTemplate), {}, {
          nodes: ((_this$edtingTemplate4 = this.edtingTemplate) === null || _this$edtingTemplate4 === void 0 ? void 0 : (_this$edtingTemplate5 = _this$edtingTemplate4.nodes) === null || _this$edtingTemplate5 === void 0 ? void 0 : _this$edtingTemplate5.filter(function (n) {
            return n.placeholder !== placeholder;
          })) || []
        })
      });
    }

    /** 新增模板 */
  }, {
    key: "createTemplate",
    value: function createTemplate(payload) {
      if (this.onChange) {
        this.onChange({
          template: payload,
          operationType: 'create'
        });
      }
    }

    /** 删除模板 */
  }, {
    key: "deleteTemplate",
    value: function () {
      var _deleteTemplate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this$edtingTemplate6, _this$selectedTemplat;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!this.onChange) {
                _context.next = 4;
                break;
              }
              _context.next = 3;
              return this.onChange({
                template: this.selectedTemplate,
                operationType: 'delete'
              });
            case 3:
              if (((_this$edtingTemplate6 = this.edtingTemplate) === null || _this$edtingTemplate6 === void 0 ? void 0 : _this$edtingTemplate6.name) === ((_this$selectedTemplat = this.selectedTemplate) === null || _this$selectedTemplat === void 0 ? void 0 : _this$selectedTemplat.name)) {
                this.update({
                  edtingTemplate: undefined,
                  selectedTemplate: undefined
                });
              }
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function deleteTemplate() {
        return _deleteTemplate.apply(this, arguments);
      }
      return deleteTemplate;
    }() /** 保存模板 */
  }, {
    key: "updateTemplate",
    value: function () {
      var _updateTemplate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!this.onChange) {
                _context2.next = 3;
                break;
              }
              _context2.next = 3;
              return this.onChange({
                template: this.edtingTemplate,
                operationType: 'update'
              });
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function updateTemplate() {
        return _updateTemplate.apply(this, arguments);
      }
      return updateTemplate;
    }() /** 切换模板 */
  }, {
    key: "switchTemplate",
    value: function switchTemplate(templateName) {
      var selectedTemplate = this.templates.find(function (v) {
        return v.name === templateName;
      });
      this.update({
        selectedTemplate: selectedTemplate,
        edtingTemplate: toJS(selectedTemplate)
      });
    }
  }, {
    key: "mergeTemplateWithData",
    value: function mergeTemplateWithData(template, data) {
      var _template$nodes;
      var nodes = [];
      (_template$nodes = template.nodes) === null || _template$nodes === void 0 ? void 0 : _template$nodes.forEach(function (node) {
        var _data$node$placeholde, _node$placeholder;
        nodes.push(_objectSpread(_objectSpread({}, node), {}, {
          placeholder: data === null || data === void 0 ? void 0 : (_data$node$placeholde = data[(_node$placeholder = node.placeholder) === null || _node$placeholder === void 0 ? void 0 : _node$placeholder.slice(1, -1)]) === null || _data$node$placeholde === void 0 ? void 0 : _data$node$placeholde.toString()
        }));
      });
      return _objectSpread(_objectSpread({}, template), {}, {
        nodes: nodes
      });
    }

    /** 打印数据 */
  }, {
    key: "printDataSource",
    get: function get() {
      var _this = this;
      if (!this.selectedTemplate) return;
      updatePaperSize(this.selectedTemplate);
      var printDataSource = [];
      this.dataSource.forEach(function (data) {
        for (var i = 0; i < _this.numberOfCopies; i += 1) {
          printDataSource.push(_this.mergeTemplateWithData(_this.selectedTemplate, data));
        }
      });
      return printDataSource || [];
    }
  }]);
  return PrintStore;
}();
export default PrintStore;