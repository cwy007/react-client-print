import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import ClientPrintContext from 'react-client-print/context';
import ReactDOM from 'react-dom';
import TypographyCard from '../TypographyCard';
import './print.less';

let printRoot = document.getElementById('window-print-root');
if (printRoot) {
  printRoot.innerHTML = '';
} else {
  printRoot = document.createElement('div');
  printRoot.id = 'window-print-root';
  document.body.append(printRoot);
}

const PrintStyle = () => {
  const { store } = useContext(ClientPrintContext);
  const div = document.createElement('div');

  useEffect(() => {
    printRoot?.appendChild(div);

    return () => {
      printRoot?.removeChild(div);
    };
  });

  const table = (
    <table className="print-style">
      <tr>
        <td>
          {store.printDataSource?.map((template, idx) => (
            <TypographyCard key={idx} template={template} />
          ))}
        </td>
      </tr>
    </table>
  );

  return ReactDOM.createPortal(table, div);
};

export default observer(PrintStyle);
