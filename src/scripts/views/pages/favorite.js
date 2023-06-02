import FavoriteRestaurant from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content" id="query">
      <h2> === Favorite === </h2>
      <div id="restaurant" class="restaurant">
      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant');

    try {
      if (restaurants.length === 0) {
        restaurantsContainer.innerHTML = '<div class="restaurant-item_not_found"><h2>Tidak ada restaurant untuk ditampilkan</h2></div>';
      }
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
      });
    } catch (err) {
      restaurantsContainer.innerHTML = `Error: ${err}`;
    }

    // restaurants.forEach((restaurant) => {
    //   restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    // });
  },
};

export default Favorite;
