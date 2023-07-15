import classNames from 'classnames';
import { toJS } from 'mobx';
import React from 'react';
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
  console.log('TypographyCard-->', toJS(props), {
    template,
    onChange,
    activeNode,
    onChangeActive,
    enableRulerGuide,
    enableAutoAlign,
  });

  return (
    <div
      className={classNames('typography-card-container', {
        isEditing: mode === 'edit',
        isNotEditing: mode !== 'edit',
      })}
    >
      {/* QRCodeBoard */}
      QRCodeBoard
    </div>
  );
};

export default TypographyCard;
