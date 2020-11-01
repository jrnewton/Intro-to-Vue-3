'use strict';

const optionsObject = {
  data: function() {
    return {
      cart: 0,
      premiumUser: true
    };
  },
  methods: { 
    addToCart: function() { 
      this.cart += 1;
    }, 

    removeFromCart: function() { 
      this.cart -= 1;
    }, 
  }
};

const app = Vue.createApp(optionsObject);