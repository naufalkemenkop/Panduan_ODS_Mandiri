# ODS Mandiri (Kemenkop)

Website statis: buka `index.html` di browser, atau unggah seluruh folder ke hosting.

Struktur
- index.html  : halaman utama
- css/style.css  : gaya halaman utama
- css/tutorial.css  : gaya halaman tutorial Koperasi dan Dinas
- js/main.js  : menu, form kontak, chat, modal
- js/data.js  : isi 29 panduan tutorial Koperasi, daftar gambar, dan daftar video
- js/tutorial.js  : tampilan halaman tutorial (daftar, detail panduan, halaman Dinas)
- assets/img  : logo, mockup laptop, dan tangkapan layar panduan
- assets/video  : video panduan

Menambah video panduan
1. Taruh file di assets/video (sebaiknya MP4 H.264 dan WebM).
2. Tambahkan baris pada objek VIDEOS di js/data.js, misalnya:
   "02": { "mp4": "assets/video/02-login.mp4", "webm": "assets/video/02-login.webm" }

Alamat halaman: index.html#tutorial-koperasi, index.html#koperasi-01 sampai #koperasi-29, index.html#tutorial-dinas
Font Google (Manrope, DM Sans) dimuat dari internet.
