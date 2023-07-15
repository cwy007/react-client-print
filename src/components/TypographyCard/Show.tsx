import React, { CSSProperties } from 'react';
import './index.less';
import { TPosition } from './type';

export interface ShowNodeProps {
  mode?: 'display' | 'edit'; // 默认 display
  style?: CSSProperties;
  offsetTop: number;
  children: React.ReactNode;
  position: TPosition;
}

const ShowNode = ({ style, offsetTop, position, children }: ShowNodeProps) => (
  <div
    style={{
      display: 'flex',
      transform: `translate(${position.left}px,${position.top - offsetTop}px)`,
      alignItems: 'center',
      wordBreak: 'break-all',
      ...position,
      ...(style || {}),
    }}
  >
    {children}
  </div>
);

export default ShowNode;
