import UrlParser from '../../routes/url-parser';
import TheRestaurantSource from '../../data/therestaurant-source';
import { createRestaurantDetailTemplate, 
         createRestaurantFoodsTemplate, 
         createRestaurantDrinksTemplate,
         createRestaurantReviewsTemplate,
         createReviewFormTemplate,
        } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import PostReview from '../../utils/post-review';

const Detail = {
  async render() {
    return `
      <div id="items-detail">
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
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantSource.detailRestaurant(url.id);
    const restaurantDetailContainer = document.querySelector('.items-description');
    restaurantDetailContainer.innerHTML += createRestaurantDetailTemplate(restaurant.restaurant);

    const foodsDatas = restaurant.restaurant.menus.foods;
    const foodsContainer = document.querySelector('#foods');
    foodsDatas.forEach(food => {
      foodsContainer.innerHTML += createRestaurantFoodsTemplate(food);
    });

    const drinksData = restaurant.restaurant.menus.drinks;
    const drinksContainer = document.querySelector('#drinks');
    drinksData.forEach(drink => {
      drinksContainer.innerHTML += createRestaurantDrinksTemplate(drink);
    });

    const reviewsData = restaurant.restaurant.consumerReviews;
    const reviewsContainer = document.querySelector('.reviews-items');
    reviewsData.forEach(review => {
      reviewsContainer.innerHTML += createRestaurantReviewsTemplate(review);
    });

    const reviewFormContainer = document.querySelector('.add-reviews');
    reviewFormContainer.innerHTML += createReviewFormTemplate();

    const btnSubmit = document.querySelector("#submit-review");
    const name = document.querySelector("#name");
    const review = document.querySelector("#review");

    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if(name.value === '' || review.value === '' ) {
        alert('Inputan tidak boleh kosong');
        name.value = '';
        review.value = '';
      } else {
        PostReview(url, name.value, review.value);
        name.value = '';
        review.value = '';
      }
    })

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        pictureId: restaurant.restaurant.pictureId,
        city: restaurant.restaurant.city,
        rating: restaurant.restaurant.rating,
      },
    });
  },
};
 
export default Detail;