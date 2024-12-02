import FavoriteResto from '../data/favorite-resto';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restos }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restos = restos;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restos;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const restos = await FavoriteResto.getResto(id);
    return !!restos;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteResto.putResto(this._restos);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteResto.deleteResto(this._restos.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
