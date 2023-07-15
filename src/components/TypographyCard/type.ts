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
  text: string;
  fontSize: number;
  type?: 'label' | 'custom' | 'value'; // TODO
}

export type TBarcodeFormat = 'CODE39' | 'CODE128' | 'EAN8' | 'EAN13' | 'UPC';

export interface BarcodeNode extends TPosition {
  text: string;
  formmat?: TBarcodeFormat;
}

export interface TypographyCardProps {
  mode?: 'display' | 'edit';
}
