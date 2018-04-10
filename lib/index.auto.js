// import lib from './yourLib.js';
import lib from './yourLib.vue';

if (window && window.Vue) {
  if (typeof lib === 'function' || lib.install) {
    window.Vue.use(lib)
  } else {
    window.Vue.component(lib.name, lib)
  }
}

export default 'lib'
