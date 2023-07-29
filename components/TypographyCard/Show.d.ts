import React, { CSSProperties } from 'react';
import './index.less';
import { TPosition } from './type';
export interface ShowNodeProps {
    mode?: 'display' | 'edit';
    style?: CSSProperties;
    offsetTop: number;
    children: React.ReactNode;
    position: TPosition;
}
declare const ShowNode: ({ style, offsetTop, position, children }: ShowNodeProps) => React.JSX.Element;
export default ShowNode;
