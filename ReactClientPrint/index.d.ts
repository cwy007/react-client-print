import React from 'react';
import { TTemplate } from "../components/TypographyCard/type";
import PrintStore from "../store";
import './index.less';
export interface PrintRef {
    store?: PrintStore;
}
export interface ReactClientPrintProps {
    dataSource?: Record<string, string>[];
    templates?: TTemplate[];
    defaultTemplateName?: string;
    defaultFields: {
        name: string;
        fields: string[];
    }[];
    onChange: (payload: {
        template: Partial<TTemplate>;
        operationType: 'update' | 'create' | 'delete';
    }) => void;
}
declare const _default: React.ForwardRefExoticComponent<ReactClientPrintProps & React.RefAttributes<PrintRef>>;
export default _default;
