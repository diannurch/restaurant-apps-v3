const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const likingRestaurant = async ({ I }) => {
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item_not_found',
  );

  I.amOnPage('/');

  I.waitForElement('.restaurant__title');
  I.seeElement('.restaurant__title');

  const firstResto = locate('.restaurant__title').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestoTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
};

Scenario('showing empty liked restaurant', ({ I }) => {
  I.waitForElement('#query');
  I.seeElement('#query');
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item_not_found',
  );
});

Scenario('liking one restaurant', async ({ I }) => {
  await likingRestaurant({ I });
});

Scenario('unliking one restaurant', async ({ I }) => {
  await likingRestaurant({ I });

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  I.click('.restaurant__title');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.restaurant-item_not_found',
  );
});
