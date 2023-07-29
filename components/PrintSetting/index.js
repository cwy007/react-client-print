import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ClientPrintContext from "../../context";
import PrintSettingEdit from "./Edit";
import PrintSettingShow from "./Show";
var PrintSetting = function PrintSetting() {
  var _useContext = useContext(ClientPrintContext),
    store = _useContext.store;
  return /*#__PURE__*/React.createElement("div", {
    className: "print-setting-container"
  }, store.mode === 'edit' ? /*#__PURE__*/React.createElement(PrintSettingEdit, null) : /*#__PURE__*/React.createElement(PrintSettingShow, null));
};
export default observer(PrintSetting);