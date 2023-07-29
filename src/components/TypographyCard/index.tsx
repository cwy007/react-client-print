import { message } from 'antd';
import classNames from 'classnames';
import JsBarcode from 'jsbarcode';
import { observer } from 'mobx-react-lite';
import QRCode from 'qrcode';
import React, { useEffect, useMemo, useState } from 'react';
import EditNode, { EditNodeProps } from './Edit';
import ShowNode, { ShowNodeProps } from './Show';
import { TBarcodeFormat, TTemplate, TypographyCardProps } from './type';

function textToBase64Barcode(
  text: string,
  format?: TBarcodeFormat,
  onError?: (format: TBarcodeFormat) => void,
) {
  const canvas = document.createElement('canvas');
  try {
    let newText = text;
    if (format === 'EAN8') {
      newText = newText.slice(0, 7);
    } else if (format === 'EAN13') {
      newText = newText.slice(0, 12);
    } else if (format === 'UPC') {
      newText = newText.slice(0, 11);
    }
    JsBarcode(canvas, newText, {
      margin: 0,
      displayValue: false,
      format,
      flat: true,
    });
  } catch (e) {
    if (onError) {
      onError(format || 'CODE128');
    } else {
      message.error('条形码文字不符合条件！');
    }
  }

  return canvas.toDataURL('image/png');
}

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
  const barcode = nodes.find((v) => v.type === 'barcode');
  const qrcode = nodes.find((v) => v.type === 'qrcode');

  const barcodeUrl = useMemo(() => {
    if (mode === 'edit') {
      return textToBase64Barcode('barcode'); // for preview
    }
    return (
      barcode?.placeholder &&
      textToBase64Barcode(barcode?.placeholder, barcode?.formmat)
    );
  }, [barcode?.placeholder, barcode?.formmat, mode]);

  const [qrCodeUrl, setQRCodeUrl] = useState('');
  useEffect(() => {
    const opts: any = {
      errorCorrectionLevel: 'L',
      type: 'image/png',
      quality: 0.1,
      margin: 0,
      color: {
        dark: '#000',
      },
    };
    QRCode.toDataURL(qrcode?.placeholder || 'default', opts, (err, url) => {
      if (err) throw err;
      setQRCodeUrl(url);
    });
  }, [qrcode?.placeholder]);

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
      {nodes.map((node) => {
        if (node.type === 'label' || node.type === 'value') {
          return (
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
          );
        }

        if (node.type === 'barcode') {
          return (
            <TemplateNode
              mode={mode}
              key={node.id}
              position={node}
              onChange={(v) => {
                Object.assign(node, v);
                if (onChange) {
                  onChange(template);
                }
              }}
              enableAutoAlign={enableAutoAlign}
              offsetTop={updateOffsetTop(node.height || 0)}
            >
              <div className="qrcode-wrapper">
                <img src={barcodeUrl} alt={node.placeholder} />
              </div>
            </TemplateNode>
          );
        }

        if (node.type === 'qrcode') {
          return (
            <TemplateNode
              mode={mode}
              key={node.id}
              position={node}
              onChange={(v) => {
                Object.assign(node, v);
                if (onChange) {
                  onChange(template);
                }
              }}
              options={{ ratio: 1 }}
              enableAutoAlign={enableAutoAlign}
              offsetTop={updateOffsetTop(node.height || 0)}
            >
              <div className="qrcode-wrapper">
                <img src={qrCodeUrl} alt={node.placeholder} />
              </div>
            </TemplateNode>
          );
        }

        return null;
      })}
    </div>
  );
};

export default observer(TypographyCard);
