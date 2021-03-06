import TheRestaurantSource from '../data/therestaurant-source';

const PostReview = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };
  TheRestaurantSource.postRestaurant(dataInput);

  const reviewContainer = document.querySelector('.reviews-items');

  const newReview = `
  <div class="reviews-item">
    <h3>${name}</h3>
    <p>${review}</p>
  </div>
  `;

  reviewContainer.innerHTML += newReview;
};

export default PostReview;
