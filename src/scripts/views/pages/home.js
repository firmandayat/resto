// /* eslint-disable no-undef */
import RestoSource from '../../data/resto-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section id="Home">
            <img class="bg-banner" src="./images/heros/hero-image_4.jpg" alt="Hero Image" />
        </section>
        <div class="container">
            <section class="description">
                <h2 tabindex="0">
                    The Tasty Touch
                </h2>
                <div id="mainContent" class="content">
                    <article>
                        <p tabindex="0" class="text">Berawal dari sebuah warung kecil di sudut kota, kami berkembang menjadi restoran ternama yang dikenal karena kualitas rasa dan pelayanan terbaik. Rasakan perpaduan sempurna antara cita rasa lokal dan internasional yang diolah dengan bahan segar dan penuh cinta, disajikan dalam suasana hangat yang mengundang, menjadikan setiap kunjungan Anda sebuah perjalanan kuliner yang tak terlupakan.</p>
                    </article>
                </div>
            </section>
          <h2 style="margin-top:50px">Restaurants List</h2>
          <div id="restaurant" class="wrapper-resto"></div>
          <section id="Contact Us" class="contact-us">
            <h2 tabindex="0">Contact Us</h2>
            <p tabindex="0" class="text">Jika Anda memiliki pertanyaan atau ingin melakukan reservasi, jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda dengan segala kebutuhan, mulai dari pemesanan meja, informasi menu, hingga acara spesial. Hubungi kami melalui email atau kunjungi kami langsung dan nikmati pengalaman kuliner terbaik bersama kami.
            </p>
            <div class="sosmed">
                <a href="https://mailto:firman.txt@gmail.com" target="_blank"><img src="./images/logos/gm.png"
                        width="45px" alt="Gmail Logo"></a>
                <a href="https://www.instagram.com/firmandyt/" target="_blank"><img src="./images/logos/ig.png"
                width="45px" alt="Instagram Logo"></a>
                <a href="https://www.linkedin.com/in/firmandyt/" target="_blank"><img
                        src="./images/logos/linkedin.png" width="45px" alt="Linkedin Logo"></a>
            </div>
        </section>
        </div>          
        `;
  },

  async afterRender() {
    console.log('Home page rendered');
    const restos = await RestoSource.homeRestaurant();
    console.log(restos);
    const restosContainer = document.querySelector('#restaurant');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
