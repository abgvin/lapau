import UrlParser from '../../routes/url-parser';
import TheRestaurantSource from '../../data/therestaurant-source';
import { createRestaurantDetailTemplate, 
         createRestaurantFoodsTemplate, 
         createRestaurantDrinksTemplate,
         createRestaurantReviewsTemplate,
         createReviewFormTemplate
        } from '../templates/template-creator';

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
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await TheRestaurantSource.detailRestaurant(url.id);
    const restaurantDetailContainer = document.querySelector('.items-description');
    restaurantDetailContainer.innerHTML += createRestaurantDetailTemplate(data.restaurant);

    const foodsDatas = data.restaurant.menus.foods;
    const foodsContainer = document.querySelector('#foods');
    foodsDatas.forEach(food => {
      foodsContainer.innerHTML += createRestaurantFoodsTemplate(food);
    });

    const drinksData = data.restaurant.menus.drinks;
    const drinksContainer = document.querySelector('#drinks');
    drinksData.forEach(drink => {
      drinksContainer.innerHTML += createRestaurantDrinksTemplate(drink);
    });

    const reviewsData = data.restaurant.consumerReviews;
    const reviewsContainer = document.querySelector('.reviews-items');
    reviewsData.forEach(review => {
      reviewsContainer.innerHTML += createRestaurantReviewsTemplate(review);
    });

    const reviewFormContainer = document.querySelector('.add-reviews');
    reviewFormContainer.innerHTML += createReviewFormTemplate();

  },
};
 
export default Detail;