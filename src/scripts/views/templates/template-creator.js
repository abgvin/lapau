import CONFIG from '../../globals/config';

const createRestaurantTemplate = (restaurant) => `
  <div class="box">
    <img crossorigin="anonymous" src="${CONFIG.BASE_URL_SMALL_IMAGE + restaurant.pictureId}" alt="${restaurant.name}">
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
      <img crossorigin="anonymous" src="${CONFIG.BASE_URL_MEDIUM_IMAGE + restaurant.pictureId}" alt="">
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
      <input type="text" name="name" id="name">
      
      <br>
      <label for="">Your Comment</label>
      <br>
      <textarea name="" id="review" cols="30" rows="10"></textarea>

      <br>
      <button type="submit" id="submit-review">Submit</button>
    </form>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;


const createRestaurantDetailSkeletonTemplate = `
  <div class="items-description"></div>
  <div class="foods-and-drinks" style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('/images/foods-background.jpg'); background-size: cover;">
  <div class="foods">
    <h3>Foods</h3>
    <ul>
      <li id="foods"></li>
    </ul>
  </div>
  <div class="drinks">
    <h3>Drinks</h3>
    <ul>
      <li id="drinks"></li>
    </ul>
  </div>
  </div>
  <div class="reviews">
  <di class="reviews-title">
    <h2>Reviews</h2>
    <p>What our customers think about us</p>
  </di>
  <div class="reviews-items"></div>
  </div>
  <div class="add-reviews"></div>
`;

export { 
  createRestaurantTemplate, 
  createRestaurantDetailTemplate, 
  createRestaurantFoodsTemplate,
  createRestaurantDrinksTemplate,
  createRestaurantReviewsTemplate,
  createReviewFormTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestaurantDetailSkeletonTemplate,
};