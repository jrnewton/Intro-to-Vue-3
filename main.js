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
      //TODO: bug this will find first index of id
      //and 'slice' will cut it *and* the remaining elements.
      //If your cart looks like this: [green,green,blue,green]
      //And you have 'green' selected and hit remove, then 
      //first 'green' will be removed and all following items
      //and viola your  cart is empty.
      
      //const index = this.cart.indexOf(id);
      //if (index != -1) {
      //  this.cart.splice(index);
      //}

      //Better:
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