import './styles/index.scss'
import * as components from './components'

// const plugin = {
//   install (Vue) {
//     for (const prop in components) {
//       if (components.hasOwnProperty(prop)) {
//         const component = components[prop]
//         Vue.component(component.name, component)
//       }
//     }
//   }
// }

const plugin = Object.entries(components).forEach(([componentName, component]) => {
  if (componentName !== 'default') {
    const key = componentName as Exclude<keyof any, 'default'>;
    const val = component as Exclude<any, typeof plugin>;
    (plugin as any)[key] = val;
  }
});

export default plugin