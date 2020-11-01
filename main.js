'use strict';

const optionsObject = {
  data: function() {
    return {
      cart: [],
      premiumUser: true
    };
  },
  methods: { 
    addToCart: function(variant) { 
      this.cart.push(variant.id);
    }, 
  }, 
  computed: { 
    cartDetails: function() { 
      return this.cart.length;
    }
  }
};

const app = Vue.createApp(optionsObject);