import CONFIG from '../../globals/config';

const createRestaurantTemplate = (restaurant) => `
  <div class="box">
    <img src="${CONFIG.BASE_URL_SMALL_IMAGE + restaurant.pictureId}" alt="${restaurant.pictureId}">
    <div class="rating">
      <p><span class="material-icons yellow">star_rate</span> ${restaurant.rating} &nbsp;
      <span class="material-icons red">location_on</span> ${restaurant.city}</p>
    </div>
    <div class="text">
      <h2><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h2>
      <p>${restaurant.description.substring(0, 300)}...</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="items-detail-image">
      <img src="${CONFIG.BASE_URL_MEDIUM_IMAGE + restaurant.pictureId}" alt="">
    </div>

    <div class="items-detail-text">
      <h2>${restaurant.name}</h2>
      <p>${restaurant.description}</p>
      <br><br>
      <p class="alamat">~ ${restaurant.city}, ${restaurant.address} ~</p>
    </div>
`;

const createRestaurantFoodsTemplate = (food) => `
  <li>${food.name}</li>
`;

const createRestaurantDrinksTemplate = (drink) => `
   <li>${drink.name}</li>
`;

const createRestaurantReviewsTemplate = (review) => `
  <div class="reviews-item">
    <h3>${review.name}</h3>
    <p>${review.review}</p>
  </div>
`;

const createReviewFormTemplate = () => `
  <div class="add-reviews-title">
    <h2>Add Reviews</h2>
    <p>What do you think about us</p>
  </div>

  <div class="add-reviews-form">
    <form action="">
      <label for="">Your Name</label>
      <br>
      <input type="text" name="" id="">
      
      <br>
      <label for="">Your Comment</label>
      <br>
      <textarea name="" id="" cols="30" rows="10"></textarea>

      <br>
      <button type="submit">Submit</button>
    </form>
  </div>
`;


export { 
  createRestaurantTemplate, 
  createRestaurantDetailTemplate, 
  createRestaurantFoodsTemplate,
  createRestaurantDrinksTemplate,
  createRestaurantReviewsTemplate,
  createReviewFormTemplate
};