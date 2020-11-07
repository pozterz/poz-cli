import * as ejs from "ejs";

export interface TemplateData {
  moduleName: string;
  moduleNameCap: string;
  modelNameCap: string;
}

export function render(content: string, data: TemplateData) {
  return ejs.render(content, data);
}
