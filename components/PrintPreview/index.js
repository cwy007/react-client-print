import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from "../../context";
import TypographyCard from "../TypographyCard";
var PrintPreview = function PrintPreview() {
  var _useContext = useContext(ClientPrintContext),
    store = _useContext.store;
  var template = store.mode === 'display' ? store.replacedTemplate : store.edtingTemplate;
  return /*#__PURE__*/React.createElement("div", {
    className: "print-preview-container"
  }, !!template && /*#__PURE__*/React.createElement(TypographyCard, {
    style: {
      margin: '0 auto'
    },
    mode: store.mode,
    template: template,
    activeNode: store.activeNode,
    onChangeActive: function onChangeActive(activeNode) {
      return store.updateNode({
        activeNode: activeNode
      });
    },
    enableRulerGuide: store.enableRulerGuide,
    enableAutoAlign: store.enableAutoAlign
  }));
};
export default observer(PrintPreview);