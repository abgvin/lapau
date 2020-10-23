import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div id="restaurant"></div>
    `;

  },

  async afterRender() {
    const data = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector("#restaurant");
    data.forEach(restaurant => {
      restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
    });

     
  },

}

export default Like;