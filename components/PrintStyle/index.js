import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import ClientPrintContext from "../../context";
import ReactDOM from 'react-dom';
import TypographyCard from "../TypographyCard";
import "./print.less";
var printRoot = document.getElementById('window-print-root');
if (printRoot) {
  printRoot.innerHTML = '';
} else {
  printRoot = document.createElement('div');
  printRoot.id = 'window-print-root';
  document.body.append(printRoot);
}
var PrintStyle = function PrintStyle() {
  var _store$printDataSourc;
  var _useContext = useContext(ClientPrintContext),
    store = _useContext.store;
  var div = document.createElement('div');
  useEffect(function () {
    var _printRoot;
    (_printRoot = printRoot) === null || _printRoot === void 0 ? void 0 : _printRoot.appendChild(div);
    return function () {
      var _printRoot2;
      (_printRoot2 = printRoot) === null || _printRoot2 === void 0 ? void 0 : _printRoot2.removeChild(div);
    };
  });
  var table = /*#__PURE__*/React.createElement("table", {
    className: "print-style"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, (_store$printDataSourc = store.printDataSource) === null || _store$printDataSourc === void 0 ? void 0 : _store$printDataSourc.map(function (template, idx) {
    return /*#__PURE__*/React.createElement(TypographyCard, {
      key: idx,
      template: template
    });
  }))));
  return /*#__PURE__*/ReactDOM.createPortal(table, div);
};
export default observer(PrintStyle);