'use strict';

const optionsObject = {
  data: function() {
    return {
      cart: 0,
      product: 'Socks',
      description: 'Soft and cool', 
      selectedVariant: 0,
      url: 'https://www.vuejs.org',
      onSale: false,
      materials: ['50% cotton', '30% wool', '20% poly-blend'],
      brand: 'Vue Mastery',
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 12 },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 5  }
      ],
      sizes: [ 8, 9, 10, 11 ]
    }
  }, 
  methods: { 
    addToCart: function() { 
      this.cart += 1;
      this.currentVariant.quantity -= 1;
    }, 

    removeFromCart: function() { 
      this.cart -= 1;
      this.currentVariant.quantity += 1;
    }, 

    updateVariant(index) {
      this.selectedVariant = index;
    }
  }, 
  computed: {
    title: function() { 
      return this.brand + ' ' + this.product;
    },

    currentVariant: function() { 
        return this.variants[this.selectedVariant];
    }, 

    currentQuantity: function() { 
      return this.currentVariant.quantity;
    },
    
    image: function() { 
      return this.currentVariant.image;
    },

    inStock: function() { 
      return this.currentQuantity > 0;
    },

    lowStock: function() {
      return this.currentQuantity > 0 && this.currentQuantity < 10;
    },

    noStock: function() { 
      return this.currentQuantity <= 0;
    },

    onSaleLabel: function() { 
      if (this.onSale) { 
        //change order to make English good
        return 'Sale on ' + this.title;
      }
    }
  }
};

const app = Vue.createApp(optionsObject);