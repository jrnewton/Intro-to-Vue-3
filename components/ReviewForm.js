app.component('review-form', { 
  
  template: 
  /*html*/
  `
    <form class="review-form" @submit.prevent="submitReview">
      <h3>Leave a review</h3>
      
      <h5 :style="{ visibility: validationStyle }" >{{ validationMessage }}</h5>
      
      <label for="name">Name:</label>
      <input id="name" v-model="name">

      <label for="review">Review:</label>
      <textarea id="review" v-model="review"></textarea>

      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <input class="button" type="submit" value="Submit">
    </form>`, 

    data: function() { 
      return {
        name: '', 
        review: '',
        rating: null,
        validationMessage: ''
      };
    }, 

    methods: { 
      submitReview: function() { 
        if (this.name === '' || this.review === '' || this.rating === null) { 
          this.validationMessage = 'Review is incomplete.  Please fill out every field';
          return;
        }

        let productReview = { 
          name: this.name,
          review: this.review,
          rating: this.rating
        };

        this.$emit('review-submitted', productReview);

        this.name = '';
        this.review = '';
        this.rating = null;
        this.validationMessage = '';
      }
    }, 

    computed: { 
      validationStyle: function() { 
        if (this.validationMessage==='') { 
          return 'hidden';
        }
        else { 
          return 'visible';
        }
      }
    }
});