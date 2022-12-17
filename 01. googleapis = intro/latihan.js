// googleapis


/*



dimateri kali ini kita akan belajar mengenai Oauth2 yaitu Open autorization dimana kita bisa 
mengintregasikan atau menghubungkan aplikasi kita dengan authorization server pihak lain

contoh nya google, github,facebook dan lain lain, mereka menyediakan server authorization
yang dapat kita gunakan

pada suatu aplikasi web kita juga pernah melihat pada bagian login itu ada pilihan
mau login manual artinya kita buat akun untuk aplikasi itu sendiri

atau kita gunakan akun google untuk melakukan login, nah sekarang pertanyaannya
apakah aman jika kita login dengan akun google kita?

pada documentasi google menjelaskan bahwa Oauth2 memungkinkan pengguna untuk berbagi data
tertentu sambil menjaga password atau informasi yang bersifat penting

yang dapat diakses oleh pengguna Oauth2 hanya sebatas profil pengguna
nama pengguna,email,foto dan informasi yang biasanya kita lihat saat melihat profil
akun google seseorang

jadi itu terbukti aman ya, karena nanti google yang menghandle keamanan datanya
kita hanya menggunakan data yang dikirimkan dari google ke aplikasi kita

untuk kasus kali ini kita akan belajar membuat Oauth2 menggunakan server authorization 
dari google


apa saja yang kita butuhkan untuk membuat aplikasinya

- package googleapis
- nodejs
- express


sebelum kita mulai kalian harus registrasi ke google console developer terlebih dahulu
lalu bagaimana registrasinya?

kalian bisa lihat dilink berikut ini
https://www.youtube.com/watch?v=xH6hAW3EqLk

untuk bagian url di javascript origin 
kalian tulis 

http://localhost:3000

dan pada bagian redirect url kalian tulis

http://localhost:3000/auth/google/callback


dibagian Oauth consent screen
OAuth consent screen
Scopes bagian scopes next saja
Test users jangan lupa kalian tambahkan akun email anda untuk ujicoba
Summary


dan yang paling penting ini gratis ya

fitur login dengan Google (atau Google Sign-In) adalah fitur yang disediakan secara gratis oleh Google. Anda dapat menggunakan 
fitur ini untuk memudahkan pengguna untuk login ke aplikasi atau situs web Anda dengan menggunakan akun Google mereka.

Untuk menggunakan fitur login dengan Google, Anda perlu mendaftar ke Google Console Developer dan mengaktifkan layanan Google+ API. Setelah itu, Anda dapat mengintegrasikan fitur login dengan Google ke aplikasi atau situs web Anda menggunakan dokumentasi dan pustaka yang tersedia di Google.

Seperti halnya layanan lain yang disediakan oleh Google, ada batasan penggunaan yang diterapkan untuk fitur login dengan Google. 
Namun, dalam banyak kasus, batasan tersebut cukup fleksibel dan tidak mempengaruhi penggunaan yang normal dari fitur ini. 
Anda dapat membaca lebih lanjut tentang batasan penggunaan fitur login dengan Google di halaman dokumentasi yang disediakan oleh Google.




oke jadi itu dulu intronya kita lanjut
ke sesi berikutnya



















*/