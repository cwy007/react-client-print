export var updatePaperSize = function updatePaperSize(template) {
  var size = template.size ? template.size : undefined;
  if (!size) {
    return;
  }
  var printCssText = "\n    @media print {\n      @page {\n        size: ".concat(size.width, "mm  ").concat(size.height, "mm;\n      }\n    }\n    ");
  var printStyleElement = document.body.querySelector('#print-style');
  if (printStyleElement) {
    printStyleElement.innerHTML = printCssText;
  } else {
    printStyleElement = document.createElement('style');
    printStyleElement.id = 'print-style';
    printStyleElement.innerHTML = printCssText;
    document.body.append(printStyleElement);
  }
};