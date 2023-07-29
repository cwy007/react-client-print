/// <reference types="react" />
import PrintStore from './store';
export interface TClientPrintContext {
    store: PrintStore;
}
declare const ClientPrintContext: import("react").Context<TClientPrintContext>;
export default ClientPrintContext;
