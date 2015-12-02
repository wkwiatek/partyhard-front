import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import { clubsInitialState, clubsMutations } from './modules/clubs';

const DEV_ENV = process.env.NODE_ENV !== 'production';
Vue.use(Vuex);
Vue.config.debug = DEV_ENV;

export default new Vuex({
  state: {
    clubs: clubsInitialState
  },
  actions,
  mutations: [clubsMutations],
  debug: DEV_ENV,
  strict: DEV_ENV
});