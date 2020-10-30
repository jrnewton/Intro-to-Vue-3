//const product = 'Socks'

const optionsObject = { 
  data: function() {
    return {
      product: 'Socks', 
      description: 'Soft and cool', 
      image: './assets/images/socks_green.jpg', 
      url: 'https://www.vuejs.org',
      inventory: 100,
      onSale: true
    }
  }
};

const app = Vue.createApp(optionsObject);