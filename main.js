//const product = 'Socks'

const optionsObject = { 
  data: function() {
    return {
      product: 'Socks', 
      description: 'Soft and cool', 
      image: './assets/images/socks_green.jpg', 
      url: 'https://www.vuejs.org',
      inventory: 100,
      onSale: true,
      details: ['50% cotton', '30% wool', '20% poly-blend'],
      variants: [
        { id: 2234, color: 'green' },
        { id: 2235, color: 'blue'  }
      ]
    }
  }
};

const app = Vue.createApp(optionsObject);