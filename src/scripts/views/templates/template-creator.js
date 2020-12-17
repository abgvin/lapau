import CONFIG from '../../globals/config';

const createRestaurantTemplate = (restaurant) => `
  <div class="box">
    <img class="lazyload" crossorigin="anonymous" width="100%" height="180px"
      data-src="${CONFIG.BASE_URL_SMALL_IMAGE + restaurant.pictureId}" 
      data-srcset="${CONFIG.BASE_URL_SMALL_IMAGE + restaurant.pictureId} 480w, ${CONFIG.BASE_URL_MEDIUM_IMAGE + restaurant.pictureId} 800w"
      sizes="(max-width: 600px) 480px, 800px"
      alt="${restaurant.name}">
    <div class="rating">
        <p>🧡 ${restaurant.rating} &nbsp; 📌 ${restaurant.city}</p>
    </div>
    <div class="text">
      <h2><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h2>
      <p>${restaurant.description.substring(0, 170)}...</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="items-detail-image">
      <img class="lazyload" crossorigin="anonymous"
        data-src="${CONFIG.BASE_URL_SMALL_IMAGE + restaurant.pictureId}" 
        data-srcset="${CONFIG.BASE_URL_SMALL_IMAGE + restaurant.pictureId} 480w, ${CONFIG.BASE_URL_MEDIUM_IMAGE + restaurant.pictureId} 800w"
        sizes="(max-width: 600px) 480px, 800px"
        alt="${restaurant.name}">
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

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="material-icons" aria-hidden="true">favorite_border</i>
  </button>
`;

const createUnLikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="material-icons" aria-hidden="true">favorite</i>
  </button>
`;

const createNotFoundDataTemplate = `
  <div class="not-found">
    <img src="images/no-data.svg" alt="Data Not Found"/>
  <div>
`;

const createRestaurantDetailSkeletonTemplate = `
  <div class="items-description"></div>
  <div class="foods-and-drinks">
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
  createLikeRestaurantButtonTemplate,
  createUnLikeRestaurantButtonTemplate,
  createNotFoundDataTemplate,
  createRestaurantDetailSkeletonTemplate,
};
