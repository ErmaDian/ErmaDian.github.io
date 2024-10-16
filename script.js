class Game {
    constructor() {
      this.target = Math.floor(Math.random() * 100) + 1;
      this.jumTebakan = 0;
    }
  
    checkTebakan(tebak) {
      this.jumTebakan++;
  
      if (tebak === this.target) {
        return 'benar';
      } else if (tebak < this.target) {
        return 'rendah';
      } else {
        return 'tinggi';
      }
    }
  }
  
  // Inisialisasi permainan
  const game = new Game();
  
  // Deklarasi elemen HTML
  const angka = document.getElementById('angka');
  const tombol = document.getElementById('tombol');
  const jumlahTebakan = document.querySelector('.jumlah-tebakan');
  const hasilAkhir = document.querySelector('.hasil-akhir');
  const rendahAtauTinggi = document.querySelector('.rendah-atau-tinggi');
  
  // Fungsi saat tombol ditekan
  tombol.addEventListener('click', function () {
    const tebak = parseInt(angka.value);
    const result = game.checkTebakan(tebak);
  
    hasilAkhir.textContent = result === 'benar' ? 'Selamat! Anda menebak angka yang benar!' : 'Salah! Cobalah lagi.';
    hasilAkhir.style.backgroundColor = result === 'benar' ? 'green' : 'red';
    hasilAkhir.style.color = 'white';
  
    if (result === 'rendah') {
      rendahAtauTinggi.textContent = 'Terlalu rendah!';
    } else if (result === 'tinggi') {
      rendahAtauTinggi.textContent = 'Terlalu tinggi!';
    } else {
      rendahAtauTinggi.textContent = '';
    }
  
    jumlahTebakan.textContent ='';
    angka.value = "";
  });