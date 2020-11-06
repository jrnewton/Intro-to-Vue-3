'use strict';

const optionsObject = {
  data: function() {
    return {
      cart: [],
      premiumUser: true
    };
  },
  methods: { 
    addToCart: function(id) { 
      this.cart.push(id);
    }, 

    removeFromCart: function(id) {
      //See https://github.com/Code-Pop/Intro-to-Vue-3/pull/12
      const lastIndex = this.cart.lastIndexOf(id);
      if (lastIndex != -1) {
        this.cart = this.cart.filter((value,index) => {
          return (lastIndex!==index);
        });
      }
    }
  },
  computed: { 
    cartDetails: function() { 
      return this.cart.length;
    }
  }
};

const app = Vue.createApp(optionsObject);