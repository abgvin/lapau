import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantTemplate, createNotFoundDataTemplate } from '../templates/template-creator';
import loading from '../templates/loading';

const Like = {
  async render() {
    return `
      <div id="restaurant"></div>
      <div id="loading"></div>
      <div id="not-found"></div>
    `;
  },

  // eslint-disable-next-line consistent-return
  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurant');
    const loadingElement = document.querySelector('#loading');
    const notfoundElement = document.querySelector('#not-found');
    loadingElement.innerHTML = loading;
    notfoundElement.innerHTML = createNotFoundDataTemplate;

    loadingElement.style.display = 'none';
    notfoundElement.style.display = 'none';

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
      loadingElement.style.display = 'block';
      notfoundElement.style.display = 'block';
      restaurantsContainer.style.display = 'none';
    }
  },

};

export default Like;
