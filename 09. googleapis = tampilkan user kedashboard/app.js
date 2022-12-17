// tampilkan info user

/*

nah sekarang setelah kita membuat token, saatnya kita menampilkan 
siapa user yang login

kita pergi keroute /dashboard


*/

import express from 'express'
import router from './route/routes.js'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import mysql from './model/mysql.js'

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

app.get('/dashboard',async (req,res) => {

    /*
    
    yang pertama kita lakukan adalah mengambil tokenya
    dengan perintah req.cookies. nama keynya

    dan kita verify atau kembalikan tokan tersebut menjadi
    object saat kita membuat tokennya
    
    */

    const token = req.cookies.token
    const {id} = jwt.verify(token,'login woy')

    // ambil user
    const user = await mysql('pengguna').where('id',id).first() 
    // kirimkan user
    res.render('dashboard',{user})
})


app.listen(3000,function(){
    console.log('server is listening on http://127.0.0.1:3000')
})


/*

oke jadi kita sudah berhasil menampilkan datanya kehalaman dashboard
tapi masalahnya ketika tokennya sudah kadaluarsa

maka isi dari key token adalah undefined 
ketika undefined kita verify ke string semula

nah karena nilainya undefined maka kita tidak bisa 
mengembalikannya karena itu buken tokennya

kalo kita coba maka hasilnya akan error

disesi berikutnya kita akan melakukan authorization 
atau pembatasan access diaplikasi kita



*/