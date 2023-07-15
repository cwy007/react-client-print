import classNames from 'classnames';
import { toJS } from 'mobx';
import React from 'react';
import EditNode, { EditNodeProps } from './Edit';
import ShowNode, { ShowNodeProps } from './Show';
import { TypographyCardProps } from './type';

const TemplateNode = ({
  mode,
  children,
  style,
  offsetTop,
  ...restProps
}: ShowNodeProps & EditNodeProps) => {
  if (mode === 'edit') {
    return <EditNode {...restProps}>{children}</EditNode>;
  }

  return (
    <ShowNode style={style} offsetTop={offsetTop} position={restProps.position}>
      {children}
    </ShowNode>
  );
};

const TypographyCard = (props: TypographyCardProps) => {
  const {
    mode,
    template,
    onChange,
    activeNode,
    onChangeActive,
    enableRulerGuide,
    enableAutoAlign,
    style,
    className,
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
        [className!]: !!className,
      })}
      style={{
        ...style,
        width: `${size?.width}mm`,
        height: `${size?.height}mm`,
      }}
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
