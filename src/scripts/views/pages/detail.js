import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurantdb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurant from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <div id="resto" class="resto"></div>
    <div id="likeButtonContainer"></div>

    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.getDetailRestaurant(url.id);
    const restoContainer = document.querySelector('#resto');

    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurant,
      restaurant: {
        id: resto.id,
        pictureId: resto.pictureId,
        name: resto.name,
        address: resto.address,
        city: resto.city,
        rating: resto.rating,
        description: resto.description,
      },
    });
  },
};

export default Detail;
