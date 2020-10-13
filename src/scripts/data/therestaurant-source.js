import API_ENDPOINT from '../globals/api-endpoint';


class TheRestaurantSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    return response.json();
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
};

export default TheRestaurantSource;