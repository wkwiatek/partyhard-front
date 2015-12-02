import Vue from 'vue';

export const getAllClubs = () => dispatch => {
  Vue.resource('clubs').get({ limit: 50 }, function(products) {
    dispatch('RECEIVE_CLUBS', products.data);
  });
};