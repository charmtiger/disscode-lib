

export { default } from '/Users/huanglei/Documents/work/mengti/disscode-lib/packages/disscode-lib/src/index.tsx';

import * as componentInstances from '/Users/huanglei/Documents/work/mengti/disscode-lib/packages/disscode-lib/src/index.tsx';



export * from '/Users/huanglei/Documents/work/mengti/disscode-lib/packages/disscode-lib/src/index.tsx';

const coveredComponents = {};

const library = 'BizComps';
const execCompile = !!false;

if (!execCompile) {
  window[library] = Object.assign({__esModule: true}, componentInstances || {}, coveredComponents || {});
}

function getRealComponent(component, componentName) {
  if (component.default) return component.default;
  if (component[componentName]) return component[componentName];
  return component;
}