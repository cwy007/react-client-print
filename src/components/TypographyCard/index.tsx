import classNames from 'classnames';
import { toJS } from 'mobx';
import React from 'react';
import TemplateNode from './TemplateNode';
import { TypographyCardProps } from './type';

const TypographyCard = (props: TypographyCardProps) => {
  const {
    mode,
    template,
    onChange,
    activeNode,
    onChangeActive,
    enableRulerGuide,
    enableAutoAlign,
  } = props;
  const { size, nodes } = template;
  console.log('TypographyCard-->', toJS(props), {
    template,
    onChange,
    activeNode,
    onChangeActive,
    enableRulerGuide,
    enableAutoAlign,
  });

  let offsetTop = 0;
  const updateOffsetTop = (v: number) => {
    const prevOffsetTop = offsetTop;
    offsetTop += v;
    return prevOffsetTop;
  };

  return (
    <div
      className={classNames('typography-card-container', {
        isEditing: mode === 'edit',
        isNotEditing: mode !== 'edit',
      })}
      style={{ width: `${size?.width}mm`, height: `${size?.height}mm` }}
    >
      {nodes.map((node) => (
        <TemplateNode
          mode={mode}
          key={node.id}
          position={node}
          node={node}
          isActive={activeNode && node.id === activeNode.id}
          onChange={(v) => {
            Object.assign(node, v);
            if (onChange) {
              onChange(template);
            }
          }}
          onChangeActive={onChangeActive}
          style={node.style}
          openAutoAlignment={enableAutoAlign}
          offsetTop={updateOffsetTop(node.height || 0)}
        >
          {node.placeholder}
        </TemplateNode>
      ))}
    </div>
  );
};

export default TypographyCard;
