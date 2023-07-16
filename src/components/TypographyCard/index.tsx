import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import EditNode, { EditNodeProps } from './Edit';
import ShowNode, { ShowNodeProps } from './Show';
import { TTemplate, TypographyCardProps } from './type';

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
  const { size = {} as TTemplate['size'], nodes = [] } = template || {};

  let offsetTop = 0;
  const updateOffsetTop = (v: number) => {
    const prevOffsetTop = offsetTop;
    offsetTop += v;
    return prevOffsetTop;
  };

  return (
    <div
      className={classNames('typography-card-container', {
        isEditing: mode === 'edit' && enableRulerGuide,
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
          enableAutoAlign={enableAutoAlign}
          offsetTop={updateOffsetTop(node.height || 0)}
        >
          {node.placeholder}
        </TemplateNode>
      ))}
    </div>
  );
};

export default observer(TypographyCard);
