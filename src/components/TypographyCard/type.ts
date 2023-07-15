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
  fontSize: number;
  type?: 'label' | 'value' | 'qrCode' | 'barcode'; // TODO
  // formmat?: TBarcodeFormat; // TODO
}

export type TBarcodeFormat = 'CODE39' | 'CODE128' | 'EAN8' | 'EAN13' | 'UPC';

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
  // qrCode?: TPosition;
  // barcode?: TBarcodeNode;
  nodes: TNode[];
  name: string;
}

export interface TypographyCardProps {
  mode?: 'display' | 'edit';
  template: TTemplate;
  onChange?: (template: TTemplate) => void;
  activeNode?: TNode; // TODO
  onChangeActive?: (node: TNode) => void;
  enableRulerGuide?: boolean;
  enableAutoAlign?: boolean;
  style?: CSSProperties;
  className?: string;
}
