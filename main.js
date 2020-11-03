'use strict';

const optionsObject = {
  data: function() {
    return {
      cart: [],
      premiumUser: true
    };
  },
  methods: { 
    /* I would pass the entire object, not just ID */
    addToCart: function(id) { 
      this.cart.push(id);
    }, 
  }, 
  computed: { 
    cartDetails: function() { 
      return this.cart.length;
    }
  }
};

const app = Vue.createApp(optionsObject);