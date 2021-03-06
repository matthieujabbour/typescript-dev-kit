/* istanbul ignore file */

import Vue from 'vue';
import 'styles/main.scss';
import Router from 'scripts/containers/Router.vue';

if (process.env.NODE_ENV === 'production') {
  console.log('PRODUCTION MODE'); // eslint-disable-line no-console
}
if (process.env.NODE_ENV === 'development') {
  console.log('DEVELOPMENT MODE'); // eslint-disable-line no-console
}

let vm;

function main() {
  import('scripts/locale/en.json').then((locale) => {
    vm = new Vue({
      el: '#root',
      components: { Router },
      render: (h) => h(Router, { props: { locale: locale.default } }),
    });
    Vue.config.devtools = process.env.NODE_ENV !== 'production';
  });
}

// Ensures DOM is fully loaded before running app's main logic.
// Loading hasn't finished yet...
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
  // `DOMContentLoaded` has already fired...
} else {
  main();
}

// Ensures subscriptions to Store are correctly cleared when page is left, to prevent "ghost"
// processing, by manually unmounting Vue components tree.
window.addEventListener('beforeunload', () => {
  vm.$destroy();
});

// Enables Hot Module Rendering.
if (module.hot) {
  module.hot.accept();
}
