const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked Restaurant', ({ I }) => {
  I.seeElement('#error-text');
  I.see('Your Favorite List is Empty', '#error-text');
});

Scenario('liking one Restaurant', async({ I }) => {
  I.see('Your Favorite List is Empty', '#error-text');

  I.amOnPage('/');

  I.seeElement('.box .text h2 a');

  const firstRestaurant = locate('.box .text h2 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.box .text h2');
  const likedRestaurantTitle = await I.grabTextFrom('.box .text h2');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliked one restaurant', async({ I }) => {
  I.see('Your Favorite List is Empty', '#error-text');

  I.amOnPage('/');

  I.seeElement('.box .text h2 a');

  const firstRestaurant = locate('.box .text h2 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.box .text h2');
  const likedRestaurantTitle = await I.grabTextFrom('.box .text h2');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(likedRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');

  I.see('Your Favorite List is Empty', '#error-text');
});
