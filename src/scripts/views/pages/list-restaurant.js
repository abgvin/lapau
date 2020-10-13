import TheRestaurantSource from '../../data/therestaurant-source';
import { createRestaurantTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
      <div id="restaurant"></div>
    `;
  },
 
  async afterRender() {
    const data = await TheRestaurantSource.listRestaurants();
    const restaurantsContainer = document.querySelector("#restaurant");
    data.restaurants.forEach(restaurant => {
      restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
    });
  },
};
 
export default Restaurant;