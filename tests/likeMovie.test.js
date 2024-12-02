import { spyOn } from 'jest-mock';
import FavoriteResto from '../src/scripts/data/favorite-resto';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();

    spyOn(FavoriteResto, 'searchMovies');
  });

  it('should show the like button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Memastikan film berhasil disukai
    const resto = await FavoriteResto.getMovie(1);
    expect(resto).toEqual({ id: 1 });

    await FavoriteResto.deleteMovie(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteResto.putMovie({ id: 1 });

    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Tidak ada film yang ganda
    expect(await FavoriteResto.getAllMovies()).toEqual([{ id: 1 }]);

    await FavoriteResto.deleteMovie(1);
  });

  it('should not add a resto when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteResto.getAllMovies()).toEqual([]);
  });
});
