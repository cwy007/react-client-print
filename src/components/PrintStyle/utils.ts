import { TTemplate } from '../TypographyCard/type';

export const updatePaperSize = (template: TTemplate) => {
  const size = template.size ? template.size : undefined;
  if (!size) {
    return;
  }
  const printCssText = `
    @media print {
      @page {
        size: ${size.width}mm  ${size.height + 0.4}mm;
      }
    }
    `;
  let printStyleElement = document.body.querySelector('#print-style');
  if (printStyleElement) {
    printStyleElement.innerHTML = printCssText;
  } else {
    printStyleElement = document.createElement('style');
    printStyleElement.id = 'print-style';
    printStyleElement.innerHTML = printCssText;
    document.body.append(printStyleElement);
  }
};
