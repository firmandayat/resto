const About = {
  async render() {
    return `
          <div style="min-height:100vh">
          <h2 class="space" style="margin-top:100px">About</h2>
          <p class="container text">Sejak pertama kali dibuka pada tahun 90, The Tasty Touch telah menjadi bagian dari perjalanan kuliner yang penuh dengan dedikasi dan inovasi. Berawal dari sebuah warung kecil yang didirikan oleh Firman Hidayatullah, restoran kami tumbuh dengan semangat untuk menyajikan hidangan autentik yang menggugah selera. Dengan resep yang telah diwariskan dari generasi ke generasi, kami menggabungkan cita rasa tradisional dengan sentuhan modern untuk menciptakan pengalaman makan yang tak terlupakan. Selama bertahun-tahun, The Tasty Touch telah menjadi tempat berkumpulnya keluarga, teman, dan kolega, dengan suasana yang ramah dan pelayanan yang hangat.</p><br>
          <h2 style="margin-top:20px">Gallery</h2>
          <div class="wrapper-gallery container">
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Resto" />
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Resto">
                <img src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=1489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Resto">
                <img src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Resto">
                <img src="https://images.unsplash.com/photo-1484659619207-9165d119dafe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Resto">
          </div>
          </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render());
  },
};

export default About;
