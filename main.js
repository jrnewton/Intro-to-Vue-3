//const product = 'Socks'

const optionsObject = { 
  data: function() {
    return {
      cart: 0,
      product: 'Socks',
      description: 'Soft and cool', 
      image: './assets/images/socks_green.jpg', 
      url: 'https://www.vuejs.org',
      inventory: 15,
      onSale: false,
      details: ['50% cotton', '30% wool', '20% poly-blend'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'  }
      ], 
      sizes: [ 8, 9, 10, 11 ]
    }
  }, 
  methods: { 
    // inStock: function() { 
    //   return (this.inventory > 0);
    // },

    // inventoryStyle: function() { 
    //   if (this.inStock()) { 
    //     return [ 'button' ];
    //   }
    //   else { 
    //     return [ 'button', 'disabledButton' ];
    //   }
    // }, 

    addToCart: function() { 
      if (this.inventory > 0) { 
        this.inventory -= 1;
        this.cart += 1;
      }
    }, 

    removeFromCart: function() { 
      if (this.cart > 0) {
        this.inventory += 1; 
        this.cart -= 1;
      }
    }, 

    switchImage(image) { 
      this.image = image;
    }
  }
};

const app = Vue.createApp(optionsObject);