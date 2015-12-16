require('../node_modules/bootstrap/dist/css/bootstrap.min.css');

import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';

import App from './components/App.vue';
import Clubs from './components/Clubs.vue';

Vue.use(Router);
Vue.use(Resource);

Vue.http.options.root = process.env.NODE_ENV === 'production' ? 'api.partyhard-app.com' : 'http://localhost:5000';

var router = new Router();

router.map({
  '/clubs': { component: Clubs }
});

router.beforeEach(() => {
  window.scrollTo(0, 0)
});

router.redirect({
  '*': '/clubs'
});

router.start(App, '#app');