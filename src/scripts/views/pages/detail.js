import CONFIG from '../../globals/config';
import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
          <h2 style="margin-top:100px">Detail Page</h2>
          <p class="container text">Setiap detail dirancang untuk memberikan pengalaman kuliner yang sempurna. Dari pemilihan bahan baku yang segar dan berkualitas, hingga penyajian hidangan dengan tampilan yang menggugah selera.</p>
          <div id="restaurant" class="wrapper-detail"></div>
          <div id="likeButtonContainer"></div>
          <h2 style="margin-top:50px">Add Your Review</h2>
          <div class="card-review"> 
            <form id="reviewForm">
            <label class="label" for="reviewName">Nama</label><br>
              <input type="text" id="reviewName" placeholder="Your Name" required><br><br>
            <label class="label" for="reviewText">Review</label><br>
              <textarea id="reviewText" placeholder="Your Review" required></textarea><br><br>
              <button class="button" type="submit">Submit</button><br>
            </form>
          </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restos = await RestoSource.detailRestaurant(url.id);
    console.log(restos);
    const restoContainer = document.querySelector('#restaurant');
    restoContainer.innerHTML = createRestoDetailTemplate(restos);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restos: {
        id: restos.id,
        pictureId: restos.pictureId,
        name: restos.name,
        city: restos.city,
        rating: restos.rating,
      },
    });
    this._initReviewForm(restos.id);
  },

  _initReviewForm(restaurantId) {
    const reviewForm = document.getElementById('reviewForm');
    reviewForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('reviewName');
      const reviewInput = document.getElementById('reviewText');
      const name = nameInput.value;
      const review = reviewInput.value;

      try {
        const response = await fetch(`${CONFIG.BASE_URL}/review`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: restaurantId,
            name,
            review,
          }),
        });

        const responseJson = await response.json();

        if (responseJson.error === false) {
          alert('Thanks! Review berhasil');
          window.location.reload();
          nameInput.value = '';
          reviewInput.value = '';
        } else {
          alert('Gagal review');
        }
      } catch (error) {
        console.error('Error posting review:', error);
      }
    });
  },

  _updateReviews(customerReviews) {
    const reviewsContainer = document.querySelector('#restaurant');
    reviewsContainer.innerHTML = customerReviews
      .map(
        (resto) => `
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
    `
      )
      .join('');
  },
};

export default Detail;
