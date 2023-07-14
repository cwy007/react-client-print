import { createContext } from 'react';
import PrintStore from './store';

export interface TClientPrintContext {
  store: PrintStore;
}

const ClientPrintContext = createContext<TClientPrintContext>(
  {} as TClientPrintContext,
);

export default ClientPrintContext;
