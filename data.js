/* Data tutorial akun Koperasi (diekstrak dari Juknis ODS Mandiri).
   Tambah video panduan baru pada objek VIDEOS di bawah, kuncinya nomor panduan. */
const TOPICS=[
 {
  "n": "01",
  "title": "Daftar Akun",
  "desc": "Buat akun koperasi, verifikasi email, lalu tunggu validasi dinas.",
  "cat": 0,
  "intro": [
   {
    "t": "p",
    "x": "Berikut Langkah-langkah untuk melakukan pendaftaran akun pada ODS Mandiri Sebagai Koperasi"
   }
  ],
  "steps": [
   {
    "title": "Akses Halaman Login",
    "blocks": [
     {
      "t": "p",
      "x": "Buka laman ODS Mandiri melalui url https://ods.kop.go.id/ Pada halaman login, klik tombol Daftar"
     },
     {
      "t": "img",
      "f": "i001.webp",
      "w": 720,
      "h": 296,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Jenis Akun",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Daftar Akun Sebagai, terdapat dua pilihan jenis akun, yaitu Koperasi dan Akuntan. Pilih menu Koperasi untuk melanjutkan proses pendaftaran akun koperasi"
     },
     {
      "t": "img",
      "f": "i002.webp",
      "w": 699,
      "h": 481,
      "wide": false
     }
    ]
   },
   {
    "title": "Masukkan NIK dan Email",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Daftar Akun, masukkan Nomor Induk Koperasi dan Email Koperasi yang aktif. Setelah data terisi, klik tombol Cek Koperasi."
     },
     {
      "t": "img",
      "f": "i003.webp",
      "w": 671,
      "h": 629,
      "wide": false
     }
    ]
   },
   {
    "title": "Lengkapi Formulir Pendaftaran",
    "blocks": [
     {
      "t": "p",
      "x": "Lengkapi Nama Koperasi, Nomor Badan Hukum, dan Informasi Kontak Pendaftar, lalu unggah SK Pengesahan Koperasi/Badan Hukum dan masukkan Username untuk akun Anda, Lalu klik Daftar"
     },
     {
      "t": "img",
      "f": "i004.webp",
      "w": 720,
      "h": 582,
      "wide": false
     },
     {
      "t": "note",
      "x": "Catatan : Untuk pembuatan password, harus memiliki minimal 8 karakter, huruf besar, huruf kecil, nomor dan karakter khusus."
     }
    ]
   },
   {
    "title": "Pendaftaran Berhasil",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah pendaftaran berhasil, Anda wajib memverifikasi email yang telah Anda daftarkan pada saat daftar akun."
     },
     {
      "t": "img",
      "f": "i005.webp",
      "w": 597,
      "h": 530,
      "wide": false
     }
    ]
   },
   {
    "title": "Cek Email",
    "blocks": [
     {
      "t": "p",
      "x": "Buka email Anda, lalu klik Verifikasi Akun Saya. Jika pesan tidak muncul, silahkan periksa Spam pada email Anda."
     },
     {
      "t": "img",
      "f": "i006.webp",
      "w": 720,
      "h": 449,
      "wide": false
     }
    ]
   },
   {
    "title": "Verifikasi berhasil",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah berhasil verifikasi, mohon menunggu proses verifikasi oleh dinas Provinsi/Kabupaten/Kota yang membidangi koperasi Anda."
     },
     {
      "t": "img",
      "f": "i007.webp",
      "w": 720,
      "h": 156,
      "wide": false
     }
    ]
   }
  ]
 },
 {
  "n": "02",
  "title": "Login",
  "desc": "Masuk ke ODS Mandiri dan kenali pesan error saat gagal masuk.",
  "cat": 0,
  "intro": [
   {
    "t": "p",
    "x": "Berikut langkah-langkah untuk melakukan login pada ODS Mandiri."
   }
  ],
  "steps": [
   {
    "title": "Akses Halaman Login",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman utama ODS Mandiri, klik tombol Login untuk membuka halaman masuk akun."
     },
     {
      "t": "img",
      "f": "i008.webp",
      "w": 720,
      "h": 345,
      "wide": false
     }
    ]
   },
   {
    "title": "Masukkan Email/Username dan Password",
    "blocks": [
     {
      "t": "p",
      "x": "Masukkan Email atau Username dan Password akun Anda, lalu klik tombol Login untuk masuk."
     },
     {
      "t": "img",
      "f": "i009.webp",
      "w": 720,
      "h": 555,
      "wide": false
     },
     {
      "t": "note",
      "x": "Catatan : Ada beberapa kondisi anda tidak bisa login, Jika terdapat beberapa pesan error seperti di bawah ini."
     },
     {
      "t": "p",
      "x": "Jika terdapat pesan error seperti di bawah ini, menandakan bahwa Anda belum memverifikasi Email yang Anda daftarkan pada saat daftar akun"
     },
     {
      "t": "img",
      "f": "i010.webp",
      "w": 694,
      "h": 194,
      "wide": false
     },
     {
      "t": "p",
      "x": "Jika terdapat pesan error seperti di bawah ini, menandakan bahwa akun Anda belum diverifikasi oleh dinas kabupaten/kota yang membidangi koperasi Anda."
     },
     {
      "t": "img",
      "f": "i011.webp",
      "w": 720,
      "h": 119,
      "wide": false
     },
     {
      "t": "p",
      "x": "Jika terdapat pesan error seperti di bawah ini, menandakan bahwa akun Anda belum diverifikasi oleh dinas provinsi yang membidangi koperasi Anda."
     },
     {
      "t": "img",
      "f": "i012.webp",
      "w": 720,
      "h": 128,
      "wide": false
     },
     {
      "t": "p",
      "x": "Jika terdapat pesan error seperti di bawah ini, menandakan bahwa akun Anda belum diverifikasi oleh Kementerian Koperasi."
     },
     {
      "t": "img",
      "f": "i013.webp",
      "w": 720,
      "h": 122,
      "wide": false
     },
     {
      "t": "p",
      "x": "Jika terdapat pesan error seperti di bawah ini, menandakan bahwa akun yang Anda masukkan tidak ditemukan."
     }
    ]
   }
  ]
 },
 {
  "n": "03",
  "title": "Atur Ulang Password",
  "desc": "Pulihkan akses akun lewat tautan reset yang dikirim ke email.",
  "cat": 0,
  "intro": [
   {
    "t": "p",
    "x": "Berikut langkah-langkah untuk mengatur ulang password apabila Anda lupa password akun ODS Mandiri."
   }
  ],
  "steps": [
   {
    "title": "Klik Lupa Password",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Login, klik tautan Lupa password? untuk memulai proses pengaturan ulang password."
     },
     {
      "t": "img",
      "f": "i014.webp",
      "w": 526,
      "h": 519,
      "wide": false
     }
    ]
   },
   {
    "title": "Masukkan Email dan Kirim Tautan",
    "blocks": [
     {
      "t": "p",
      "x": "Masukkan Email akun yang terdaftar, lalu klik tombol Kirim Tautan Atur Ulang Password."
     },
     {
      "t": "img",
      "f": "i015.webp",
      "w": 637,
      "h": 578,
      "wide": false
     }
    ]
   },
   {
    "title": "Konfirmasi Pengiriman Tautan",
    "blocks": [
     {
      "t": "p",
      "x": "Klik tombol Oke, Mengerti untuk menutup notifikasi dan memeriksa email Anda."
     },
     {
      "t": "img",
      "f": "i016.webp",
      "w": 720,
      "h": 519,
      "wide": false
     }
    ]
   },
   {
    "title": "Buka Tautan dari Email",
    "blocks": [
     {
      "t": "p",
      "x": "Buka email dari ODS Mandiri, lalu klik tombol Atur Ulang Kata Sandi untuk melanjutkan proses pengaturan ulang password."
     },
     {
      "t": "img",
      "f": "i017.webp",
      "w": 720,
      "h": 330,
      "wide": false
     }
    ]
   },
   {
    "title": "Buat Password Baru",
    "blocks": [
     {
      "t": "p",
      "x": "Masukkan Password Baru dan Konfirmasi Password, lalu klik Buat Password Baru."
     },
     {
      "t": "img",
      "f": "i018.webp",
      "w": 720,
      "h": 533,
      "wide": false
     }
    ]
   },
   {
    "title": "Password Berhasil Dibuat",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah berhasil, silahkan login dengan password yang baru"
     },
     {
      "t": "img",
      "f": "i019.webp",
      "w": 666,
      "h": 556,
      "wide": false
     }
    ]
   }
  ]
 },
 {
  "n": "04",
  "title": "Ubah Foto",
  "desc": "Ganti foto profil akun dan sesuaikan ukurannya.",
  "cat": 1,
  "intro": [
   {
    "t": "p",
    "x": "Berikut langkah-langkah untuk mengubah foto profil pada akun ODS Mandiri Anda."
   }
  ],
  "steps": [
   {
    "title": "Akses Menu Profil",
    "blocks": [
     {
      "t": "p",
      "x": "Klik ikon Profil di pojok kanan atas layar untuk membuka menu akun."
     },
     {
      "t": "img",
      "f": "i020.webp",
      "w": 720,
      "h": 332,
      "wide": false
     }
    ]
   },
   {
    "title": "Buka Halaman Profil",
    "blocks": [
     {
      "t": "p",
      "x": "Pilih menu Profil pada dropdown yang muncul untuk membuka halaman profil Anda."
     },
     {
      "t": "img",
      "f": "i021.webp",
      "w": 720,
      "h": 328,
      "wide": false
     }
    ]
   },
   {
    "title": "Ubah Foto",
    "blocks": [
     {
      "t": "p",
      "x": "Klik tombol Ubah Foto untuk mengganti foto profil akun Anda."
     },
     {
      "t": "img",
      "f": "i022.webp",
      "w": 720,
      "h": 328,
      "wide": false
     }
    ]
   },
   {
    "title": "Sesuaikan Ukuran Foto",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah klik tombol ubah foto, sesuaikan ukuran foto sesuai keinginan anda. Apabila sudah sesuai klik Terapkan"
     },
     {
      "t": "img",
      "f": "i023.webp",
      "w": 720,
      "h": 335,
      "wide": false
     }
    ]
   },
   {
    "title": "Foto Berhasil Diubah",
    "blocks": [
     {
      "t": "p",
      "x": "Foto profil berhasil diperbarui dan akan ditampilkan pada akun Anda."
     },
     {
      "t": "img",
      "f": "i024.webp",
      "w": 720,
      "h": 338,
      "wide": false
     }
    ]
   }
  ]
 },
 {
  "n": "05",
  "title": "Ubah Nama",
  "desc": "Perbarui nama pada profil akun Anda.",
  "cat": 1,
  "intro": [
   {
    "t": "p",
    "x": "Berikut langkah-langkah untuk mengubah nama pada akun ODS Mandiri Anda."
   }
  ],
  "steps": [
   {
    "title": "Akses Menu Profil",
    "blocks": [
     {
      "t": "p",
      "x": "Klik ikon Profil di pojok kanan atas layar untuk membuka menu akun."
     },
     {
      "t": "img",
      "f": "i025.webp",
      "w": 720,
      "h": 332,
      "wide": false
     }
    ]
   },
   {
    "title": "Buka Halaman Pengaturan",
    "blocks": [
     {
      "t": "p",
      "x": "Pilih menu Pengaturan pada dropdown yang muncul untuk membuka halaman pengaturan akun."
     },
     {
      "t": "img",
      "f": "i026.webp",
      "w": 720,
      "h": 328,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Nama",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Pengaturan, klik menu Nama untuk mengubah nama akun Anda"
     },
     {
      "t": "img",
      "f": "i027.webp",
      "w": 720,
      "h": 369,
      "wide": false
     }
    ]
   },
   {
    "title": "Ubah Nama",
    "blocks": [
     {
      "t": "p",
      "x": "Masukkan Nama baru, lalu klik tombol Ubah Nama untuk menyimpan perubahan."
     },
     {
      "t": "img",
      "f": "i028.webp",
      "w": 720,
      "h": 364,
      "wide": false
     }
    ]
   },
   {
    "title": "Nama berhasil diubah",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah klik ubah nama, maka nama berhasil diubah."
     },
     {
      "t": "img",
      "f": "i029.webp",
      "w": 720,
      "h": 371,
      "wide": false
     }
    ]
   }
  ]
 },
 {
  "n": "06",
  "title": "Ubah Email",
  "desc": "Ganti email akun dengan kode verifikasi.",
  "cat": 1,
  "intro": [
   {
    "t": "p",
    "x": "Berikut langkah-langkah untuk mengubah email pada akun ODS Mandiri Anda."
   }
  ],
  "steps": [
   {
    "title": "Akses Menu Profil",
    "blocks": [
     {
      "t": "p",
      "x": "Pilih ikon profil di pojok kanan atas untuk membuka pengaturan ."
     },
     {
      "t": "img",
      "f": "i030.webp",
      "w": 720,
      "h": 332,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Email",
    "blocks": [
     {
      "t": "p",
      "x": "Pilih menu Pengaturan pada dropdown yang muncul untuk membuka halaman pengaturan akun."
     },
     {
      "t": "img",
      "f": "i031.webp",
      "w": 720,
      "h": 361,
      "wide": false
     }
    ]
   },
   {
    "title": "Verifikasi Password",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Pengaturan, klik menu Email untuk mengubah email akun Anda."
     },
     {
      "t": "img",
      "f": "i032.webp",
      "w": 720,
      "h": 366,
      "wide": false
     }
    ]
   },
   {
    "title": "Masukkan Password Akun",
    "blocks": [
     {
      "t": "p",
      "x": "Masukkan Password anda untuk verifikasi akun, lalu klik tombol Selanjutnya untuk menyimpan perubahan."
     },
     {
      "t": "img",
      "f": "i033.webp",
      "w": 720,
      "h": 362,
      "wide": false
     }
    ]
   },
   {
    "title": "Masukkan email baru",
    "blocks": [
     {
      "t": "p",
      "x": "Masukkan Email Baru anda pada kolom email baru, lalu klik tombol Selanjutnya"
     },
     {
      "t": "img",
      "f": "i034.webp",
      "w": 720,
      "h": 361,
      "wide": false
     }
    ]
   },
   {
    "title": "Cek Email",
    "blocks": [
     {
      "t": "p",
      "x": "Cek spam atau inbox pada email baru anda, buka email verifikasi dari ODS Mandiri"
     },
     {
      "t": "img",
      "f": "i035.webp",
      "w": 720,
      "h": 327,
      "wide": false
     }
    ]
   },
   {
    "title": "Salin Kode Verifikasi",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah klik email dari ods, salin kode OTP untuk melanjutkan proses verifikasi"
     },
     {
      "t": "img",
      "f": "i036.webp",
      "w": 720,
      "h": 327,
      "wide": false
     }
    ]
   },
   {
    "title": "Masukkan kode verifikasi",
    "blocks": [
     {
      "t": "p",
      "x": "Masukkan kode Verifikasi dari email ODS, lalu klik Submit"
     },
     {
      "t": "img",
      "f": "i037.webp",
      "w": 720,
      "h": 362,
      "wide": false
     },
     {
      "t": "note",
      "x": "Catatan : Apabila anda belum menerima verifikasi, anda bisa mengirim ulang kode verifikasi"
     }
    ]
   },
   {
    "title": "Email berhasil diubah",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah kode verifikasi di submit, maka email berhasil diubah"
     },
     {
      "t": "img",
      "f": "i038.webp",
      "w": 720,
      "h": 366,
      "wide": false
     }
    ]
   }
  ]
 },
 {
  "n": "07",
  "title": "Ubah Username",
  "desc": "Ganti username yang dipakai untuk masuk.",
  "cat": 1,
  "intro": [
   {
    "t": "p",
    "x": "Berikut langkah-langkah untuk mengubah username pada akun ODS Mandiri Anda."
   }
  ],
  "steps": [
   {
    "title": "Buka Halaman Pengaturan",
    "blocks": [
     {
      "t": "p",
      "x": "Pilih ikon profil pada pojok kanan atas untuk membuka halaman pengaturan."
     },
     {
      "t": "img",
      "f": "i039.webp",
      "w": 720,
      "h": 366,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Ubah Username",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah menu profil terbuka, klik menu Pengaturan."
     },
     {
      "t": "img",
      "f": "i040.webp",
      "w": 720,
      "h": 328,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Username",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Pengaturan bagian Informasi Akun, klik menu Username."
     },
     {
      "t": "img",
      "f": "i041.webp",
      "w": 720,
      "h": 365,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Username Baru",
    "blocks": [
     {
      "t": "p",
      "x": "Ketik Username baru pada kolom Username sesuai ketentuan yang tertera di bawah kolom."
     },
     {
      "t": "img",
      "f": "i042.webp",
      "w": 720,
      "h": 361,
      "wide": false
     },
     {
      "t": "note",
      "x": "Catatan : Pastikan username baru memenuhi semua ketentuan yang tertera hingga bertanda centang hijau sebelum mengklik tombol Ubah Username."
     }
    ]
   },
   {
    "title": "Simpan Username Baru",
    "blocks": [
     {
      "t": "p",
      "x": "Ketik Username baru pada kolom Username sesuai ketentuan yang tertera di bawah kolom."
     },
     {
      "t": "img",
      "f": "i043.webp",
      "w": 720,
      "h": 367,
      "wide": false
     }
    ]
   },
   {
    "title": "Username berhasil diubah",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah klik tombol Ubah Username, maka username berhasil diubah"
     },
     {
      "t": "img",
      "f": "i044.webp",
      "w": 720,
      "h": 366,
      "wide": false
     }
    ]
   }
  ]
 },
 {
  "n": "08",
  "title": "Ubah Password",
  "desc": "Ganti kata sandi akun dari halaman pengaturan.",
  "cat": 1,
  "intro": [
   {
    "t": "p",
    "x": "Berikut langkah-langkah untuk mengubah password akun ODS Mandiri Anda."
   }
  ],
  "steps": [
   {
    "title": "Akses Menu Ubah Password",
    "blocks": [
     {
      "t": "p",
      "x": "Klik ikon profil di pojok kanan atas, lalu pilih menu Pengaturan atau langsung pilih menu Ubah Password."
     },
     {
      "t": "img",
      "f": "i046.webp",
      "w": 720,
      "h": 366,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Ubah Password",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman dropdown, klik menu Ubah Password untuk membuka form ubah password."
     },
     {
      "t": "img",
      "f": "i045.webp",
      "w": 720,
      "h": 352,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Form Ubah Password",
    "blocks": [
     {
      "t": "p",
      "x": "Masukkan Password Lama, Password Baru, dan Konfirmasi Password sesuai ketentuan yang tampil, lalu klik tombol Ubah Password."
     },
     {
      "t": "img",
      "f": "i047.webp",
      "w": 720,
      "h": 361,
      "wide": false
     }
    ]
   },
   {
    "title": "Password berhasil diubah",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah klik ubah password, maka password berhasil diubah"
     },
     {
      "t": "img",
      "f": "i048.webp",
      "w": 720,
      "h": 379,
      "wide": false
     }
    ]
   }
  ]
 },
 {
  "n": "09",
  "title": "Atur 2-Factor Authentication",
  "desc": "Tambah lapisan keamanan dengan aplikasi authenticator atau kode lewat email.",
  "cat": 1,
  "intro": [
   {
    "t": "p",
    "x": "Verifikasi 2-Langkah (2-Factor Authentication) menambahkan satu pemeriksaan setelah kata sandi, sehingga akun tetap aman walaupun password bocor. Aktifkan verifikasi 2- langkah menggunakan salah satu dari dua metode berikut, yaitu Aplikasi Authenticator atau Kode lewat Email."
   }
  ],
  "steps": [
   {
    "title": "Akses Menu Pengaturan",
    "blocks": [
     {
      "t": "p",
      "x": "Klik ikon profil di pojok kanan atas, lalu pilih menu Pengaturan."
     },
     {
      "t": "img",
      "f": "i049.webp",
      "w": 720,
      "h": 364,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Verifikasi Dua Langkah",
    "blocks": [
     {
      "t": "p",
      "x": "Pada bagian Keamanan Akun, klik menu Verifikasi Dua Langkah yang berstatus Wajib diaktifkan"
     },
     {
      "t": "img",
      "f": "i050.webp",
      "w": 720,
      "h": 370,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Metode Verifikasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pilih salah satu metode verifikasi dengan klik tombol Aktifkan pada Aplikasi Authenticator (TOTP) atau Kode lewat Email."
     },
     {
      "t": "img",
      "f": "i051.webp",
      "w": 720,
      "h": 265,
      "wide": false
     }
    ]
   },
   {
    "title": "",
    "blocks": [
     {
      "t": "p",
      "x": "Aktifkan verifikasi dua langkah menggunakan kode 6 digit dari aplikasi Google Authenticator, Authy, atau sejenisnya."
     }
    ],
    "group": "Aplikasi Authenticator (TOTP)"
   },
   {
    "title": "Masukkan Kata Sandi",
    "blocks": [
     {
      "t": "p",
      "x": "Masukkan Kata Sandi Saat Ini untuk melanjutkan, lalu klik tombol Lanjut."
     },
     {
      "t": "img",
      "f": "i052.webp",
      "w": 720,
      "h": 363,
      "wide": false
     }
    ]
   },
   {
    "title": "Scan Kode QR dan Verifikasi",
    "blocks": [
     {
      "t": "p",
      "x": "Scan kode QR menggunakan aplikasi Authenticator, masukkan Kode 6 Digit dari Aplikasi yang muncul, lalu klik tombol Aktifkan."
     },
     {
      "t": "img",
      "f": "i053.webp",
      "w": 720,
      "h": 367,
      "wide": false
     }
    ]
   },
   {
    "title": "Simpan Kode Pemulihan",
    "blocks": [
     {
      "t": "p",
      "x": "Simpan kode pemulihan yang ditampilkan di tempat yang aman, lalu klik tombol Saya Sudah Menyimpannya."
     },
     {
      "t": "img",
      "f": "i054.webp",
      "w": 720,
      "h": 330,
      "wide": false
     }
    ]
   },
   {
    "title": "Verifikasi Dua Langkah Aktif",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah muncul pesan Verifikasi 2-Langkah Aktif!, klik tombol Selesai. Metode Aplikasi Authenticator (TOTP) kini berstatus aktif dan siap digunakan saat masuk ke akun. Anda juga dapat klik Atur metode cadangan lewat Email untuk menambahkan metode Kode lewat Email sebagai cadangan."
     },
     {
      "t": "img",
      "f": "i055.webp",
      "w": 720,
      "h": 310,
      "wide": false
     }
    ]
   },
   {
    "title": "",
    "blocks": [
     {
      "t": "p",
      "x": "Aktifkan verifikasi dua langkah menggunakan kode 6 digit yang dikirim ke email terdaftar setiap kali Anda masuk."
     }
    ],
    "group": "Email"
   },
   {
    "title": "Aktifkan Metode Kode lewat Email",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Verifikasi Dua Langkah, klik tombol Aktifkan di bagian Kode lewat Email."
     },
     {
      "t": "img",
      "f": "i056.webp",
      "w": 720,
      "h": 239,
      "wide": false
     }
    ]
   },
   {
    "title": "Masukkan Kata Sandi",
    "blocks": [
     {
      "t": "p",
      "x": "Masukkan Password Anda untuk verifikasi akun, lalu klik tombol Selanjutnya agar kode verifikasi dikirim ke email terdaftar."
     },
     {
      "t": "img",
      "f": "i058.webp",
      "w": 720,
      "h": 365,
      "wide": false
     }
    ]
   },
   {
    "title": "Verifikasi Kode dan Aktifkan",
    "blocks": [
     {
      "t": "p",
      "x": "Masukkan Kode 6 Digit yang diterima di email, lalu klik tombol Aktifkan."
     },
     {
      "t": "img",
      "f": "i057.webp",
      "w": 720,
      "h": 361,
      "wide": false
     }
    ]
   },
   {
    "title": "Simpan Kode Pemulihan",
    "blocks": [
     {
      "t": "p",
      "x": "Simpan kode pemulihan yang ditampilkan di tempat yang aman dengan klik Cetak, Salin, atau Unduh, lalu klik tombol Lanjutkan."
     },
     {
      "t": "img",
      "f": "i059.webp",
      "w": 720,
      "h": 316,
      "wide": false
     }
    ]
   },
   {
    "title": "Verifikasi Dua Langkah Aktif",
    "blocks": [
     {
      "t": "p",
      "x": "Metode Kode lewat Email kini berstatus Aktif dan siap digunakan saat masuk ke akun."
     },
     {
      "t": "img",
      "f": "i060.webp",
      "w": 720,
      "h": 297,
      "wide": false
     }
    ]
   }
  ]
 },
 {
  "n": "10",
  "title": "Download Profil Koperasi",
  "desc": "Unduh profil koperasi dari menu Profil Koperasi.",
  "cat": 2,
  "intro": [
   {
    "t": "p",
    "x": "Berikut langkah-langkah untuk mengunduh profil koperasi melalui ODS Mandiri."
   }
  ],
  "steps": [
   {
    "title": "Akses Menu Navigasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Dashboard, klik ikon menu di pojok kiri atas untuk membuka navigasi."
     },
     {
      "t": "img",
      "f": "i061.webp",
      "w": 720,
      "h": 367,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Profil Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada panel navigasi, klik menu Profil Koperasi"
     },
     {
      "t": "img",
      "f": "i062.webp",
      "w": 720,
      "h": 358,
      "wide": false
     }
    ]
   },
   {
    "title": "Unduh Profil Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Profil Koperasi, klik tombol Download di pojok kanan atas untuk mengunduh data koperasi."
     },
     {
      "t": "img",
      "f": "i063.webp",
      "w": 720,
      "h": 368,
      "wide": false
     }
    ]
   },
   {
    "title": "Hasil Unduhan",
    "blocks": [
     {
      "t": "p",
      "x": "Berkas Data Koperasi dalam format PDF akan terunduh dan dapat dibuka atau dicetak sesuai kebutuhan."
     },
     {
      "t": "img",
      "f": "i064.webp",
      "w": 720,
      "h": 326,
      "wide": false
     }
    ]
   }
  ]
 },
 {
  "n": "11",
  "title": "Download Sertifikat",
  "desc": "Unduh dan cetak sertifikat bagi koperasi yang sudah bersertifikat.",
  "cat": 2,
  "intro": [
   {
    "t": "note",
    "x": "Catatan : Menu ini hanya tersedia bagi koperasi yang sudah memiliki sertifikat."
   },
   {
    "t": "p",
    "x": "Berikut langkah-langkah untuk mengunduh sertifikat yang sudah disetujui untuk dicetak."
   }
  ],
  "steps": [
   {
    "title": "Buka Menu Navigasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Dashboard, klik ikon menu di pojok kiri atas untuk membuka navigasi."
     },
     {
      "t": "img",
      "f": "i065.webp",
      "w": 720,
      "h": 366,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Profil Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada panel navigasi, klik menu Profil Koperasi."
     },
     {
      "t": "img",
      "f": "i066.webp",
      "w": 720,
      "h": 361,
      "wide": false
     }
    ]
   },
   {
    "title": "Buka Bagian Sertifikat",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Profil Koperasi, gulir ke bawah hingga menemukan bagian Sertifikat yang menampilkan status sertifikat koperasi."
     },
     {
      "t": "img",
      "f": "i067.webp",
      "w": 720,
      "h": 367,
      "wide": false
     }
    ]
   },
   {
    "title": "Cetak Sertifikat",
    "blocks": [
     {
      "t": "p",
      "x": "Pastikan Status Sertifikat menunjukkan Disetujui Cetak, lalu klik tombol Cetak Sertifikat untuk mengunduhnya."
     },
     {
      "t": "img",
      "f": "i068.webp",
      "w": 720,
      "h": 344,
      "wide": false
     }
    ]
   }
  ]
 },
 {
  "n": "12",
  "title": "Request Perubahan Identitas",
  "desc": "Ajukan perubahan identitas, wilayah, klasifikasi, dan dokumen koperasi.",
  "cat": 3,
  "intro": [
   {
    "t": "p",
    "x": "Berikut langkah-langkah untuk mengajukan perubahan identitas koperasi melalui ODS Mandiri."
   }
  ],
  "steps": [
   {
    "title": "Pilih Menu Identitas",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Dashboard, klik kartu Identitas untuk mengajukan perubahan informasi identitas koperasi."
     },
     {
      "t": "img",
      "f": "i069.webp",
      "w": 720,
      "h": 364,
      "wide": false
     }
    ]
   },
   {
    "title": "Lanjutkan Pengajuan",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah kartu Identitas terpilih, klik tombol Selanjutnya untuk melanjutkan ke formulir Request Perubahan."
     },
     {
      "t": "img",
      "f": "i070.webp",
      "w": 720,
      "h": 366,
      "wide": false
     }
    ]
   },
   {
    "title": "Lengkapi Data Identitas",
    "blocks": [
     {
      "t": "p",
      "x": "Lengkapi data NIK, Nomor Badan Hukum, Tanggal Badan Hukum, Nama Koperasi, dan Alamat Koperasi sesuai dokumen resmi koperasi."
     },
     {
      "t": "img",
      "f": "i071.webp",
      "w": 720,
      "h": 355,
      "wide": false
     }
    ]
   },
   {
    "title": "Lengkapi Data Wilayah dan Klasifikasi Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Lengkapi Provinsi, Kabupaten/Kota, Kecamatan, Kelurahan/Desa, dan Bentuk Koperasi, serta Jenis Koperasi, Kelompok Koperasi dan Pola Pengelolaan pada bagian bawah formulir."
     },
     {
      "t": "img",
      "f": "i072.webp",
      "w": 720,
      "h": 342,
      "wide": false
     }
    ]
   },
   {
    "title": "Lengkapi Informasi Pendukung",
    "blocks": [
     {
      "t": "p",
      "x": "Lengkapi NPWP, NIB, nomor telepon, Email, serta Latitude dan Longitude lokasi koperasi."
     },
     {
      "t": "img",
      "f": "i073.webp",
      "w": 720,
      "h": 365,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Status Izin Usaha Simpan Pinjam",
    "blocks": [
     {
      "t": "p",
      "x": "Pilih Ya jika koperasi termasuk KSP/KSPPS/USP/USPPS, lalu pilih Jenis USP dan isi No. Izin USP. Pilih Tidak jika koperasi bukan termasuk jenis tersebut. Kemudian klik tombol Selanjutnya untuk melanjutkan ke tahap Lampiran Pendukung."
     },
     {
      "t": "img",
      "f": "i074.webp",
      "w": 720,
      "h": 199,
      "wide": false
     }
    ]
   },
   {
    "title": "Unggah Akta Pendirian, SK Pendirian, dan Akta Perubahan Anggaran",
    "blocks": [
     {
      "t": "p",
      "x": "Dasar"
     },
     {
      "t": "p",
      "x": "Pada tahap Lampiran Pendukung, unggah dokumen Akta Koperasi Pendirian, SK Pendirian, dan Akta Perubahan Anggaran Dasar Terakhir."
     },
     {
      "t": "img",
      "f": "i075.webp",
      "w": 720,
      "h": 335,
      "wide": false
     }
    ]
   },
   {
    "title": "Unggah SK Perubahan Anggaran Dasar, NPWP, NIB, dan Izin Usaha",
    "blocks": [
     {
      "t": "p",
      "x": "Simpan Pinjam Unggah dokumen SK Perubahan Anggaran Dasar Terakhir, NPWP Koperasi, NIB, dan Izin Usaha Simpan Pinjam (jika ada)."
     },
     {
      "t": "img",
      "f": "i076.webp",
      "w": 720,
      "h": 335,
      "wide": false
     }
    ]
   },
   {
    "title": "Unggah Dokumen Manajemen Risiko dan Selesaikan Pengajuan",
    "blocks": [
     {
      "t": "p",
      "x": "Unggah Dokumen Manajemen Risiko, lalu klik tombol Selesai untuk mengirimkan pengajuan perubahan identitas."
     },
     {
      "t": "img",
      "f": "i077.webp",
      "w": 720,
      "h": 339,
      "wide": false
     }
    ]
   },
   {
    "title": "Konfirmasi Pengajuan",
    "blocks": [
     {
      "t": "p",
      "x": "Pada dialog Konfirmasi Request Perubahan, klik Submit untuk mengonfirmasi bahwa request perubahan telah selesai."
     },
     {
      "t": "img",
      "f": "i078.webp",
      "w": 720,
      "h": 359,
      "wide": false
     }
    ]
   },
   {
    "title": "Pengajuan Selesai",
    "blocks": [
     {
      "t": "p",
      "x": "Pengajuan perubahan identitas berhasil dikirim dan berstatus Request Perubahan Selesai, menunggu pengecekan oleh dinas yang membidangi koperasi. Klik tombol Lihat Detail untuk memantau status pengajuan."
     },
     {
      "t": "img",
      "f": "i079.webp",
      "w": 720,
      "h": 361,
      "wide": false
     },
     {
      "t": "note",
      "x": "Catatan : Pengajuan perubahan identitas tidak langsung berlaku setelah dikirim. Koperasi harus"
     },
     {
      "t": "p",
      "x": "menunggu persetujuan dari dinas terkait yang membidangi koperasi."
     }
    ]
   },
   {
    "title": "Pantau Status Pengajuan",
    "blocks": [
     {
      "t": "p",
      "x": "Halaman detail menampilkan status pengajuan, yaitu Menunggu Konfirmasi selama pengajuan masih diproses, beserta Kode Pengajuan, Item Pengajuan, dan Tanggal Pengajuan. Bagian History mencatat riwayat proses pengajuan."
     },
     {
      "t": "img",
      "f": "i080.webp",
      "w": 720,
      "h": 333,
      "wide": false
     },
     {
      "t": "p",
      "x": "Keterangan bagian halaman detail:"
     },
     {
      "t": "img",
      "f": "i081.webp",
      "w": 1000,
      "h": 255,
      "wide": true
     },
     {
      "t": "p",
      "x": "Status pengajuan berjalan secara berurutan sebagai berikut:"
     },
     {
      "t": "img",
      "f": "i082.webp",
      "w": 1000,
      "h": 673,
      "wide": true
     },
     {
      "t": "p",
      "x": "Status pengajuan diperbarui secara otomatis setiap kali pengajuan berpindah tahap. Pastikan Anda memeriksa halaman detail pengajuan secara berkala dan mencatat Kode Pengajuan sebagai referensi. Jika pengajuan tertahan cukup lama pada status Menunggu Konfirmasi atau Diproses, silakan hubungi Helpdesk ODS melalui menu Butuh Bantuan? dengan menyertakan Kode Pengajuan tersebut."
     }
    ]
   }
  ]
 },
 {
  "n": "13",
  "title": "Request Penambahan/Perubahan Pengurus",
  "desc": "Tambah atau ubah data pengurus beserta lampiran pendukung.",
  "cat": 3,
  "intro": [
   {
    "t": "p",
    "x": "Berikut langkah-langkah untuk mengajukan penambahan dan perubahan data pengurus koperasi melalui ODS Mandiri. Pada panduan ini, penanda Hijau menunjukkan alur Tambah Pengurus, penanda Kuning menunjukkan alur Ubah Pengurus, dan penanda merah menunjukkan langkah umum."
   }
  ],
  "steps": [
   {
    "title": "Pilih Menu Pengurus",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Dashboard, klik kartu Pengurus untuk mengajukan perubahan data pengurus koperasi."
     },
     {
      "t": "img",
      "f": "i083.webp",
      "w": 720,
      "h": 295,
      "wide": false
     }
    ]
   },
   {
    "title": "Lanjutkan Pengajuan",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah kartu Pengurus terpilih, klik tombol Selanjutnya untuk melanjutkan ke halaman Request Perubahan"
     },
     {
      "t": "img",
      "f": "i084.webp",
      "w": 720,
      "h": 364,
      "wide": false
     }
    ]
   },
   {
    "title": "Lihat Daftar Pengurus",
    "blocks": [
     {
      "t": "p",
      "x": "Halaman Request Perubahan menampilkan daftar pengurus koperasi yang saat ini terdaftar, lengkap dengan periode kepengurusan, status kepengurusan, jabatan koperasi, dan status."
     },
     {
      "t": "img",
      "f": "i085.webp",
      "w": 720,
      "h": 333,
      "wide": false
     }
    ]
   },
   {
    "title": "Klik Tambah untuk Menambah Pengurus",
    "blocks": [
     {
      "t": "p",
      "x": "Untuk menambah pengurus baru, klik tombol Tambah pada bagian kanan atas daftar pengurus."
     },
     {
      "t": "img",
      "f": "i086.webp",
      "w": 720,
      "h": 371,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Data Pengurus",
    "blocks": [
     {
      "t": "p",
      "x": "Pada formulir Tambah Pengurus, isi Nama dan Periode Kepengurusan, pilih Status Kepengurusan (Pengurus atau Pengawas), lalu pilih Jabatan Koperasi."
     },
     {
      "t": "img",
      "f": "i087.webp",
      "w": 720,
      "h": 356,
      "wide": false
     }
    ]
   },
   {
    "title": "Lengkapi Identitas Pengurus",
    "blocks": [
     {
      "t": "p",
      "x": "Unggah KTP, lalu isi NIK, NPWP, dan Nomor Telepon, serta pilih Jenis Kelamin. Lengkapi juga data lainnya pada formulir, kemudian klik Submit"
     },
     {
      "t": "img",
      "f": "i088.webp",
      "w": 720,
      "h": 358,
      "wide": false
     }
    ]
   },
   {
    "title": "Pengurus Berhasil Ditambahkan",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah data disimpan, sistem menampilkan notifikasi Pengurus berhasil ditambah. Pengurus baru tampil pada daftar dengan penanda baris berwarna hijau."
     },
     {
      "t": "img",
      "f": "i089.webp",
      "w": 720,
      "h": 408,
      "wide": false
     }
    ]
   },
   {
    "title": "Klik Ubah untuk Mengubah Pengurus",
    "blocks": [
     {
      "t": "p",
      "x": "Untuk mengubah data pengurus yang sudah ada, klik ikon titik tiga pada baris pengurus yang akan diubah, lalu pilih Ubah. Pengurus baru yang telah ditambahkan tampil pada baris berwarna hijau"
     },
     {
      "t": "img",
      "f": "i090.webp",
      "w": 720,
      "h": 307,
      "wide": false
     }
    ]
   },
   {
    "title": "Ubah Data Pengurus",
    "blocks": [
     {
      "t": "p",
      "x": "Pada formulir ubah pengurus, perbarui data yang diperlukan, seperti Pendidikan, Tempat Lahir, Tanggal Lahir, Alamat, dan BPJS (opsional), kemudian klik tombol Submit."
     },
     {
      "t": "img",
      "f": "i091.webp",
      "w": 720,
      "h": 358,
      "wide": false
     }
    ]
   },
   {
    "title": "Periksa Daftar dan Lanjutkan",
    "blocks": [
     {
      "t": "p",
      "x": "Pengurus yang datanya diubah tampil pada baris berwarna kuning, sedangkan pengurus yang ditambahkan tampil pada baris berwarna hijau. Pastikan semua perubahan sudah benar, lalu klik tombol Selanjutnya"
     },
     {
      "t": "img",
      "f": "i092.webp",
      "w": 720,
      "h": 307,
      "wide": false
     }
    ]
   },
   {
    "title": "Unggah Lampiran Pendukung",
    "blocks": [
     {
      "t": "p",
      "x": "Pada tahap Lampiran Pendukung, unggah dokumen pendukung perubahan pengurus, lalu klik tombol Selesai."
     },
     {
      "t": "img",
      "f": "i093.webp",
      "w": 720,
      "h": 340,
      "wide": false
     }
    ]
   },
   {
    "title": "Konfirmasi Pengajuan",
    "blocks": [
     {
      "t": "p",
      "x": "Pada dialog Konfirmasi Request Perubahan, klik Submit untuk mengonfirmasi bahwa request perubahan pengurus telah selesai."
     },
     {
      "t": "img",
      "f": "i094.webp",
      "w": 720,
      "h": 359,
      "wide": false
     }
    ]
   },
   {
    "title": "Pantau Status Pengajuan",
    "blocks": [
     {
      "t": "p",
      "x": "Pengajuan berstatus Request Perubahan Selesai dan menunggu pengecekan oleh dinas terkait. Halaman detail menampilkan status pengajuan, Kode dan Tanggal Pengajuan, serta History yang mencatat riwayat proses pengajuan."
     },
     {
      "t": "img",
      "f": "i096.webp",
      "w": 720,
      "h": 324,
      "wide": false
     },
     {
      "t": "note",
      "x": "Catatan : Pengajuan perubahan pengurus tidak langsung berlaku setelah dikirim. Koperasi harus"
     },
     {
      "t": "p",
      "x": "menunggu persetujuan dari dinas terkait yang membidangi koperasi. Pantau status pengajuan melalui halaman detail hingga status berubah menjadi Disetujui."
     },
     {
      "t": "p",
      "x": "Keterangan bagian halaman detail:"
     },
     {
      "t": "img",
      "f": "i095.webp",
      "w": 1000,
      "h": 253,
      "wide": true
     },
     {
      "t": "img",
      "f": "i097.webp",
      "w": 1000,
      "h": 961,
      "wide": true
     }
    ]
   }
  ]
 },
 {
  "n": "14",
  "title": "Request Penambahan/Perubahan Indikator Kelembagaan",
  "desc": "Ajukan data anggota, karyawan, manajer, dan pengurus per tahun.",
  "cat": 3,
  "intro": [
   {
    "t": "p",
    "x": "Menu Indikator Kelembagaan digunakan untuk mengajukan penambahan atau perubahan data Anggota, Karyawan, Manajer, dan Pengurus koperasi. Pada panduan ini, penanda hijau menunjukkan alur Tambah, penanda kuning menunjukkan alur Ubah, dan penanda merah menunjukkan langkah umum."
   }
  ],
  "steps": [
   {
    "title": "Akses Menu Indikator Kelembagaan",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Dashboard, klik menu Indikator Kelembagaan untuk memulai pengajuan."
     },
     {
      "t": "img",
      "f": "i098.webp",
      "w": 720,
      "h": 321,
      "wide": false
     }
    ]
   },
   {
    "title": "Lanjutkan ke Formulir Indikator Kelembagaan",
    "blocks": [
     {
      "t": "p",
      "x": "Klik tombol Selanjutnya untuk melanjutkan ke halaman Request Indikator Kelembagaan."
     },
     {
      "t": "img",
      "f": "i099.webp",
      "w": 720,
      "h": 351,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Jenis Pengajuan",
    "blocks": [
     {
      "t": "p",
      "x": "Pilih Tambah (hijau) untuk membuat data baru atau Ubah (kuning) untuk memperbarui data yang sudah ada."
     },
     {
      "t": "img",
      "f": "i100.webp",
      "w": 720,
      "h": 359,
      "wide": false
     }
    ]
   },
   {
    "title": "Tambah Indikator Kelembagaan",
    "blocks": [
     {
      "t": "p",
      "x": "Lengkapi formulir Tambah Indikator Kelembagaan berikut untuk menambahkan data indikator kelembagaan koperasi pada tahun tertentu."
     },
     {
      "t": "sub",
      "x": "Isi dan Kirim Data Indikator Kelembagaan"
     },
     {
      "t": "p",
      "x": "Isi Tahun, Anggota Pria, Anggota Wanita, Karyawan Pria, Karyawan Wanita, Manajer Pria, dan Manajer Wanita, lalu klik Submit."
     },
     {
      "t": "img",
      "f": "i101.webp",
      "w": 720,
      "h": 356,
      "wide": false
     },
     {
      "t": "sub",
      "x": "Data Berhasil Ditambahkan"
     },
     {
      "t": "p",
      "x": "Setelah disimpan, sistem menampilkan notifikasi Indikator Kelembagaan berhasil ditambah, dan data baru tampil pada daftar dengan keterangan Request Tambah."
     },
     {
      "t": "img",
      "f": "i102.webp",
      "w": 720,
      "h": 360,
      "wide": false
     }
    ]
   },
   {
    "title": "Ubah Indikator Kelembagaan",
    "blocks": [
     {
      "t": "p",
      "x": "Lengkapi formulir Ubah Indikator Kelembagaan berikut untuk memperbarui data indikator kelembagaan koperasi yang sudah ada."
     },
     {
      "t": "sub",
      "x": "Pilih Ubah"
     },
     {
      "t": "p",
      "x": "Pada dialog Request Indikator Kelembagaan, klik pilihan Ubah."
     },
     {
      "t": "img",
      "f": "i103.webp",
      "w": 720,
      "h": 358,
      "wide": false
     },
     {
      "t": "sub",
      "x": "Isi dan Kirim Perubahan Data Indikator Kelembagaan"
     },
     {
      "t": "p",
      "x": "Perbarui Tahun, Anggota Pria, Anggota Wanita, Karyawan Pria, Karyawan Wanita, Manajer Pria, dan Manajer Wanita, lalu klik Submit. Data perubahan akan tampil pada daftar dengan keterangan."
     }
    ]
   },
   {
    "title": "Lanjutkan ke Tahap Berikutnya",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah data tersimpan, klik tombol Selanjutnya untuk melanjutkan ke tahap Lampiran Pendukung."
     },
     {
      "t": "img",
      "f": "i104.webp",
      "w": 720,
      "h": 362,
      "wide": false
     }
    ]
   },
   {
    "title": "Unggah Lampiran dan Selesaikan",
    "blocks": [
     {
      "t": "p",
      "x": "Unggah Lampiran Pendukung (tipe dokumen PDF, PNG, JPG, atau JPEG, maksimal 200 MB), lalu klik tombol Selesai."
     },
     {
      "t": "img",
      "f": "i105.webp",
      "w": 720,
      "h": 318,
      "wide": false
     }
    ]
   },
   {
    "title": "Konfirmasi Pengajuan",
    "blocks": [
     {
      "t": "p",
      "x": "Pada dialog konfirmasi, klik tombol Submit untuk mengirimkan request perubahan."
     },
     {
      "t": "img",
      "f": "i106.webp",
      "w": 720,
      "h": 361,
      "wide": false
     }
    ]
   },
   {
    "title": "Pengajuan Berhasil Dikirim",
    "blocks": [
     {
      "t": "p",
      "x": "Request perubahan telah selesai dikirim dan sedang dalam tahap pengecekan oleh dinas yang membidangi koperasi Anda. Klik tombol Lihat Detail untuk memantau status pengajuan."
     },
     {
      "t": "img",
      "f": "i108.webp",
      "w": 720,
      "h": 360,
      "wide": false
     }
    ]
   },
   {
    "title": "Pantau Status Pengajuan",
    "blocks": [
     {
      "t": "p",
      "x": "Halaman detail menampilkan status pengajuan, yaitu Menunggu Konfirmasi selama pengajuan masih diproses, beserta Kode Pengajuan, Item Pengajuan, dan Tanggal Pengajuan. Bagian History mencatat riwayat proses pengajuan."
     },
     {
      "t": "img",
      "f": "i107.webp",
      "w": 720,
      "h": 347,
      "wide": false
     },
     {
      "t": "note",
      "x": "Catatan : Pengajuan indikator kelembagaan tidak langsung berlaku setelah dikirim. Koperasi harus menunggu persetujuan dari dinas terkait yang membidangi koperasi. Pantau status pengajuan melalui halaman detail hingga status berubah menjadi Disetujui."
     },
     {
      "t": "p",
      "x": "Keterangan bagian halaman detail:"
     },
     {
      "t": "img",
      "f": "i109.webp",
      "w": 1000,
      "h": 237,
      "wide": true
     },
     {
      "t": "img",
      "f": "i110.webp",
      "w": 1000,
      "h": 961,
      "wide": true
     }
    ]
   }
  ]
 },
 {
  "n": "15",
  "title": "Request Perubahan Laporan Keuangan",
  "desc": "Laporkan keuangan koperasi lengkap dengan lampiran dan pernyataan.",
  "cat": 3,
  "intro": [
   {
    "t": "p",
    "x": "Berikut langkah-langkah untuk melakukan pelaporan keuangan koperasi berdasarkan indikator usaha pada ODS Mandiri."
   }
  ],
  "steps": [
   {
    "title": "Akses Halaman Pelaporan Keuangan",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Dashboard, klik menu Laporan Keuangan untuk memulai pengajuan laporan."
     },
     {
      "t": "img",
      "f": "i111.webp",
      "w": 720,
      "h": 364,
      "wide": false
     }
    ]
   },
   {
    "title": "Lanjutkan ke Formulir Laporan Keuangan",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah menu Laporan Keuangan terpilih, klik tombol Selanjutnya untuk melanjutkan ke formulir Request Perubahan."
     },
     {
      "t": "img",
      "f": "i112.webp",
      "w": 720,
      "h": 345,
      "wide": false
     }
    ]
   },
   {
    "title": "Tinjau Informasi Identitas Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Periksa kembali Informasi Identitas koperasi yang tampil secara otomatis, lalu pilih Jenis Pelaporan (Lapor/Perbaikan) dan Jenis Koperasi yang Dilaporkan."
     },
     {
      "t": "img",
      "f": "i113.webp",
      "w": 720,
      "h": 692,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Jenis Laporan, Tahun Laporan, dan Jenis SAK",
    "blocks": [
     {
      "t": "p",
      "x": "Pilih Jenis Laporan dan Tahun Laporan yang sesuai, kemudian pilih Jenis SAK yang digunakan koperasi"
     },
     {
      "t": "img",
      "f": "i114.webp",
      "w": 720,
      "h": 617,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Jenis SAK dan Status Audit",
    "blocks": [
     {
      "t": "p",
      "x": "Pilih Jenis SAK yang digunakan, lalu tentukan apakah Laporan Keuangan Diaudit atau tidak."
     },
     {
      "t": "img",
      "f": "i115.webp",
      "w": 720,
      "h": 347,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Data Indikator Usaha",
    "blocks": [
     {
      "t": "p",
      "x": "Isi nilai Indikator Usaha berupa Ekuitas, Liabilitas, Aset, Volume Usaha, dan Sisa Hasil Usaha sesuai tahun buku pelaporan."
     },
     {
      "t": "img",
      "f": "i116.webp",
      "w": 720,
      "h": 323,
      "wide": false
     }
    ]
   },
   {
    "title": "Upload Lampiran Laporan Keuangan",
    "blocks": [
     {
      "t": "p",
      "x": "Unggah seluruh lampiran laporan keuangan, yaitu Laporan Posisi Keuangan, Laporan Perhitungan Hasil Usaha, Laporan Arus Kas, Laporan Perubahan Ekuitas, Catatan atas Laporan Keuangan, dan Laporan Rapat Anggota Tahunan."
     },
     {
      "t": "img",
      "f": "i117.webp",
      "w": 720,
      "h": 295,
      "wide": false
     },
     {
      "t": "img",
      "f": "i120.webp",
      "w": 720,
      "h": 301,
      "wide": false
     }
    ]
   },
   {
    "title": "Upload Pernyataan Pertanggungjawaban",
    "blocks": [
     {
      "t": "p",
      "x": "Unggah dokumen Pernyataan Pertanggungjawaban, lalu klik tombol Selanjutnya."
     },
     {
      "t": "img",
      "f": "i118.webp",
      "w": 720,
      "h": 131,
      "wide": false
     }
    ]
   },
   {
    "title": "Upload Lampiran Pendukung",
    "blocks": [
     {
      "t": "p",
      "x": "Unggah Lampiran Pendukung tambahan jika diperlukan, kemudian klik tombol Selesai."
     },
     {
      "t": "img",
      "f": "i119.webp",
      "w": 720,
      "h": 330,
      "wide": false
     }
    ]
   },
   {
    "title": "Konfirmasi Pengajuan",
    "blocks": [
     {
      "t": "p",
      "x": "Klik tombol Submit pada dialog konfirmasi untuk menyelesaikan pengajuan Request Perubahan."
     },
     {
      "t": "img",
      "f": "i121.webp",
      "w": 720,
      "h": 344,
      "wide": false
     }
    ]
   },
   {
    "title": "Pengajuan Selesai",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah berhasil, sistem menampilkan status Request Perubahan Selesai yang menandakan laporan sedang dalam tahap pengecekan oleh dinas terkait."
     },
     {
      "t": "img",
      "f": "i122.webp",
      "w": 720,
      "h": 343,
      "wide": false
     },
     {
      "t": "p",
      "x": "Keterangan bagian halaman detail:"
     },
     {
      "t": "img",
      "f": "i123.webp",
      "w": 1000,
      "h": 237,
      "wide": true
     },
     {
      "t": "img",
      "f": "i124.webp",
      "w": 1000,
      "h": 673,
      "wide": true
     },
     {
      "t": "p",
      "x": "Status pengajuan diperbarui secara otomatis setiap kali pengajuan berpindah tahap. Pastikan Anda memeriksa halaman detail pengajuan secara berkala dan mencatat Kode Pengajuan sebagai referensi. Jika pengajuan tertahan cukup lama pada status Menunggu Konfirmasi atau Diproses, silakan hubungi Helpdesk ODS melalui menu Butuh Bantuan? dengan menyertakan Kode Pengajuan tersebut."
     }
    ]
   }
  ]
 },
 {
  "n": "16",
  "title": "Request Rapat Anggota Tahunan (RAT)",
  "desc": "Laporkan pelaksanaan Rapat Anggota Tahunan beserta lampirannya.",
  "cat": 3,
  "intro": [
   {
    "t": "p",
    "x": "Berikut langkah-langkah untuk melaporkan pelaksanaan Rapat Anggota Tahunan (RAT) koperasi pada ODS Mandiri."
   }
  ],
  "steps": [
   {
    "title": "Akses Menu Rapat Anggota Tahunan",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Dashboard, pilih menu Rapat Anggota Tahunan, lalu klik tombol Selanjutnya."
     },
     {
      "t": "img",
      "f": "i125.webp",
      "w": 720,
      "h": 356,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Jenis Request",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Request Perubahan, klik tombol + Request, lalu pilih Tambah (kotak hijau) untuk menambahkan data RAT baru. Pilih Ubah (kotak kuning) untuk mengubah data atau Hapus untuk menghapus data RAT yang sudah ada."
     },
     {
      "t": "img",
      "f": "i126.webp",
      "w": 720,
      "h": 318,
      "wide": false
     },
     {
      "t": "note",
      "x": "Catatan : Request tambah ditandai dengan warna hijau, request ubah ditandai dengan warna kuning"
     }
    ]
   },
   {
    "title": "Isi Data Rapat Anggota Tahunan",
    "blocks": [
     {
      "t": "p",
      "x": "Lengkapi data Tanggal Rapat, Nomor Akta, Tanggal Akta, Nama Notaris, Alamat Rapat, dan Jumlah Peserta, lalu klik tombol Submit."
     },
     {
      "t": "img",
      "f": "i127.webp",
      "w": 720,
      "h": 365,
      "wide": false
     }
    ]
   },
   {
    "title": "Periksa Data dan Lanjutkan",
    "blocks": [
     {
      "t": "p",
      "x": "Data RAT yang berhasil ditambahkan akan tampil pada tabel Rapat Anggota Tahunan. Klik tombol Selanjutnya untuk melanjutkan."
     },
     {
      "t": "img",
      "f": "i128.webp",
      "w": 720,
      "h": 362,
      "wide": false
     }
    ]
   },
   {
    "title": "Upload Lampiran Pendukung",
    "blocks": [
     {
      "t": "p",
      "x": "Unggah Lampiran Pendukung, kemudian klik tombol Selesai."
     },
     {
      "t": "img",
      "f": "i130.webp",
      "w": 720,
      "h": 337,
      "wide": false
     }
    ]
   },
   {
    "title": "Konfirmasi Pengajuan",
    "blocks": [
     {
      "t": "p",
      "x": "Klik tombol Submit pada dialog konfirmasi untuk menyelesaikan pengajuan Request Perubahan."
     },
     {
      "t": "img",
      "f": "i129.webp",
      "w": 720,
      "h": 362,
      "wide": false
     }
    ]
   },
   {
    "title": "Pengajuan Selesai",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah berhasil, sistem menampilkan status Request Perubahan Selesai yang menandakan pengajuan sedang dalam tahap pengecekan oleh dinas terkait."
     },
     {
      "t": "img",
      "f": "i133.webp",
      "w": 720,
      "h": 362,
      "wide": false
     },
     {
      "t": "p",
      "x": "Keterangan bagian halaman detail:"
     },
     {
      "t": "img",
      "f": "i131.webp",
      "w": 1000,
      "h": 237,
      "wide": true
     },
     {
      "t": "img",
      "f": "i132.webp",
      "w": 1000,
      "h": 242,
      "wide": true
     },
     {
      "t": "img",
      "f": "i134.webp",
      "w": 1000,
      "h": 478,
      "wide": true
     },
     {
      "t": "p",
      "x": "Status pengajuan diperbarui secara otomatis setiap kali pengajuan berpindah tahap. Pastikan Anda memeriksa halaman detail pengajuan secara berkala dan mencatat Kode Pengajuan sebagai referensi. Jika pengajuan tertahan cukup lama pada status Menunggu Konfirmasi atau Diproses, silakan hubungi Helpdesk ODS melalui menu Butuh Bantuan? dengan menyertakan Kode Pengajuan."
     }
    ]
   }
  ]
 },
 {
  "n": "17",
  "title": "Alur Pelaporan Rapat Anggota Tahunan",
  "desc": "Pahami tahapan wajib pelaporan RAT dan cara memeriksa statusnya.",
  "cat": 3,
  "intro": [
   {
    "t": "p",
    "x": "Pelaporan Rapat Anggota Tahunan (RAT) dilakukan melalui beberapa tahapan pada ODS Mandiri, yaitu input Indikator Kelembagaan, input Laporan Keuangan, dan input Rapat Anggota Tahunan. Ketiga tahapan tersebut merupakan syarat pelaporan RAT yang harus dilengkapi oleh koperasi. Alur pelaporan RAT dapat dilihat pada gambar 1.1 berikut."
   },
   {
    "t": "img",
    "f": "i135.webp",
    "w": 717,
    "h": 424,
    "wide": false
   },
   {
    "t": "note",
    "x": "Gambar 1.1 Alur Pelaporan RAT"
   },
   {
    "t": "p",
    "x": "Gambar di atas menunjukkan tahapan pelaporan RAT yang harus dilakukan secara berurutan. Setiap tahapan perlu dilengkapi sesuai dengan data dan dokumen yang dimiliki koperasi sebelum melanjutkan ke tahap berikutnya. Tahapan pelaporan RAT meliputi: 1. Input Indikator Kelembagaan : yaitu melengkapi data indikator kelembagaan koperasi berupa jumlah Anggota, Karyawan, Manajer, dan Pengurus koperasi. 2. Input Laporan Keuangan : yaitu melaporkan keuangan koperasi berdasarkan Laporan Triwulan, Laporan Tahunan, atau Laporan Sewaktu-waktu. 3. Input Rapat Anggota Tahunan : yaitu mengisi data pelaksanaan RAT berupa Tanggal Rapat, Nomor Akta, Tanggal Akta, Nama Notaris, Alamat Rapat, dan Jumlah Peserta."
   },
   {
    "t": "note",
    "x": "Catatan : Ketiga tahapan wajib dilengkapi secara berurutan. Pelaporan RAT pada suatu tahun buku belum dianggap selesai apabila masih terdapat tahapan yang belum dilaporkan."
   }
  ],
  "steps": [
   {
    "title": "Buka Menu Navigasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Dashboard, klik ikon menu di pojok kiri atas untuk membuka sidebar navigasi."
     },
     {
      "t": "img",
      "f": "i136.webp",
      "w": 720,
      "h": 374,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Rapat Anggota Tahunan",
    "blocks": [
     {
      "t": "p",
      "x": "Pada sidebar yang terbuka, klik menu Rapat Anggota Tahunan untuk masuk ke halaman pelaporan RAT."
     },
     {
      "t": "img",
      "f": "i137.webp",
      "w": 720,
      "h": 371,
      "wide": false
     }
    ]
   },
   {
    "title": "Lengkapi Syarat Pelaporan RAT",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Rapat Anggota Tahunan, sistem menampilkan Syarat Pelaporan Rapat Anggota Tahunan beserta tautan panduan lengkap pelaporan RAT. Lengkapi ketiga syarat tersebut secara berurutan, dimulai dari Indikator Kelembagaan, kemudian Laporan Keuangan, dan terakhir Rapat Anggota Tahunan, dengan memilih kartu menu yang sesuai."
     },
     {
      "t": "img",
      "f": "i138.webp",
      "w": 720,
      "h": 392,
      "wide": false
     }
    ]
   },
   {
    "title": "Periksa Status Pelaporan",
    "blocks": [
     {
      "t": "p",
      "x": "Status pelaporan setiap tahun buku dapat dilihat pada tabel riwayat pelaporan. Apabila seluruh tahapan sudah terisi, status pada kolom Rapat Anggota Tahun akan berubah menjadi Sudah Lapor. Status Belum Lapor menandakan data pelaporan pada tahun buku tersebut belum diisi, sedangkan status Belum Lengkap menandakan masih terdapat tahapan yang belum dilaporkan."
     },
     {
      "t": "img",
      "f": "i139.webp",
      "w": 720,
      "h": 222,
      "wide": false
     }
    ]
   }
  ]
 },
 {
  "n": "18",
  "title": "Pengajuan Cetak Sertifikat",
  "desc": "Ajukan usulan cetak sertifikat setelah data koperasi lengkap.",
  "cat": 3,
  "intro": [
   {
    "t": "p",
    "x": "Berikut langkah-langkah untuk mengajukan cetak sertifikat koperasi pada ODS Mandiri."
   }
  ],
  "steps": [
   {
    "title": "Buka Menu Navigasi",
    "blocks": [
     {
      "t": "p",
      "x": "Klik ikon menu di pojok kiri atas layar Dashboard untuk membuka sidebar navigasi."
     },
     {
      "t": "img",
      "f": "i140.webp",
      "w": 720,
      "h": 383,
      "wide": false
     },
     {
      "t": "note",
      "x": "Catatan : Pastikan semua data identitas koperasi (Nama Koperasi, Nomor Badan Hukum, Alamat,"
     },
     {
      "t": "p",
      "x": "dan Nomor Telepon) sudah lengkap dan benar sebelum mengajukan cetak sertifikat."
     }
    ]
   },
   {
    "title": "Pilih Menu Usulan Cetak Sertifikat",
    "blocks": [
     {
      "t": "p",
      "x": "Pada sidebar yang terbuka, klik menu Usulan Cetak Sertifikat untuk masuk ke halaman pengajuan cetak sertifikat."
     },
     {
      "t": "img",
      "f": "i141.webp",
      "w": 720,
      "h": 364,
      "wide": false
     }
    ]
   },
   {
    "title": "Ajukan Usulan Cetak Sertifikat",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Usulan Cetak Sertifikat, baca terlebih dahulu informasi pada bagian Disclaimer, kemudian klik tombol Usulkan untuk memulai proses pengajuan cetak sertifikat."
     },
     {
      "t": "img",
      "f": "i142.webp",
      "w": 720,
      "h": 377,
      "wide": false
     }
    ]
   },
   {
    "title": "Periksa Kelengkapan Data Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Sistem akan menampilkan halaman Cek Kelengkapan Data yang berisi data koperasi, mulai dari identitas koperasi, data pengurus, indikator kelembagaan, hingga indikator usaha. Data yang sudah lengkap akan ditandai dengan centang hijau. Gulir ke bawah untuk memeriksa seluruh data tersebut."
     },
     {
      "t": "img",
      "f": "i144.webp",
      "w": 700,
      "h": 633,
      "wide": false
     },
     {
      "t": "img",
      "f": "i143.webp",
      "w": 707,
      "h": 642,
      "wide": false
     },
     {
      "t": "img",
      "f": "i145.webp",
      "w": 708,
      "h": 701,
      "wide": false
     },
     {
      "t": "img",
      "f": "i146.webp",
      "w": 720,
      "h": 634,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Keterangan dan Submit Usulan",
    "blocks": [
     {
      "t": "p",
      "x": "Pada tahap Usulan Cetak Sertifikat, isi kolom Keterangan apabila diperlukan, kemudian klik tombol Submit untuk mengirimkan usulan cetak sertifikat."
     },
     {
      "t": "img",
      "f": "i147.webp",
      "w": 720,
      "h": 416,
      "wide": false
     }
    ]
   },
   {
    "title": "Usulan Cetak Sertifikat Selesai",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah usulan berhasil dikirim, sistem akan menampilkan halaman Usulan Cetak Sertifikat Selesai yang menandakan usulan sedang dalam tahap pengecekan oleh dinas yang membidangi koperasi. Klik tombol Oke, Mengerti untuk menutup halaman tersebut."
     },
     {
      "t": "img",
      "f": "i148.webp",
      "w": 720,
      "h": 511,
      "wide": false
     },
     {
      "t": "p",
      "x": "Keterangan bagian halaman detail:"
     },
     {
      "t": "img",
      "f": "i149.webp",
      "w": 1000,
      "h": 237,
      "wide": true
     },
     {
      "t": "img",
      "f": "i150.webp",
      "w": 1000,
      "h": 673,
      "wide": true
     },
     {
      "t": "p",
      "x": "Status pengajuan diperbarui secara otomatis setiap kali pengajuan berpindah tahap. Pastikan Anda memeriksa halaman detail pengajuan secara berkala dan mencatat Kode Pengajuan sebagai referensi. Jika pengajuan tertahan cukup lama pada status Menunggu Konfirmasi atau Diproses, silakan hubungi Helpdesk ODS melalui menu Butuh Bantuan? dengan menyertakan Kode Pengajuan."
     }
    ]
   }
  ]
 },
 {
  "n": "19",
  "title": "Pengajuan Cabang Koperasi",
  "desc": "Ajukan cabang lewat import file Excel atau draft manual.",
  "cat": 3,
  "intro": [
   {
    "t": "p",
    "x": "Berikut langkah-langkah untuk mengajukan pembukaan cabang koperasi pada ODS Mandiri."
   }
  ],
  "steps": [
   {
    "title": "Buka Menu Navigasi",
    "blocks": [
     {
      "t": "p",
      "x": "Klik ikon menu di pojok kiri atas layar Dashboard untuk membuka sidebar navigasi."
     },
     {
      "t": "img",
      "f": "i151.webp",
      "w": 720,
      "h": 383,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Tiket Pengajuan Cabang",
    "blocks": [
     {
      "t": "p",
      "x": "Pada sidebar yang terbuka, klik menu Tiket Pengajuan Cabang untuk masuk ke halaman pengajuan cabang koperasi."
     },
     {
      "t": "img",
      "f": "i152.webp",
      "w": 720,
      "h": 402,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Metode Pengajuan Cabang",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Tambah Cabang, tersedia dua metode pengajuan. Pengajuan Manual digunakan untuk membuat satu tiket draft untuk satu cabang, sedangkan Import Excel digunakan untuk mengajukan banyak cabang sekaligus, di mana setiap baris pada file akan dibuat menjadi tiket pengajuan dan langsung diajukan untuk diverifikasi."
     },
     {
      "t": "img",
      "f": "i153.webp",
      "w": 720,
      "h": 383,
      "wide": false
     }
    ]
   },
   {
    "title": "Unduh Template Excel",
    "blocks": [
     {
      "t": "p",
      "x": "Apabila menggunakan metode Import Excel, klik tombol Template Excel untuk mengunduh format file yang akan diisi dengan data cabang koperasi."
     },
     {
      "t": "img",
      "f": "i154.webp",
      "w": 720,
      "h": 389,
      "wide": false
     }
    ]
   },
   {
    "title": "Import File Excel",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah template diisi dengan data cabang, klik tombol Import Excel lalu pilih file yang telah dilengkapi."
     },
     {
      "t": "img",
      "f": "i155.webp",
      "w": 720,
      "h": 363,
      "wide": false
     }
    ]
   },
   {
    "title": "Kirim Data Cabang",
    "blocks": [
     {
      "t": "p",
      "x": "File yang dipilih akan tampil di bawah bagian Import Excel. Pastikan file sudah sesuai, kemudian klik tombol Import Sekarang untuk mengirimkan data cabang. Klik Batal apabila ingin mengganti file."
     },
     {
      "t": "img",
      "f": "i156.webp",
      "w": 720,
      "h": 409,
      "wide": false
     }
    ]
   },
   {
    "title": "Buat Draft Pengajuan Manual",
    "blocks": [
     {
      "t": "p",
      "x": "Apabila menggunakan metode Pengajuan Manual, klik tombol Buat Draft Pengajuan pada bagian Pengajuan Manual."
     },
     {
      "t": "img",
      "f": "i159.webp",
      "w": 720,
      "h": 369,
      "wide": false
     }
    ]
   },
   {
    "title": "Draft Pengajuan Berhasil Dibuat",
    "blocks": [
     {
      "t": "p",
      "x": "Sistem akan menampilkan notifikasi bahwa draft pengajuan cabang berhasil dibuat. Status pengajuan menjadi Draft, yang menandakan pengajuan masih dalam tahap penyusunan dan belum diajukan. Lengkapi data cabang pada draft tersebut sebelum diajukan untuk diverifikasi."
     },
     {
      "t": "img",
      "f": "i160.webp",
      "w": 535,
      "h": 110,
      "wide": false
     },
     {
      "t": "p",
      "x": "Keterangan bagian halaman detail:"
     },
     {
      "t": "img",
      "f": "i157.webp",
      "w": 1000,
      "h": 237,
      "wide": true
     },
     {
      "t": "img",
      "f": "i158.webp",
      "w": 1000,
      "h": 64,
      "wide": true
     },
     {
      "t": "img",
      "f": "i161.webp",
      "w": 1000,
      "h": 1033,
      "wide": true
     }
    ]
   }
  ]
 },
 {
  "n": "20",
  "title": "Usaha Koperasi",
  "desc": "Kelola data usaha, produk, dan sertifikat koperasi.",
  "cat": 4,
  "intro": [
   {
    "t": "p",
    "x": "Menu Usaha Koperasi digunakan untuk mengelola data usaha, produk, dan sertifikat yang dimiliki koperasi. Menu ini dapat diakses melalui halaman Profil Koperasi. Bagian ini terdiri dari: A. Tambah Usaha Koperasi B. Tambah Produk Koperasi C. Tambah Sertifikat Koperasi"
   }
  ],
  "steps": [
   {
    "title": "",
    "blocks": [
     {
      "t": "p",
      "x": "Bagian ini menjelaskan langkah menambahkan data usaha yang dijalankan oleh koperasi."
     }
    ],
    "group": "Tambah Usaha Koperasi"
   },
   {
    "title": "Buka Menu Profil Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Klik ikon menu di pojok kiri atas halaman Dashboard, lalu pilih menu Profil Koperasi"
     },
     {
      "t": "img",
      "f": "i162.webp",
      "w": 720,
      "h": 326,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Usaha Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Profil Koperasi, klik menu Usaha Koperasi pada daftar menu di sebelah kiri."
     },
     {
      "t": "img",
      "f": "i163.webp",
      "w": 720,
      "h": 317,
      "wide": false
     }
    ]
   },
   {
    "title": "Klik Tombol Tambah Usaha",
    "blocks": [
     {
      "t": "p",
      "x": "Pada bagian Usaha Koperasi, klik tombol + Tambah untuk menambahkan data usaha baru."
     },
     {
      "t": "img",
      "f": "i164.webp",
      "w": 720,
      "h": 331,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Informasi Usaha",
    "blocks": [
     {
      "t": "p",
      "x": "Pilih Layanan usaha (Produsen, Pengolahan, Logistik, Jasa, atau Pemasaran), kemudian isi Nama Usaha dan pilih Sektor Usaha yang sesuai."
     },
     {
      "t": "img",
      "f": "i165.webp",
      "w": 720,
      "h": 405,
      "wide": false
     }
    ]
   },
   {
    "title": "Tentukan Status dan Peran Usaha",
    "blocks": [
     {
      "t": "p",
      "x": "Pilih Status Usaha (Aktif atau Tidak Aktif) dan Peran Usaha, yaitu Utama untuk usaha inti koperasi, Pendukung untuk usaha yang melengkapi usaha utama, atau Tambahan untuk usaha di luar usaha utama."
     },
     {
      "t": "img",
      "f": "i166.webp",
      "w": 720,
      "h": 230,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Alamat Usaha",
    "blocks": [
     {
      "t": "p",
      "x": "Lengkapi alamat usaha berupa Provinsi, Kota/Kabupaten, Kecamatan, Kelurahan, dan Alamat Lengkap. Isi Titik Koordinat secara manual atau klik Gunakan Lokasi Saat Ini, lalu pastikan titik lokasi pada peta sudah sesuai. Klik Tambah Alamat apabila usaha memiliki lebih dari satu lokasi."
     },
     {
      "t": "img",
      "f": "i167.webp",
      "w": 720,
      "h": 299,
      "wide": false
     },
     {
      "t": "img",
      "f": "i168.webp",
      "w": 720,
      "h": 369,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Detail Produksi",
    "blocks": [
     {
      "t": "p",
      "x": "Pilih Satuan Volume dan Periode, kemudian isi Volume Produksi sesuai satuan dan periode yang dipilih."
     },
     {
      "t": "img",
      "f": "i169.webp",
      "w": 720,
      "h": 150,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Omzet Tahunan dan Lahan Usaha",
    "blocks": [
     {
      "t": "p",
      "x": "Isi Omzet Tahunan beserta tahunnya dan klik Tambah Omzet Tahunan apabila ingin menambahkan omzet tahun lainnya. Isi Deskripsi apabila diperlukan, lalu tentukan apakah usaha termasuk pertambangan atau perkebunan.."
     },
     {
      "t": "img",
      "f": "i170.webp",
      "w": 720,
      "h": 321,
      "wide": false
     },
     {
      "t": "img",
      "f": "i171.webp",
      "w": 720,
      "h": 253,
      "wide": false
     }
    ]
   },
   {
    "title": "Unggah Foto dan Simpan Usaha",
    "blocks": [
     {
      "t": "p",
      "x": "Klik Unggah Foto untuk mengunggah foto kegiatan usaha, centang pernyataan kebenaran data, lalu klik tombol Simpan Usaha."
     },
     {
      "t": "img",
      "f": "i172.webp",
      "w": 720,
      "h": 272,
      "wide": false
     }
    ]
   },
   {
    "title": "Usaha Koperasi Berhasil Disimpan",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah klik Simpan Usaha, data usaha yang ditambahkan akan tampil pada tabel Usaha Koperasi. Usaha yang baru disimpan berstatus Belum Terverifikasi hingga diverifikasi oleh pihak terkait."
     },
     {
      "t": "img",
      "f": "i173.webp",
      "w": 720,
      "h": 292,
      "wide": false
     }
    ]
   },
   {
    "title": "",
    "blocks": [
     {
      "t": "p",
      "x": "Bagian ini menjelaskan langkah menambahkan data produk yang dihasilkan dari usaha koperasi."
     }
    ],
    "group": "Tambah Produk Koperasi"
   },
   {
    "title": "Klik Tombol Tambah Produk",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Usaha Koperasi, gulir ke bagian Produk Koperasi, lalu klik tombol + Tambah."
     },
     {
      "t": "img",
      "f": "i174.webp",
      "w": 720,
      "h": 343,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Informasi Utama Produk",
    "blocks": [
     {
      "t": "p",
      "x": "Pilih Usaha Koperasi yang menghasilkan produk tersebut, isi nama Produk, lalu klik Tambah Merk apabila produk memiliki merk atau branding."
     },
     {
      "t": "img",
      "f": "i175.webp",
      "w": 720,
      "h": 285,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Merk, Kapasitas, dan Deskripsi Produk",
    "blocks": [
     {
      "t": "p",
      "x": "Isi Merk/Branding produk, kemudian lengkapi Satuan Pengukuran dan Volume Produksi (Per Tahun). Isi Deskripsi produk apabila diperlukan."
     },
     {
      "t": "img",
      "f": "i178.webp",
      "w": 720,
      "h": 356,
      "wide": false
     }
    ]
   },
   {
    "title": "Simpan Produk",
    "blocks": [
     {
      "t": "p",
      "x": "Centang pernyataan kebenaran data, lalu klik tombol Simpan Produk."
     },
     {
      "t": "img",
      "f": "i176.webp",
      "w": 720,
      "h": 115,
      "wide": false
     }
    ]
   },
   {
    "title": "Produk Koperasi Berhasil Disimpan",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah klik Simpan Produk, data produk yang ditambahkan akan tampil pada tabel Produk Koperasi beserta merek, nama usaha, dan volume produksinya."
     },
     {
      "t": "img",
      "f": "i177.webp",
      "w": 720,
      "h": 190,
      "wide": false
     },
     {
      "t": "note",
      "x": "Catatan : Produk harus terhubung dengan usaha koperasi, sehingga pastikan data usaha koperasi sudah ditambahkan sebelum menambahkan produk."
     }
    ]
   },
   {
    "title": "",
    "blocks": [
     {
      "t": "p",
      "x": "Bagian ini menjelaskan langkah menambahkan data sertifikat yang dimiliki koperasi, usaha, maupun produk koperasi."
     }
    ],
    "group": "Tambah Sertifikat Koperasi"
   },
   {
    "title": "Klik Tombol Tambah Sertifikat",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Usaha Koperasi, gulir ke bagian Sertifikat Koperasi, lalu klik tombol + Tambah."
     },
     {
      "t": "img",
      "f": "i179.webp",
      "w": 720,
      "h": 310,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Peruntukan Sertifikat",
    "blocks": [
     {
      "t": "p",
      "x": "Tentukan peruntukan sertifikat, yaitu Sertifikat Koperasi, Sertifikat Usaha, atau Sertifikat Produk."
     },
     {
      "t": "img",
      "f": "i180.webp",
      "w": 720,
      "h": 269,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Data Sertifikat",
    "blocks": [
     {
      "t": "p",
      "x": "Pilih Jenis Sertifikat, isi Nama Sertifikat dan Nomor Sertifikat, serta isi Masa Berlaku apabila ada."
     },
     {
      "t": "img",
      "f": "i181.webp",
      "w": 720,
      "h": 263,
      "wide": false
     }
    ]
   },
   {
    "title": "Upload Dokumen dan Simpan Sertifikat",
    "blocks": [
     {
      "t": "p",
      "x": "Unggah dokumen sertifikat, klik Tambah Sertifikat Lainnya apabila ingin menambahkan sertifikat lain, centang pernyataan kebenaran data, lalu klik tombol Simpan Sertifikat."
     },
     {
      "t": "img",
      "f": "i182.webp",
      "w": 720,
      "h": 244,
      "wide": false
     }
    ]
   },
   {
    "title": "Sertifikat Koperasi Berhasil Disimpan",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah klik Simpan Sertifikat, data sertifikat yang ditambahkan akan tampil pada tabel Sertifikat Koperasi beserta nomor, jenis, masa berlaku, dan objek sertifikatnya."
     },
     {
      "t": "img",
      "f": "i183.webp",
      "w": 720,
      "h": 260,
      "wide": false
     }
    ]
   }
  ]
 },
 {
  "n": "21",
  "title": "Tag Koperasi",
  "desc": "Tandai koperasi dengan tag yang sesuai.",
  "cat": 4,
  "intro": [
   {
    "t": "p",
    "x": "Menu Tag Koperasi digunakan untuk menambahkan tag atau penanda yang menggambarkan bidang usaha maupun komoditas koperasi. Menu ini dapat diakses melalui halaman Profil Koperasi."
   }
  ],
  "steps": [
   {
    "title": "Buka Menu Navigasi",
    "blocks": [
     {
      "t": "p",
      "x": "Klik ikon menu di pojok kiri atas halaman Dashboard untuk membuka sidebar navigasi."
     },
     {
      "t": "img",
      "f": "i184.webp",
      "w": 720,
      "h": 308,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Profil Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada sidebar yang terbuka, klik menu Profil Koperasi."
     },
     {
      "t": "img",
      "f": "i185.webp",
      "w": 720,
      "h": 349,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Tag Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Profil Koperasi, klik menu Tag Koperasi pada daftar menu di sebelah kiri."
     },
     {
      "t": "img",
      "f": "i186.webp",
      "w": 720,
      "h": 337,
      "wide": false
     }
    ]
   },
   {
    "title": "Klik Tombol Tambah",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Tag Koperasi, klik tombol + Tambah untuk menambahkan tag koperasi."
     },
     {
      "t": "img",
      "f": "i187.webp",
      "w": 720,
      "h": 382,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Tag dan Simpan",
    "blocks": [
     {
      "t": "p",
      "x": "Ketik nama tag pada kolom Pilih Tag Koperasi, lalu pilih tag yang sesuai. Tag yang dipilih akan tampil pada bagian Tag Terpilih. Setelah itu, centang pernyataan kebenaran data dan klik tombol Simpan Perubahan."
     },
     {
      "t": "img",
      "f": "i188.webp",
      "w": 720,
      "h": 326,
      "wide": false
     }
    ]
   },
   {
    "title": "Tag Koperasi Berhasil Disimpan",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah klik Simpan Perubahan, tag yang ditambahkan akan tampil pada tabel Tag Koperasi dengan status Belum Terverifikasi hingga diverifikasi oleh pihak terkait. Klik tombol Ubah apabila ingin mengubah tag koperasi."
     },
     {
      "t": "img",
      "f": "i189.webp",
      "w": 720,
      "h": 349,
      "wide": false
     }
    ]
   }
  ]
 },
 {
  "n": "22",
  "title": "Anggota Koperasi",
  "desc": "Tambah data anggota koperasi beserta kontak dan usahanya.",
  "cat": 4,
  "intro": [
   {
    "t": "p",
    "x": "Menu Anggota Koperasi digunakan untuk menambahkan dan mengelola data anggota koperasi yang terdiri dari orang perseorangan. Menu ini dapat diakses melalui halaman Profil Koperasi."
   }
  ],
  "steps": [
   {
    "title": "Buka Menu Navigasi",
    "blocks": [
     {
      "t": "p",
      "x": "Klik ikon menu di pojok kiri atas halaman Dashboard untuk membuka sidebar navigasi."
     },
     {
      "t": "img",
      "f": "i190.webp",
      "w": 720,
      "h": 305,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Profil Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada sidebar yang terbuka, klik menu Profil Koperasi."
     },
     {
      "t": "img",
      "f": "i191.webp",
      "w": 720,
      "h": 341,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Anggota Koperasi dan Klik Tambah",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Profil Koperasi, klik menu Anggota Koperasi pada daftar menu di sebelah kiri, lalu klik tombol + Tambah untuk menambahkan data anggota."
     },
     {
      "t": "img",
      "f": "i192.webp",
      "w": 720,
      "h": 317,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Informasi Pribadi Anggota",
    "blocks": [
     {
      "t": "p",
      "x": "Pada bagian Informasi Pribadi, isi Nomor Induk Kependudukan (NIK), Nama Lengkap, pilih Jenis Kelamin, dan isi Tempat Lahir. Selanjutnya isi Tanggal Lahir, pilih Agama, serta pilih Pendidikan Terakhir anggota."
     },
     {
      "t": "img",
      "f": "i193.webp",
      "w": 720,
      "h": 390,
      "wide": false
     },
     {
      "t": "img",
      "f": "i194.webp",
      "w": 720,
      "h": 291,
      "wide": false
     },
     {
      "t": "img",
      "f": "i195.webp",
      "w": 720,
      "h": 246,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Kontak dan Informasi Alamat",
    "blocks": [
     {
      "t": "p",
      "x": "Isi Nomor Telepon anggota dan atur status Sertifikat SDM Non Kompetensi sesuai kepemilikan sertifikat. Pada bagian Informasi Alamat, pilih Provinsi, Kabupaten/Kota, Kecamatan, dan Kelurahan, lalu isi Alamat Lengkap."
     },
     {
      "t": "img",
      "f": "i196.webp",
      "w": 720,
      "h": 384,
      "wide": false
     },
     {
      "t": "img",
      "f": "i197.webp",
      "w": 720,
      "h": 324,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Informasi Usaha dan Simpan",
    "blocks": [
     {
      "t": "p",
      "x": "Pada bagian Informasi Usaha, isi Nama Usaha, pilih Sektor Usaha, dan isi Deskripsi Usaha anggota. Setelah seluruh data terisi, klik tombol Simpan."
     },
     {
      "t": "img",
      "f": "i198.webp",
      "w": 720,
      "h": 375,
      "wide": false
     }
    ]
   },
   {
    "title": "Anggota Koperasi Berhasil Ditambahkan",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah klik Simpan, sistem menampilkan notifikasi Anggota koperasi berhasil ditambahkan dan data anggota akan tampil pada tabel Anggota Koperasi."
     },
     {
      "t": "img",
      "f": "i199.webp",
      "w": 720,
      "h": 287,
      "wide": false
     },
     {
      "t": "note",
      "x": "Catatan : Kolom bertanda (*) wajib diisi. Pastikan NIK yang dimasukkan sesuai dengan data kependudukan anggota agar data anggota koperasi tercatat dengan benar."
     }
    ]
   }
  ]
 },
 {
  "n": "23",
  "title": "Mitra Koperasi",
  "desc": "Catat mitra kerja sama dan perjanjiannya.",
  "cat": 4,
  "intro": [
   {
    "t": "p",
    "x": "Menu Mitra Koperasi digunakan untuk menambahkan dan mengelola data mitra atau offtaker yang bekerja sama dengan koperasi, seperti pihak yang menyerap atau membeli produk koperasi. Menu ini dapat diakses melalui halaman Profil Koperasi."
   }
  ],
  "steps": [
   {
    "title": "Buka Menu Navigasi",
    "blocks": [
     {
      "t": "p",
      "x": "Klik ikon menu di pojok kiri atas halaman Dashboard untuk membuka sidebar navigasi."
     },
     {
      "t": "img",
      "f": "i200.webp",
      "w": 720,
      "h": 310,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Profil Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada sidebar yang terbuka, klik menu Profil Koperasi."
     },
     {
      "t": "img",
      "f": "i201.webp",
      "w": 720,
      "h": 322,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Mitra Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Profil Koperasi, klik menu Mitra Koperasi pada daftar menu di sebelah kiri."
     },
     {
      "t": "img",
      "f": "i202.webp",
      "w": 720,
      "h": 363,
      "wide": false
     }
    ]
   },
   {
    "title": "Klik Tombol Tambah",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Mitra Koperasi (Offtaker), klik tombol + Tambah untuk menambahkan data mitra."
     },
     {
      "t": "img",
      "f": "i203.webp",
      "w": 720,
      "h": 329,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Data Mitra",
    "blocks": [
     {
      "t": "p",
      "x": "Pilih Jenis Mitra (BUMN, Swasta, atau Lainnya), isi Nama Mitra (Offtaker), dan pilih Status Mitra (Aktif atau Tidak Aktif). Selanjutnya pilih Produk yang Dimitrakan, lalu isi Alamat Mitra, Nomor Telepon Mitra, dan Tanggal Mulai Bermitra."
     },
     {
      "t": "img",
      "f": "i204.webp",
      "w": 720,
      "h": 341,
      "wide": false
     },
     {
      "t": "img",
      "f": "i205.webp",
      "w": 720,
      "h": 361,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Perjanjian Kerja Sama dan Simpan",
    "blocks": [
     {
      "t": "p",
      "x": "Tentukan apakah koperasi sudah memiliki Perjanjian Kerja Sama dengan mitra. Apabila memilih Ya, isi Tanggal Mulai dan Tanggal Berakhir Perjanjian Kerja Sama. Isi Catatan Khusus apabila diperlukan, lalu klik tombol Simpan."
     },
     {
      "t": "img",
      "f": "i206.webp",
      "w": 720,
      "h": 405,
      "wide": false
     }
    ]
   },
   {
    "title": "Mitra Koperasi Berhasil Ditambahkan",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah klik Simpan, sistem menampilkan notifikasi Berhasil menambah Mitra Koperasi dan data mitra akan tampil pada tabel Mitra Koperasi (Offtaker) beserta jenis dan status mitranya."
     },
     {
      "t": "img",
      "f": "i207.webp",
      "w": 720,
      "h": 353,
      "wide": false
     }
    ]
   }
  ]
 },
 {
  "n": "24",
  "title": "Pengawas Koperasi",
  "desc": "Lihat data pengawas koperasi.",
  "cat": 4,
  "intro": [
   {
    "t": "p",
    "x": "Menu Pengawas Koperasi digunakan untuk melihat data pengawas koperasi beserta kepemilikan sertifikat kompetensi dan non-kompetensinya. Menu ini dapat diakses melalui halaman Profil Koperasi."
   }
  ],
  "steps": [
   {
    "title": "Buka Menu Navigasi",
    "blocks": [
     {
      "t": "p",
      "x": "Klik ikon menu di pojok kiri atas halaman Dashboard untuk membuka sidebar navigasi."
     },
     {
      "t": "img",
      "f": "i208.webp",
      "w": 720,
      "h": 331,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Profil Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada sidebar yang terbuka, klik menu Profil Koperasi."
     },
     {
      "t": "img",
      "f": "i209.webp",
      "w": 720,
      "h": 321,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Pengawas Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Profil Koperasi, klik menu Pengawas Koperasi pada daftar menu di sebelah kiri."
     },
     {
      "t": "img",
      "f": "i210.webp",
      "w": 720,
      "h": 329,
      "wide": false
     }
    ]
   },
   {
    "title": "Lihat Data Pengawas Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Halaman Pengawas Koperasi menampilkan data pengawas koperasi beserta kepemilikan sertifikatnya, meliputi NIK, Nama Pengawas, Sertifikat Kompetensi, dan Sertifikat Non- Kompetensi. Gunakan kolom pencarian untuk mencari berdasarkan NIK atau nama pengawas, serta filter Sertifikat Kompetensi untuk menyaring data."
     },
     {
      "t": "img",
      "f": "i211.webp",
      "w": 720,
      "h": 328,
      "wide": false
     }
    ]
   }
  ]
 },
 {
  "n": "25",
  "title": "Manajer Koperasi",
  "desc": "Lihat data manajer koperasi.",
  "cat": 4,
  "intro": [
   {
    "t": "p",
    "x": "Menu Manajer Koperasi digunakan untuk melihat data manajer koperasi beserta kepemilikan sertifikat kompetensinya. Menu ini dapat diakses melalui halaman Profil Koperasi."
   }
  ],
  "steps": [
   {
    "title": "Buka Menu Navigasi",
    "blocks": [
     {
      "t": "p",
      "x": "Klik ikon menu di pojok kiri atas halaman Dashboard untuk membuka sidebar navigasi."
     },
     {
      "t": "img",
      "f": "i212.webp",
      "w": 720,
      "h": 323,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Profil Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada sidebar yang terbuka, klik menu Profil Koperasi."
     },
     {
      "t": "img",
      "f": "i213.webp",
      "w": 720,
      "h": 315,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Manajer Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Profil Koperasi, klik menu Manajer Koperasi pada daftar menu di sebelah kiri."
     },
     {
      "t": "img",
      "f": "i214.webp",
      "w": 720,
      "h": 363,
      "wide": false
     }
    ]
   },
   {
    "title": "Lihat Data Manajer Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Halaman Manajer Koperasi menampilkan data manajer koperasi beserta kepemilikan sertifikatnya, meliputi NIK, Nama Manajer, dan Sertifikat Kompetensi. Gunakan kolom pencarian untuk mencari berdasarkan NIK atau nama manajer, serta filter Sertifikat Kompetensi untuk menyaring data."
     },
     {
      "t": "img",
      "f": "i215.webp",
      "w": 720,
      "h": 358,
      "wide": false
     }
    ]
   }
  ]
 },
 {
  "n": "26",
  "title": "Kesehatan Koperasi",
  "desc": "Lihat hasil penilaian kesehatan koperasi per tahun buku RAT.",
  "cat": 4,
  "intro": [
   {
    "t": "p",
    "x": "Menu Kesehatan Koperasi digunakan untuk melihat data hasil penilaian kesehatan koperasi berdasarkan tahun buku RAT. Menu ini dapat diakses melalui halaman Profil Koperasi."
   }
  ],
  "steps": [
   {
    "title": "Buka Menu Navigasi",
    "blocks": [
     {
      "t": "p",
      "x": "Klik ikon menu di pojok kiri atas halaman Dashboard untuk membuka sidebar navigasi."
     },
     {
      "t": "img",
      "f": "i216.webp",
      "w": 720,
      "h": 362,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Profil Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada sidebar yang terbuka, klik menu Profil Koperasi."
     },
     {
      "t": "img",
      "f": "i217.webp",
      "w": 720,
      "h": 330,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Kesehatan Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Profil Koperasi, klik menu Kesehatan Koperasi pada daftar menu di sebelah kiri."
     },
     {
      "t": "img",
      "f": "i218.webp",
      "w": 720,
      "h": 387,
      "wide": false
     }
    ]
   },
   {
    "title": "Lihat Data Kesehatan Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Halaman Kesehatan Koperasi menampilkan data kesehatan koperasi berupa Tahun Buku RAT, Indikator Kesehatan, dan Deskripsi. Gunakan filter Tahun Buku RAT dan Indikator Kesehatan untuk menampilkan data sesuai tahun buku atau indikator yang ingin dilihat."
     },
     {
      "t": "img",
      "f": "i219.webp",
      "w": 720,
      "h": 359,
      "wide": false
     }
    ]
   }
  ]
 },
 {
  "n": "27",
  "title": "goAML PPATK",
  "desc": "Lihat status pendaftaran goAML PPATK.",
  "cat": 4,
  "intro": [
   {
    "t": "p",
    "x": "Menu goAML PPATK digunakan untuk melihat status pendaftaran koperasi pada aplikasi goAML milik Pusat Pelaporan dan Analisis Transaksi Keuangan (PPATK). Menu ini dapat diakses melalui halaman Profil Koperasi."
   }
  ],
  "steps": [
   {
    "title": "Buka Menu Navigasi",
    "blocks": [
     {
      "t": "p",
      "x": "Klik ikon menu di pojok kiri atas halaman Dashboard untuk membuka sidebar navigasi."
     },
     {
      "t": "img",
      "f": "i224.webp",
      "w": 720,
      "h": 322,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Profil Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada sidebar yang terbuka, klik menu Profil Koperasi."
     },
     {
      "t": "img",
      "f": "i225.webp",
      "w": 720,
      "h": 323,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu goAML PPATK",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Profil Koperasi, klik menu goAML PPATK pada daftar menu di sebelah kiri."
     },
     {
      "t": "img",
      "f": "i226.webp",
      "w": 720,
      "h": 379,
      "wide": false
     }
    ]
   },
   {
    "title": "Lihat Status Pendaftaran goAML PPATK",
    "blocks": [
     {
      "t": "p",
      "x": "Halaman goAML PPATK menampilkan status pendaftaran koperasi pada aplikasi goAML PPATK. Status Belum Terdaftar menandakan koperasi belum terdaftar pada aplikasi goAML PPATK."
     },
     {
      "t": "img",
      "f": "i227.webp",
      "w": 720,
      "h": 348,
      "wide": false
     }
    ]
   }
  ]
 },
 {
  "n": "28",
  "title": "Media Sosial Koperasi",
  "desc": "Tambahkan akun media sosial resmi koperasi.",
  "cat": 4,
  "intro": [
   {
    "t": "p",
    "x": "Menu Media Sosial Koperasi digunakan untuk menambahkan dan mengelola akun media sosial yang dimiliki koperasi. Menu ini dapat diakses melalui halaman Profil Koperasi."
   }
  ],
  "steps": [
   {
    "title": "Buka Menu Navigasi",
    "blocks": [
     {
      "t": "p",
      "x": "Klik ikon menu di pojok kiri atas halaman Dashboard untuk membuka sidebar navigasi."
     },
     {
      "t": "img",
      "f": "i228.webp",
      "w": 720,
      "h": 349,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Profil Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada sidebar yang terbuka, klik menu Profil Koperasi."
     },
     {
      "t": "img",
      "f": "i229.webp",
      "w": 720,
      "h": 327,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Media Sosial Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Profil Koperasi, klik menu Media Sosial Koperasi pada daftar menu di sebelah kiri."
     },
     {
      "t": "img",
      "f": "i230.webp",
      "w": 720,
      "h": 361,
      "wide": false
     }
    ]
   },
   {
    "title": "Klik Tombol Tambah",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Media Sosial Koperasi, klik tombol + Tambah untuk menambahkan akun media sosial koperasi."
     },
     {
      "t": "img",
      "f": "i231.webp",
      "w": 720,
      "h": 329,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Platform dan Tautan",
    "blocks": [
     {
      "t": "p",
      "x": "Pilih Platform media sosial dari daftar, atau ketik nama platform sendiri apabila tidak tersedia. Kemudian isi Tautan dengan menyalin link lengkap akun media sosial koperasi, lalu klik tombol Simpan."
     },
     {
      "t": "img",
      "f": "i232.webp",
      "w": 720,
      "h": 385,
      "wide": false
     }
    ]
   },
   {
    "title": "Media Sosial Koperasi Berhasil Ditambahkan",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah klik Simpan, sistem menampilkan notifikasi Berhasil menambah Media Sosial Koperasi dan data media sosial akan tampil pada tabel beserta platform dan tautannya."
     },
     {
      "t": "img",
      "f": "i233.webp",
      "w": 720,
      "h": 335,
      "wide": false
     }
    ]
   }
  ]
 },
 {
  "n": "29",
  "title": "Sarana dan Prasarana Koperasi",
  "desc": "Catat sarana dan prasarana yang dimiliki koperasi.",
  "cat": 4,
  "intro": [
   {
    "t": "p",
    "x": "Menu Sarana dan Prasarana Koperasi digunakan untuk menambahkan dan mengelola data sarana dan prasarana yang dimiliki atau digunakan koperasi. Menu ini dapat diakses melalui halaman Profil Koperasi."
   }
  ],
  "steps": [
   {
    "title": "Buka Menu Navigasi",
    "blocks": [
     {
      "t": "p",
      "x": "Klik ikon menu di pojok kiri atas halaman Dashboard untuk membuka sidebar navigasi."
     },
     {
      "t": "img",
      "f": "i234.webp",
      "w": 720,
      "h": 358,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Profil Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada sidebar yang terbuka, klik menu Profil Koperasi."
     },
     {
      "t": "img",
      "f": "i235.webp",
      "w": 720,
      "h": 324,
      "wide": false
     }
    ]
   },
   {
    "title": "Pilih Menu Sarana dan Prasarana Koperasi",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Profil Koperasi, klik menu Sarana dan Prasarana Koperasi pada daftar menu di sebelah kiri."
     },
     {
      "t": "img",
      "f": "i236.webp",
      "w": 720,
      "h": 358,
      "wide": false
     }
    ]
   },
   {
    "title": "Klik Tombol Tambah",
    "blocks": [
     {
      "t": "p",
      "x": "Pada halaman Sarana dan Prasarana Koperasi, klik tombol + Tambah untuk menambahkan data sarana atau prasarana."
     },
     {
      "t": "img",
      "f": "i237.webp",
      "w": 720,
      "h": 338,
      "wide": false
     }
    ]
   },
   {
    "title": "Isi Data Sarana dan Prasarana",
    "blocks": [
     {
      "t": "p",
      "x": "Pilih Kelompok, yaitu Sarana untuk alat dan perlengkapan kerja yang bisa dipindahkan atau Prasarana untuk fasilitas dasar yang menetap di tempatnya. Isi Nama Alat, pilih Satuan, dan isi Jumlah. Selanjutnya pilih Kondisi (Baik, Rusak Ringan, atau Rusak Berat), pilih Status Kepemilikan, isi Keterangan apabila diperlukan, lalu klik tombol Simpan."
     },
     {
      "t": "img",
      "f": "i238.webp",
      "w": 720,
      "h": 370,
      "wide": false
     },
     {
      "t": "img",
      "f": "i239.webp",
      "w": 720,
      "h": 351,
      "wide": false
     }
    ]
   },
   {
    "title": "Sarana dan Prasarana Berhasil Ditambahkan",
    "blocks": [
     {
      "t": "p",
      "x": "Setelah klik Simpan, sistem menampilkan notifikasi Berhasil menambah Sarana dan Prasarana Koperasi dan data akan tampil pada tabel beserta kelompok, jumlah, kondisi, dan status kepemilikannya."
     },
     {
      "t": "img",
      "f": "i240.webp",
      "w": 720,
      "h": 377,
      "wide": false
     }
    ]
   }
  ]
 }
];

