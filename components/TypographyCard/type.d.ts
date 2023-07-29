import { CSSProperties } from 'react';
export interface TPosition {
    width: number;
    height: number;
    left: number;
    top: number;
    style?: CSSProperties;
}
export interface TNode extends TPosition {
    id: string | number;
    placeholder: string;
    type?: 'label' | 'value' | 'qrcode' | 'barcode';
    formmat?: TBarcodeFormat;
}
export declare type TBarcodeFormat = 'CODE39' | 'CODE128' | 'EAN8' | 'EAN13' | 'UPC';
export interface TBarcodeNode extends TPosition {
    text: string;
    formmat?: TBarcodeFormat;
}
export interface TTemplate {
    size: {
        type: 'fixed';
        width: number;
        height: number;
    };
    nodes: TNode[];
    name: string;
}
export interface TypographyCardProps {
    mode?: 'display' | 'edit';
    template: TTemplate;
    onChange?: (template: TTemplate) => void;
    activeNode?: TNode;
    onChangeActive?: (node: TNode) => void;
    enableRulerGuide?: boolean;
    enableAutoAlign?: boolean;
    style?: CSSProperties;
    className?: string;
}
