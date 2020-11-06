'use strict';

app.component('product-display', { 
  props: {
    premiumUser: { 
      type: Boolean,
      required: true
    }
  },

  template:
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- you must quote the :class values because it's not camelCase -->
        <img 
          :src="image" 
          :title="title + ' ' + description"
          :class="{ 'out-of-stock-img': noStock }"
          />
        <div class="cart">Quantity: {{ currentQuantity }}</div>
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p class="product-description">{{ description }}</p>

        <div v-if="onSale" style="color: red;">{{ onSaleLabel }}!!!</div>

        <p>Availability: {{ availability }}</p>

        <p>Shipping: {{ shipping }}</p>
        
        <label>Materials:</label>
        <ul>
          <li v-for="element in materials">
            {{ element }}
          </li>
        </ul>
        
        <label>Available Colors</label>
        <div 
          v-for="(element, index) in variants" 
          :key="element.id" 
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ 'backgroundColor': element.color }"
          :title="'Pick color ' + element.color">
        </div>

        <button 
          class="button" 
          :class="{ disabledButton: noStock }"
          :disabled="noStock"
          @click="addToCart">Add to Cart</button>

        <button 
          class="button" 
          @click="removeFromCart">Remove from Cart</button>

      </div>
    </div>
    <review-list v-if="(reviews.length>0)" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`, 

  data: function() {
    return {
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
      sizes: [ 8, 9, 10, 11 ], 
      reviews: []
    }
  }, 

  methods: { 
    addToCart: function() { 
      this.$emit('add-to-cart', this.currentVariant.id);
    }, 

    removeFromCart: function() { 
      this.$emit('remove-from-cart', this.currentVariant.id);
    },

    updateVariant: function(index) {
      this.selectedVariant = index;
    },

    addReview: function(review) { 
      this.reviews.push(review);
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
    }, 

    shipping: function() { 
      if (this.premiumUser) { 
        return 'Free!';
      }
      else { 
        return '$2.99';
      }
    }, 

    availability: function() { 
      if (this.noStock) { 
        return "Out of Stock";
      }
      else if (this.lowStock) { 
        return "Low Stock";
      }
      else { 
        return "In Stock";
      }
    }
  }
});