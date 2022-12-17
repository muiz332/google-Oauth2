// simpan user dan buat cookie dengan jwt

/*

nah sekarang kita simpan dulu si usernya lalu membuat token jwt yang digunakan
untuk mengetahui siapa yang login dan kita akan mengatur token tersebut
di cookie browser

kita pergi ke file routes.js


*/

import express from 'express'
import router from './route/routes.js'
import cookieParser from 'cookie-parser'

const app = express()



// middleware
app.set('view engine','ejs')
app.use('/auth',router)

// kita tambahkan cookie parsernya kemiddleware
app.use(cookieParser())
// pergi kefile routes


// page route

app.get('/',(req,res) => {
    res.render('index')
})

app.get('/login',(req,res) => {
    res.render('login')
})

app.get('/dashboard',(req,res) => {
    res.render('dashboard')
})


app.listen(3000,function(){
    console.log('server is listening on http://127.0.0.1:3000')
})


/*

oke jadi kita sudah berhasil memperbaiki pengambilan user info menjadi promise
agar codingan kita menjadi lebih rapi

dan juga dalam routenya tidak membutuhkan asyncronous, jadi
kita buat menjadi syncronous dengan menghilangkan callback 
menggunakan promise

dan juga kita sudah berhasil membuat token dengan menggunakan json web token
yang diatur kadaluarsanya menjadi 1 menit


terakhir kita set cookienya dengan max age selama 1 menit
httpOnly true agar javascript browser tidak dapat mengakses token kita
menggunakan document.cookie

dan secure true agar token kita hanya dapat diakses pada 
https saja

jadi jadi seperti itu sesi kali ini 
kita akan melanjutkan sesi berikutnya dengan menampilkan user info
yang ada didalam dabatase kehalaman dashboard


*/