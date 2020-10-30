//const product = 'Socks'

const optionsObject = { 
  data: function() {
    return {
      product: 'Boots', 
      description: 'Steel toe and comfort sole'
    }
  }
};

const app = Vue.createApp(optionsObject);