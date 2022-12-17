import { google } from "googleapis";
import dotenv from 'dotenv'
dotenv.config()

/*

nah disini kita melakukan configurasi dari google Oauthnya
jadi kita membutuhkan clientID dan clientSecret 

yang bisa kalian dapatkan ketika sudah melakukan registrasi

untuk melihatnya kalian bisa pergi kemenu credensial
dan pada bagian Oauth2 client id

kalian klik nama aplikasi kalian 
dan sisitu nanti ada client id dan client secret


oke langsung saja kita buat configurasinya

*/

export const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENTID,
    process.env.CLIENTSECRET,
    ["http://localhost:3000/auth/google/callback"]
)

// parameter ke 3 yaitu url callbacknya

// selanjutnya kita buat redirect url ke loginnya google
// jadi ini untuk membuat configurasi urlnya ya untuk redirect ke login google

export const loginUrl = oauth2Client.generateAuthUrl({
    access_type : "online",
    scope :  [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ],
    include_granted_scopes: true
})


/*

penjelasan tentang parameter pada generateUahtUrl


Parameter access_type pada metode generateAuthUrl digunakan untuk menentukan 
apakah token OAuth 2.0 yang dikembalikan harus dapat digunakan secara offline 
atau hanya selama sesi login saat ini.

Pilihan yang tersedia untuk parameter access_type adalah online dan offline. 
Jika nilai online dipilih, maka token OAuth 2.0 yang dikembalikan hanya akan 
berlaku selama sesi login saat ini. 

Setelah sesi login selesai, token tersebut tidak akan bisa digunakan lagi dan 
pengguna harus login kembali untuk mendapatkan token baru. Jika nilai offline 
dipilih, maka token OAuth 2.0 yang dikembalikan akan berlaku selamanya, 
sehingga dapat digunakan secara offline.

Pilihan offline biasanya lebih disarankan jika aplikasi Anda membutuhkan akses ke 
data atau layanan yang tidak dapat diakses tanpa login. 

Sebagai contoh, jika aplikasi Anda menggunakan Google Sheets API untuk membaca 
dan menulis ke spreadsheet Google, maka Anda perlu menggunakan token 
OAuth 2.0 yang dapat digunakan secara offline agar dapat mengakses spreadsheet 
tersebut meskipun pengguna tidak login ke aplikasi Anda. 

Namun, jika aplikasi Anda hanya membutuhkan akses ke data yang tersedia secara 
publik, maka menggunakan token OAuth 2.0 yang hanya berlaku selama sesi login 
saat ini mungkin merupakan pilihan yang lebih sesuai.




Parameter access_type menentukan apakah token OAuth 2.0 yang dikembalikan harus 
dapat digunakan secara offline atau hanya selama sesi login saat ini. 
Parameter scope menentukan informasi apa yang diizinkan untuk diakses oleh 
aplikasi Anda dari akun Google pengguna



Berikut adalah beberapa contoh scope yang dapat digunakan pada parameter scope pada 
metode generateAuthUrl untuk mengakses informasi dari akun Google pengguna:

https://www.googleapis.com/auth/userinfo.profile 
Mengizinkan akses ke profil pengguna, seperti nama, alamat email, dan foto profil.

https://www.googleapis.com/auth/userinfo.email
Mengizinkan akses ke alamat email pengguna.

https://www.googleapis.com/auth/contacts
Mengizinkan akses ke kontak pengguna.

https://www.googleapis.com/auth/calendar
Mengizinkan akses ke kalender pengguna.

https://www.googleapis.com/auth/gmail.readonly
Mengizinkan akses baca-saja ke surat elektronik pengguna di Gmail.

https://www.googleapis.com/auth/spreadsheets
Mengizinkan akses ke spreadsheet Google pengguna.

Ini hanyalah beberapa contoh scope yang tersedia. Ada banyak scope lain yang dapat 
digunakan tergantung pada layanan yang ingin diakses. Anda dapat menemukan daftar 
lengkap scope yang tersedia di halaman dokumentasi Google di sini:
https://developers.google.com/identity/protocols/oauth2/scopes.

Untuk menggunakan lebih dari satu scope, Anda dapat menyatukan scope tersebut 
dengan menggunakan tanda koma sebagai pemisah. Sebagai contoh, jika aplikasi 
Anda ingin mengakses profil pengguna dan kontak pengguna, maka Anda dapat 
menggunakan scope 
https://www.googleapis.com/auth/userinfo.profile,https://www.googleapis.com/auth/contacts









parameter include_granted_scopes pada metode generateAuthUrl digunakan untuk 
menentukan apakah scope yang telah diberikan sebelumnya harus dipertahankan 
atau tidak.

Jika nilai include_granted_scopes diatur menjadi true, maka scope yang telah 
diberikan sebelumnya akan dipertahankan. Ini berarti jika pengguna telah memberikan 
akses ke aplikasi Anda sebelumnya dengan scope tertentu, maka saat login kembali, 
aplikasi Anda akan tetap memiliki akses ke scope tersebut.

Jika nilai include_granted_scopes diatur menjadi false, maka scope yang telah 
diberikan sebelumnya akan direset. Ini berarti jika pengguna telah memberikan 
akses ke aplikasi Anda sebelumnya dengan scope tertentu, maka saat login kembali, 
aplikasi Anda harus meminta akses kembali ke scope tersebut.

Pilihan ini berguna jika Anda ingin mengubah scope yang diminta oleh aplikasi Anda 
kepada pengguna. Misalnya, jika aplikasi Anda sebelumnya hanya meminta akses ke 
profil pengguna, tetapi sekarang ingin mengakses kontak pengguna juga, maka anda bisa 
menggunakan yang false untuk meminta access scope lagi



*/