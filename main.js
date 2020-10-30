//const product = 'Socks'

const optionsObject = { 
  data: function() {
    return {
      product: 'Socks', 
      description: 'Soft and cool', 
      image: './assets/images/socks_green.jpg'
    }
  }
};

const app = Vue.createApp(optionsObject);