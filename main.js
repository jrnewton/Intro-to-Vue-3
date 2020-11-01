'use strict';

const optionsObject = {
  data: function() {
    return {
      cart: 0,
      premiumUser: true
    };
  }
};

const app = Vue.createApp(optionsObject);