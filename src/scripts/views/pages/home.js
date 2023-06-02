import RestaurantSource from '../../data/restaurantdb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero">
    <h2 class="hero-title">Welcome To My Restaurant Catalog Apps</h2>
    </div>
    <div class="content">
    <h2> === Explore Restaurant === </h2>
    <div id="restaurant" class="restaurant"></div>
  </div>
    `;
  },
  async afterRender() {
    const restaurants = await RestaurantSource.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;
