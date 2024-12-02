import FavoriteResto from '../../data/favorite-resto';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
          <div style="min-height:100vh">
          <div style="margin-top:120px" id="restaurant" class="wrapper-favorite"></div>
          </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restos = await FavoriteResto.getAllResto();
    const restosContainer = document.querySelector('#restaurant');

    if (restos.length === 0) {
      restosContainer.innerHTML = `
        <h2 style="text-align: center; margin-top: 25vh;">Tidak ada restoran favorit</h2>
      `;
    } else {
      restos.forEach((resto) => {
        restosContainer.innerHTML += createRestoItemTemplate(resto);
      });
    }

    console.log('Favorite page rendered');
  },
};

export default Favorite;
