//const product = 'Socks'

const optionsObject = { 
  data: function() {
    return {
      product: 'Socks'
    }
  }
};

const app = Vue.createApp(optionsObject);