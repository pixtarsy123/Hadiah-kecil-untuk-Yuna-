# Kejutan Kecil untuk Doi 💗

Website kejutan romantis sederhana yang responsif untuk HP dan laptop.

## Isi folder
- `index.html`: struktur dan teks halaman
- `style.css`: warna, tata letak, responsivitas, dan animasi
- `script.js`: kuis interaktif dan tombol pesan rahasia

## Menjalankan di VS Code
1. Ekstrak ZIP ini.
2. Buka VS Code, pilih **File > Open Folder**, lalu pilih folder `kejutan-untuk-doi`.
3. Buka `index.html`.
4. Cara termudah: pasang ekstensi **Live Server** dari Extensions.
5. Klik kanan `index.html` lalu pilih **Open with Live Server**.

Bisa juga membuka `index.html` langsung di browser, tetapi Live Server lebih nyaman untuk mengedit.

## Personalisasi
- Di bagian atas `script.js`, ganti `const namaDoi = "Sayang";`.
- Di `index.html`, edit paragraf dalam `<div class="letter">` untuk pesan pribadi.
- Ubah pertanyaan dan jawaban di daftar `questions` dalam `script.js`.

## Publikasi gratis dengan GitHub Pages
1. Buat akun GitHub jika belum punya.
2. Buat repository baru, misalnya `kejutan-untuk-doi`.
3. Unggah tiga file (`index.html`, `style.css`, `script.js`) ke repository.
4. Buka **Settings > Pages**.
5. Di bagian **Build and deployment**, pilih **Deploy from a branch**.
6. Pilih branch `main` dan folder `/(root)`, lalu tekan **Save**.
7. Tunggu proses publikasi. GitHub Pages akan menampilkan URL website yang bisa dikirim ke doi.

Catatan:
- Nama menu bisa sedikit berubah seiring pembaruan GitHub.
- Jangan memasukkan data pribadi sensitif ke website publik.
- Ini kejutan statis: teks rahasia disimpan di kode website, jadi orang yang memeriksa source code bisa menemukannya. Tombol hanya menyembunyikan pesan dari tampilan awal, bukan mengamankannya dengan kata sandi.
- Font dari Google Fonts membutuhkan koneksi internet; jika offline, browser menggunakan font cadangan.
