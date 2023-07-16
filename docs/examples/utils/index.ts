import { TTemplate } from 'react-client-print/components/TypographyCard/type';
import defaultTemplate from '../services/defaultTemplate.json';

const CACHE_KEY = 'react-client-print';

const getCacheValue = () => JSON.parse(localStorage.getItem(CACHE_KEY) || '{}');

export const getTemplates = () => {
  const result = getCacheValue();
  return result.templates || [];
};

export const createTemplates = (template: Partial<TTemplate>) => {
  const result = getCacheValue();
  localStorage.setItem(
    CACHE_KEY,
    JSON.stringify({
      templates: [
        ...(result.templates || []),
        {
          ...defaultTemplate,
          ...template,
        },
      ],
      defaultTemplateName: template.name,
    }),
  );
};

export const updateTemplate = (template: Partial<TTemplate>) => {
  let templates = getTemplates() as Partial<TTemplate>[];
  templates = templates.map((v) => {
    if (v.name === template.name) {
      return template;
    }
    return v;
  });
  const result = {
    templates,
    defaultTemplateName: template.name,
  };
  localStorage.setItem(CACHE_KEY, JSON.stringify(result));
};

export const deleteTemplate = (template: Partial<TTemplate>) => {
  let templates = getTemplates() as TTemplate[];
  templates = templates.filter((v) => v.name !== template.name);
  const result = {
    templates,
    defaultTemplateName: templates?.[0]?.name,
  };
  localStorage.setItem(CACHE_KEY, JSON.stringify(result));
};
