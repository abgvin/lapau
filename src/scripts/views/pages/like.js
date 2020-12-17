import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div id="restaurant"></div>
      <p id="error-text">Your Favorite List is Empty</p>
    `;
  },

  // eslint-disable-next-line consistent-return
  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurant');
    const errorText = document.querySelector('#error-text');
    errorText.style.display = 'none';

    try {
      const data = await FavoriteRestaurantIdb.getAllRestaurants();
      if (data.length !== 0) {
        data.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
        });
      } else {
        // eslint-disable-next-line no-undef
        return error;
      }
    } catch (error) {
      restaurantsContainer.style.display = 'none';
      errorText.style.display = 'block';
    }
  },

};

export default Like;
