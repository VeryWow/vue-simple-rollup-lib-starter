// import lib from './yourComponent.js';
import lib from './yourComponent.vue';

if (window && window.Vue) {
  if (typeof lib === 'function' || lib.install) {
    window.Vue.use(lib)
  } else {
    window.Vue.component(lib.name, lib)
  }
}

export default 'lib'
