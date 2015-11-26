import Vue from 'vue';
import Router from 'vue-router';

import App from './components/App.vue';
import Clubs from './components/Clubs.vue';

Vue.use(Router);

var router = new Router();

router.map({
  '/clubs': {
    component: Clubs
  }
});

router.beforeEach(() => {
  window.scrollTo(0, 0)
});

router.redirect({
  '*': '/clubs'
});

router.start(App, '#app');