import React from 'react';
import './index.less';
import { TNode, TPosition } from './type';
interface InteractNodeOptions {
    ratio?: number | 'preserve';
}
export interface EditNodeProps {
    children: React.ReactNode;
    position: TPosition;
    onChange?: (value: TPosition) => void;
    options?: InteractNodeOptions;
    isActive?: boolean;
    node?: TNode;
    onChangeActive?: (node: TNode) => void;
    enableAutoAlign?: boolean;
}
declare const EditNode: (props: EditNodeProps) => React.JSX.Element;
export default EditNode;
