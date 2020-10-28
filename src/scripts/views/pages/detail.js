/* eslint-disable no-alert */
import UrlParser from '../../routes/url-parser';
import TheRestaurantSource from '../../data/therestaurant-source';
import {
  createRestaurantDetailTemplate,
  createRestaurantFoodsTemplate,
  createRestaurantDrinksTemplate,
  createRestaurantReviewsTemplate,
  createReviewFormTemplate,
  createNotFoundDataTemplate,
  createRestaurantDetailSkeletonTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import PostReview from '../../utils/post-review';
import loading from '../templates/loading';

const Detail = {
  async render() {
    return `
      <div id="loading"></div>
      <div id="not-found"></div>
      <div id="items-detail">
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantSource.detailRestaurant(url.id);
    const loadingElement = document.querySelector('#loading');
    const main = document.querySelector('#items-detail');
    loadingElement.innerHTML = loading;
    main.style.display = 'none';

    const restaurantNotFoundContainer = document.querySelector('#not-found');
    restaurantNotFoundContainer.innerHTML += createNotFoundDataTemplate;
    restaurantNotFoundContainer.style.display = 'none';

    try {
      const restaurantDetailSkeleteon = document.querySelector('#items-detail');
      restaurantDetailSkeleteon.innerHTML += createRestaurantDetailSkeletonTemplate;

      const restaurantDetailContainer = document.querySelector('.items-description');
      restaurantDetailContainer.innerHTML += createRestaurantDetailTemplate(restaurant.restaurant);

      const foodsDatas = restaurant.restaurant.menus.foods;
      const foodsContainer = document.querySelector('#foods');
      foodsDatas.forEach((food) => {
        foodsContainer.innerHTML += createRestaurantFoodsTemplate(food);
      });

      const drinksData = restaurant.restaurant.menus.drinks;
      const drinksContainer = document.querySelector('#drinks');
      drinksData.forEach((drink) => {
        drinksContainer.innerHTML += createRestaurantDrinksTemplate(drink);
      });

      const reviewsData = restaurant.restaurant.consumerReviews;
      const reviewsContainer = document.querySelector('.reviews-items');
      reviewsData.forEach((review) => {
        reviewsContainer.innerHTML += createRestaurantReviewsTemplate(review);
      });

      const reviewFormContainer = document.querySelector('.add-reviews');
      reviewFormContainer.innerHTML += createReviewFormTemplate();

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

      main.style.display = 'block';
      loadingElement.style.display = 'none';
    } catch (error) {
      main.style.display = 'none';
      loadingElement.style.display = 'block';
      restaurantNotFoundContainer.style.display = 'block';
    }

    const btnSubmit = document.querySelector('#submit-review');
    const name = document.querySelector('#name');
    const review = document.querySelector('#review');

    if (!btnSubmit) {
      return;
    }
    btnSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      if (name.value === '' || review.value === '') {
        alert('Inputan tidak boleh kosong');
        name.value = '';
        review.value = '';
      } else {
        PostReview(url, name.value, review.value);
        name.value = '';
        review.value = '';
      }
    });
  },
};

export default Detail;