const IMG={
  "i001.webp": "assets/img/i001.webp",
  "i002.webp": "assets/img/i002.webp",
  "i003.webp": "assets/img/i003.webp",
  "i004.webp": "assets/img/i004.webp",
  "i005.webp": "assets/img/i005.webp",
  "i006.webp": "assets/img/i006.webp",
  "i007.webp": "assets/img/i007.webp",
  "i008.webp": "assets/img/i008.webp",
  "i009.webp": "assets/img/i009.webp",
  "i010.webp": "assets/img/i010.webp",
  "i011.webp": "assets/img/i011.webp",
  "i012.webp": "assets/img/i012.webp",
  "i013.webp": "assets/img/i013.webp",
  "i014.webp": "assets/img/i014.webp",
  "i015.webp": "assets/img/i015.webp",
  "i016.webp": "assets/img/i016.webp",
  "i017.webp": "assets/img/i017.webp",
  "i018.webp": "assets/img/i018.webp",
  "i019.webp": "assets/img/i019.webp",
  "i020.webp": "assets/img/i020.webp",
  "i021.webp": "assets/img/i021.webp",
  "i022.webp": "assets/img/i022.webp",
  "i023.webp": "assets/img/i023.webp",
  "i024.webp": "assets/img/i024.webp",
  "i025.webp": "assets/img/i025.webp",
  "i026.webp": "assets/img/i026.webp",
  "i027.webp": "assets/img/i027.webp",
  "i028.webp": "assets/img/i028.webp",
  "i029.webp": "assets/img/i029.webp",
  "i030.webp": "assets/img/i030.webp",
  "i031.webp": "assets/img/i031.webp",
  "i032.webp": "assets/img/i032.webp",
  "i033.webp": "assets/img/i033.webp",
  "i034.webp": "assets/img/i034.webp",
  "i035.webp": "assets/img/i035.webp",
  "i036.webp": "assets/img/i036.webp",
  "i037.webp": "assets/img/i037.webp",
  "i038.webp": "assets/img/i038.webp",
  "i039.webp": "assets/img/i039.webp",
  "i040.webp": "assets/img/i040.webp",
  "i041.webp": "assets/img/i041.webp",
  "i042.webp": "assets/img/i042.webp",
  "i043.webp": "assets/img/i043.webp",
  "i044.webp": "assets/img/i044.webp",
  "i045.webp": "assets/img/i045.webp",
  "i046.webp": "assets/img/i046.webp",
  "i047.webp": "assets/img/i047.webp",
  "i048.webp": "assets/img/i048.webp",
  "i049.webp": "assets/img/i049.webp",
  "i050.webp": "assets/img/i050.webp",
  "i051.webp": "assets/img/i051.webp",
  "i052.webp": "assets/img/i052.webp",
  "i053.webp": "assets/img/i053.webp",
  "i054.webp": "assets/img/i054.webp",
  "i055.webp": "assets/img/i055.webp",
  "i056.webp": "assets/img/i056.webp",
  "i057.webp": "assets/img/i057.webp",
  "i058.webp": "assets/img/i058.webp",
  "i059.webp": "assets/img/i059.webp",
  "i060.webp": "assets/img/i060.webp",
  "i061.webp": "assets/img/i061.webp",
  "i062.webp": "assets/img/i062.webp",
  "i063.webp": "assets/img/i063.webp",
  "i064.webp": "assets/img/i064.webp",
  "i065.webp": "assets/img/i065.webp",
  "i066.webp": "assets/img/i066.webp",
  "i067.webp": "assets/img/i067.webp",
  "i068.webp": "assets/img/i068.webp",
  "i069.webp": "assets/img/i069.webp",
  "i070.webp": "assets/img/i070.webp",
  "i071.webp": "assets/img/i071.webp",
  "i072.webp": "assets/img/i072.webp",
  "i073.webp": "assets/img/i073.webp",
  "i074.webp": "assets/img/i074.webp",
  "i075.webp": "assets/img/i075.webp",
  "i076.webp": "assets/img/i076.webp",
  "i077.webp": "assets/img/i077.webp",
  "i078.webp": "assets/img/i078.webp",
  "i079.webp": "assets/img/i079.webp",
  "i080.webp": "assets/img/i080.webp",
  "i081.webp": "assets/img/i081.webp",
  "i082.webp": "assets/img/i082.webp",
  "i083.webp": "assets/img/i083.webp",
  "i084.webp": "assets/img/i084.webp",
  "i085.webp": "assets/img/i085.webp",
  "i086.webp": "assets/img/i086.webp",
  "i087.webp": "assets/img/i087.webp",
  "i088.webp": "assets/img/i088.webp",
  "i089.webp": "assets/img/i089.webp",
  "i090.webp": "assets/img/i090.webp",
  "i091.webp": "assets/img/i091.webp",
  "i092.webp": "assets/img/i092.webp",
  "i093.webp": "assets/img/i093.webp",
  "i094.webp": "assets/img/i094.webp",
  "i095.webp": "assets/img/i095.webp",
  "i096.webp": "assets/img/i096.webp",
  "i097.webp": "assets/img/i097.webp",
  "i098.webp": "assets/img/i098.webp",
  "i099.webp": "assets/img/i099.webp",
  "i100.webp": "assets/img/i100.webp",
  "i101.webp": "assets/img/i101.webp",
  "i102.webp": "assets/img/i102.webp",
  "i103.webp": "assets/img/i103.webp",
  "i104.webp": "assets/img/i104.webp",
  "i105.webp": "assets/img/i105.webp",
  "i106.webp": "assets/img/i106.webp",
  "i107.webp": "assets/img/i107.webp",
  "i108.webp": "assets/img/i108.webp",
  "i109.webp": "assets/img/i109.webp",
  "i110.webp": "assets/img/i110.webp",
  "i111.webp": "assets/img/i111.webp",
  "i112.webp": "assets/img/i112.webp",
  "i113.webp": "assets/img/i113.webp",
  "i114.webp": "assets/img/i114.webp",
  "i115.webp": "assets/img/i115.webp",
  "i116.webp": "assets/img/i116.webp",
  "i117.webp": "assets/img/i117.webp",
  "i118.webp": "assets/img/i118.webp",
  "i119.webp": "assets/img/i119.webp",
  "i120.webp": "assets/img/i120.webp",
  "i121.webp": "assets/img/i121.webp",
  "i122.webp": "assets/img/i122.webp",
  "i123.webp": "assets/img/i123.webp",
  "i124.webp": "assets/img/i124.webp",
  "i125.webp": "assets/img/i125.webp",
  "i126.webp": "assets/img/i126.webp",
  "i127.webp": "assets/img/i127.webp",
  "i128.webp": "assets/img/i128.webp",
  "i129.webp": "assets/img/i129.webp",
  "i130.webp": "assets/img/i130.webp",
  "i131.webp": "assets/img/i131.webp",
  "i132.webp": "assets/img/i132.webp",
  "i133.webp": "assets/img/i133.webp",
  "i134.webp": "assets/img/i134.webp",
  "i135.webp": "assets/img/i135.webp",
  "i136.webp": "assets/img/i136.webp",
  "i137.webp": "assets/img/i137.webp",
  "i138.webp": "assets/img/i138.webp",
  "i139.webp": "assets/img/i139.webp",
  "i140.webp": "assets/img/i140.webp",
  "i141.webp": "assets/img/i141.webp",
  "i142.webp": "assets/img/i142.webp",
  "i143.webp": "assets/img/i143.webp",
  "i144.webp": "assets/img/i144.webp",
  "i145.webp": "assets/img/i145.webp",
  "i146.webp": "assets/img/i146.webp",
  "i147.webp": "assets/img/i147.webp",
  "i148.webp": "assets/img/i148.webp",
  "i149.webp": "assets/img/i149.webp",
  "i150.webp": "assets/img/i150.webp",
  "i151.webp": "assets/img/i151.webp",
  "i152.webp": "assets/img/i152.webp",
  "i153.webp": "assets/img/i153.webp",
  "i154.webp": "assets/img/i154.webp",
  "i155.webp": "assets/img/i155.webp",
  "i156.webp": "assets/img/i156.webp",
  "i157.webp": "assets/img/i157.webp",
  "i158.webp": "assets/img/i158.webp",
  "i159.webp": "assets/img/i159.webp",
  "i160.webp": "assets/img/i160.webp",
  "i161.webp": "assets/img/i161.webp",
  "i162.webp": "assets/img/i162.webp",
  "i163.webp": "assets/img/i163.webp",
  "i164.webp": "assets/img/i164.webp",
  "i165.webp": "assets/img/i165.webp",
  "i166.webp": "assets/img/i166.webp",
  "i167.webp": "assets/img/i167.webp",
  "i168.webp": "assets/img/i168.webp",
  "i169.webp": "assets/img/i169.webp",
  "i170.webp": "assets/img/i170.webp",
  "i171.webp": "assets/img/i171.webp",
  "i172.webp": "assets/img/i172.webp",
  "i173.webp": "assets/img/i173.webp",
  "i174.webp": "assets/img/i174.webp",
  "i175.webp": "assets/img/i175.webp",
  "i176.webp": "assets/img/i176.webp",
  "i177.webp": "assets/img/i177.webp",
  "i178.webp": "assets/img/i178.webp",
  "i179.webp": "assets/img/i179.webp",
  "i180.webp": "assets/img/i180.webp",
  "i181.webp": "assets/img/i181.webp",
  "i182.webp": "assets/img/i182.webp",
  "i183.webp": "assets/img/i183.webp",
  "i184.webp": "assets/img/i184.webp",
  "i185.webp": "assets/img/i185.webp",
  "i186.webp": "assets/img/i186.webp",
  "i187.webp": "assets/img/i187.webp",
  "i188.webp": "assets/img/i188.webp",
  "i189.webp": "assets/img/i189.webp",
  "i190.webp": "assets/img/i190.webp",
  "i191.webp": "assets/img/i191.webp",
  "i192.webp": "assets/img/i192.webp",
  "i193.webp": "assets/img/i193.webp",
  "i194.webp": "assets/img/i194.webp",
  "i195.webp": "assets/img/i195.webp",
  "i196.webp": "assets/img/i196.webp",
  "i197.webp": "assets/img/i197.webp",
  "i198.webp": "assets/img/i198.webp",
  "i199.webp": "assets/img/i199.webp",
  "i200.webp": "assets/img/i200.webp",
  "i201.webp": "assets/img/i201.webp",
  "i202.webp": "assets/img/i202.webp",
  "i203.webp": "assets/img/i203.webp",
  "i204.webp": "assets/img/i204.webp",
  "i205.webp": "assets/img/i205.webp",
  "i206.webp": "assets/img/i206.webp",
  "i207.webp": "assets/img/i207.webp",
  "i208.webp": "assets/img/i208.webp",
  "i209.webp": "assets/img/i209.webp",
  "i210.webp": "assets/img/i210.webp",
  "i211.webp": "assets/img/i211.webp",
  "i212.webp": "assets/img/i212.webp",
  "i213.webp": "assets/img/i213.webp",
  "i214.webp": "assets/img/i214.webp",
  "i215.webp": "assets/img/i215.webp",
  "i216.webp": "assets/img/i216.webp",
  "i217.webp": "assets/img/i217.webp",
  "i218.webp": "assets/img/i218.webp",
  "i219.webp": "assets/img/i219.webp",
  "i224.webp": "assets/img/i224.webp",
  "i225.webp": "assets/img/i225.webp",
  "i226.webp": "assets/img/i226.webp",
  "i227.webp": "assets/img/i227.webp",
  "i228.webp": "assets/img/i228.webp",
  "i229.webp": "assets/img/i229.webp",
  "i230.webp": "assets/img/i230.webp",
  "i231.webp": "assets/img/i231.webp",
  "i232.webp": "assets/img/i232.webp",
  "i233.webp": "assets/img/i233.webp",
  "i234.webp": "assets/img/i234.webp",
  "i235.webp": "assets/img/i235.webp",
  "i236.webp": "assets/img/i236.webp",
  "i237.webp": "assets/img/i237.webp",
  "i238.webp": "assets/img/i238.webp",
  "i239.webp": "assets/img/i239.webp",
  "i240.webp": "assets/img/i240.webp"
};

const VIDEOS={
  "01": { "mp4": "assets/video/01-daftar-akun.mp4", "webm": "assets/video/01-daftar-akun.webm" }
};
