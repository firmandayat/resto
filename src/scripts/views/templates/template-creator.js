import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
        <div class="card">
            <img src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : `https://restaurant-api.dicoding.dev/images/small/${resto.pictureId}`}" alt="${resto.name}">
            <div class="container">
                <h4><b>${resto.name}</b></h4>
                <p><strong>Kota:</strong> ${resto.city}</p>
                <p><strong>Rating:</strong> ${resto.rating}</p>
                <a href="/#/detail/${resto.id}"><button><i class="fa-solid fa-circle-info"></i> Detail</button></a>
            </div>
        </div>
`;

const createRestoDetailTemplate = (resto) => `
        <div class="card">
            <img src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : `https://restaurant-api.dicoding.dev/images/small/${resto.pictureId}`}" alt="${resto.name}">
            <div class="container">
                <h4><b>${resto.name}</b></h4>
                <p>${resto.description}</p>
                <p><strong>Kota:</strong> ${resto.city}</p>
                <p><strong>Alamat:</strong> ${resto.address}</p>
                <p><strong>Rating:</strong> ${resto.rating}</p>
                <p><strong>Menu Makanan:</strong></p>
					<ul>
						${resto.menus.foods.map((food) => `<li><p>${food.name}</p></li>`).join('')}
					</ul>
					<p><strong>Menu Minuman:</strong></p>
					<ul>
						${resto.menus.drinks.map((drink) => `<li><p>${drink.name}</p></li>`).join('')}
					</ul>
					<p><strong>Ulasan Pelanggan:</strong></p>
					${resto.customerReviews.map((review) => `
						<div>
							<p><strong>${review.name}</strong></p>
							<p>${review.review}</p>
						</div>
					`).join('')}
            </div>
        </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
