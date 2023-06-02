import CONFIG from '../../globals/config';

const createRestoItemTemplate = (restaurant) => `

  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="lazyload-item lazyload"  crossorigin="anonymous" alt="${restaurant.name}"
      data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>

      <div class="restaurant-item__content"> 
      <a href="/#/detail/${restaurant.id}">
      <h3 class= "restaurant__title">${restaurant.name}</h3>
      </a>
      <p class="restaurant__location">
          <img src="./icons/location.svg" alt="location" width="20px"/>${restaurant.city}
        </p>
      <p>${restaurant.description}</p>
      
    </div>
  </div>
`;

const createRestoDetailTemplate = (resto) => `

<h2 class="resto__title">${resto.name}</h2>
  <img class="lazyload-detail"  crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="gambar ${resto.name}">
  <div class="resto__info">
    <h3>Information</h3>
    <p>⭐️${resto.rating}</p>
    <p class="restaurant__location">
      <img src="./icons/location.svg" alt="location" width="20px"/>${resto.address}, ${resto.city}
    </p>

    <h4>Menu Makanan</h4>
    <p>${resto.menus.foods.map((food) => food.name).join(', ')}</p>
    <h4>Menu Minum</h4>
    <p>${resto.menus.drinks.map((food) => food.name).join(', ')}</p>
    <h4> Deskripsi</h4>
    <p>${resto.description}</p>
  </div>

  <div class="resto__overview">
    <h3>Review</h3>
      ${resto.customerReviews
    .map(
      ({ name, date, review }) => `
        <p>Nama: ${name}</p>
        <p>Tanggal: ${date}</p>
        <p>Review: ${review}</p>
        <br />
    `,
    )
    .join('')}
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
